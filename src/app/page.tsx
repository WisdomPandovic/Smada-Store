'use client'
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '../utils/storage';
import { Product } from '../types/index';
import FeatureItems from '@/components/FeaturedItem/FeaturedItem';
import ProductList from '@/components/FeaturedItem/ProductList';
import ProductCategories from '@/components/ProductCategories/ProductCategories'
import BlogSection from '@/components/BlogComponents/BlogSection'
import Image from 'next/image';
import { FaShippingFast, FaUndoAlt, FaHeadset, FaGift } from "react-icons/fa";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Ensure the code runs only on the client side
    if (typeof window !== 'undefined') {
      setProducts(getProducts());
    }
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-2 p-4">
        <div className="flex items-center justify-center">
          <Image
            src="/assests/images/cloth.jpg"
            alt="Placeholder Image 1"
            width="100"
            height={400}
            layout="responsive"

          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/assests/images/images.jpg"
            alt="Placeholder Image 2"
            width="100"
            height={400}
            layout="responsive"
          />
        </div>

      </div>
      <FeatureItems />
      <div className="flex items-center justify-center my-10 mx-5">
        <Image
          src="/assests/images/discount.jpg"
          alt="Full Width and Height"
          width={100}
          height={150}
          layout="responsive"
        />
      </div>

      {/* <div className="flex items-center justify-center min-h-[200px] p-4 md:p-6 lg:p-8 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-4xl">
          <div className="border p-4 sm:p-6 text-center bg-black text-white uppercase">Men</div>
          <div className="border p-4 sm:p-6 text-center bg-white uppercase">Women</div>
          <div className="border p-4 sm:p-6 text-center bg-white uppercase">Underwear</div>
        </div>
      </div>
      <ProductList /> */}


      {/* <h1 className="text-3xl font-bold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}

      <ProductCategories />

      <div className='bg-[#f7f7f7] my-10 mx-5'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-9 ">
          <div className="relative">
            <img
              src="/assests/images/smada-store.jpg"
              alt="Descriptive Alt Text"
              className="w-full h-[300px] object-cover shadow-md"
            />
          </div>

          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">About Smada Store</h2>
            <p className="mb-4">
              Welcome to SMADA, where innovation meets excellence. Founded with a passion for delivering top-notch products and services, we are dedicated to creating solutions that make life easier, more enjoyable, and more fulfilling for our customers.
            </p>
            <button className="bg-white text-black font-bold text-sm uppercase mt-5 py-3 px-4 shadow-md hover:bg-black hover:text-[white] transition duration-300">
              Find Out More
            </button>
          </div>
        </div>
        <hr className="border-white" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-gray-100">

          <div className="flex flex-col items-center text-center">
            <FaShippingFast className="text-4xl text-blue-500 mb-2" />
            <h3 className="font-semibold text-lg">Fast Free Shipping</h3>
            <p className="text-sm text-gray-600">Get your orders delivered fast and free.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaUndoAlt className="text-4xl text-blue-500 mb-2" />
            <h3 className="font-semibold text-lg">30 Day Money Back</h3>
            <p className="text-sm text-gray-600">Enjoy a risk-free shopping experience with our 30-day guarantee.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaHeadset className="text-4xl text-blue-500 mb-2" />
            <h3 className="font-semibold text-lg">24/7 Help Center</h3>
            <p className="text-sm text-gray-600">We&apos;re here to help you any time of the day.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaGift className="text-4xl text-blue-500 mb-2" />
            <h3 className="font-semibold text-lg">Many Promotional Gifts</h3>
            <p className="text-sm text-gray-600">Receive exclusive gifts with your purchases.</p>
          </div>
        </div>
      </div>
      <BlogSection />
    </div>
  );
};

export default HomePage;
