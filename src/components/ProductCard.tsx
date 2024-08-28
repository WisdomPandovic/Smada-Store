import { FC } from 'react';
import { Product } from '../types/index';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => (
  <div className="border p-4 rounded shadow-md">
    <img
      src={product.imageUrl}
      alt={product.name}
      className="w-full h-48 object-cover mb-4"
    />
    <h2 className="text-xl font-semibold">{product.name}</h2>
    <p className="text-gray-700 mb-2">{product.description}</p>
    <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
    <Link href={`/product/${product.id}`} className="text-blue-500 mt-4 inline-block">
      View Details
    </Link>
  </div>
);

export default ProductCard;
