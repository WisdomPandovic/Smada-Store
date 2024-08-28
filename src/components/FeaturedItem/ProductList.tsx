import React, { useEffect, useState } from 'react';
import { getProducts } from '../../utils/storage'; 
import { Product } from '../../types/index'; 
import Image from 'next/image';
import Link from 'next/link';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const fetchedProducts = getProducts();
    setProducts(fetchedProducts);
  }
  }, []);

  return (
    <div className="m-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
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
        ))}
      </div>

      <div className="flex justify-center items-center py-4"> 
        <Link href="/some-page" className="bg-white border text-black text-sm py-2 px-4 rounded shadow-md hover:bg-black hover:text-white transition duration-300">
          More
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
