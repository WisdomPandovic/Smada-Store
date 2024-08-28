// 'use client'
// import { useRouter } from 'next/router';
// import { getProducts } from '../../../utils/storage'; 
// import { Product } from '../../../types/index';
// import { useParams } from 'next/navigation';
// import { FaStar } from 'react-icons/fa';
// import ProductList from '@/components/FeaturedItem/ProductList';

// const ProductDetails = () => {
//     const { id } = useParams();

//     console.log('Product ID from URL:', id); 
//     const rating = 4;
//     const products: Product[] = getProducts();
//     const product = products.find((p) => p.id === id);

//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     return (
//         <div className="bg-[#f7f7f7] p-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="flex items-center justify-center">
//                     <img
//                         src={product.imageUrl}
//                         alt={product.name}
//                         className="w-full h-full object-cover rounded-lg shadow-md"
//                     />
//                 </div>
                
//                 <div className="flex flex-col p-4">
//                     <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//                     <p className="text-gray-700 mb-4">{product.description}</p>
//                     <p className="text-lg font-bold">${product.price.toFixed(2)}</p>

//                     <div className='my-8'>
//                         <p>Color:</p>
//                         <div className="flex gap-4 ">
//                             <p className="w-5 h-5 bg-black rounded-lg cursor-pointer"></p>
//                             <p className="w-5 h-5 bg-white rounded-lg border cursor-pointer"></p>
//                         </div>
//                     </div>

//                     <div className="flex items-center mb-4">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                             <FaStar
//                                 key={star}
//                                 className={`text-lg ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
//                             />
//                         ))}
//                     </div>

//                     <div className="flex flex-col w-1/2">
//                         <h2 className="text-sm font-semibold mb-2">Size Options</h2>
//                         <div className="flex flex-wrap gap-2">
//                             <button className="bg-gray-200 border rounded-lg px-4 py-2 text-sm">S</button>
//                             <button className="bg-gray-200 border rounded-lg px-4 py-2 text-sm">M</button>
//                             <button className="bg-gray-200 border rounded-lg px-4 py-2 text-sm">L</button>
//                             <button className="bg-gray-200 border rounded-lg px-4 py-2 text-sm">XL</button>
//                             <button className="bg-gray-200 border rounded-lg px-4 py-2 text-sm">XXL</button>
//                         </div>
//                     </div>

//                     <div className="flex gap-4 mt-5">
//                         <button className="bg-black text-white font-bold py-2 px-4 shadow-md hover:bg-white hover:text-black transition duration-300">
//                             Buy Product
//                         </button>
//                         <button className="bg-white text-black font-bold border py-2 px-4 shadow-md hover:bg-black hover:text-white transition duration-300">
//                             Add to Cart
//                         </button>
//                     </div>

//                     <div className='mt-7 text-xs'>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='mt-10'>
//                 <p className='p-4 font-bold text-lg uppercase'>Similar Product</p>
//                 <ProductList />
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;


'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProducts } from '../../../utils/storage'; 
import { Product } from '../../../types/index';
import { useParams } from 'next/navigation';
import { FaStar } from 'react-icons/fa';
import ProductList from '@/components/FeaturedItem/ProductList';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const products: Product[] = getProducts();
            const foundProduct = products.find((p) => p.id === id);
            setProduct(foundProduct || null);
        }
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const rating = 4;

    return (
        <div className="bg-[#f7f7f7] p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>
                
                <div className="flex flex-col p-4">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-lg font-bold">${product.price.toFixed(2)}</p>

                    <div className='my-8'>
                        <p>Color:</p>
                        <div className="flex gap-4 ">
                            <p className="w-5 h-5 bg-black rounded-lg cursor-pointer"></p>
                            <p className="w-5 h-5 bg-white rounded-lg border cursor-pointer"></p>
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className={`text-lg ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col w-1/2">
                        <h2 className="text-sm font-semibold mb-2">Size Options</h2>
                        <div className="flex flex-wrap gap-2">
                            <button className="bg-gray-200 border rounded-lg px-4 py-2 text-sm">S</button>
                            <button className="bg-gray-200 border rounded-lg px-4 py-2 text-sm">M</button>
                            <button className="bg-gray-200 border rounded-lg px-4 py-2 text-sm">L</button>
                            <button className="bg-gray-200 border rounded-lg px-4 py-2 text-sm">XL</button>
                            <button className="bg-gray-200 border rounded-lg px-4 py-2 text-sm">XXL</button>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-5">
                        <button className="bg-black text-white font-bold py-2 px-4 shadow-md hover:bg-white hover:text-black transition duration-300">
                            Buy Product
                        </button>
                        <button className="bg-white text-black font-bold border py-2 px-4 shadow-md hover:bg-black hover:text-white transition duration-300">
                            Add to Cart
                        </button>
                    </div>

                    <div className='mt-7 text-xs'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <p className='p-4 font-bold text-lg uppercase'>Similar Product</p>
                <ProductList />
            </div>
        </div>
    );
};

export default ProductDetails;
