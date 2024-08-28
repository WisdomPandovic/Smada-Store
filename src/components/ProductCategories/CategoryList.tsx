import React from 'react';
import { getProducts } from '../../utils/storage'; // Import your function to get products from localStorage
import { Product } from '../../types/index'; // Make sure you have a Product type defined
import Link from 'next/link';
import Image from 'next/image';

interface ProductListProps {
  category: string;
}

const CategoryList: React.FC<ProductListProps> = ({ category }) => {
  // Fetch products from local storage
  const products: Product[] = getProducts();

  // Filter products based on the selected category
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="m-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-80"> 
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-sm text-[#b9baba]">{product.name}</h2>
              <p className="text-sm mb-2">{product.description}</p> 
              <p className="text-[#f1385f] text-sm mb-4">${product.price.toFixed(2)}</p> 
              <Link href={`/product/${product.id}`} className="text-black bg-[#f5f5f5] text-sm p-3 mt-2 block w-full rounded">

                View Details

              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No products found in the {category} category.</p>
      )}
    </div>
    <div className="flex justify-center items-center py-4"> 
        <Link href="/store/shop" className="bg-white border text-black text-sm py-2 px-4 rounded shadow-md hover:bg-black hover:text-white transition duration-300">
          More
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
