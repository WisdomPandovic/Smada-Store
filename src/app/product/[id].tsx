import { useRouter } from 'next/router';
import { getProducts } from '../../utils/storage'; // Adjust the path as necessary
import { Product } from '../../types';
import { useParams } from 'next/navigation';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = useParams();

  console.log('Product ID from URL:', id); // Debugging: Check if ID is captured

  const products: Product[] = getProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        {/* Details Section */}
        <div className="flex flex-col justify-center p-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
