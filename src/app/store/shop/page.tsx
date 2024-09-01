'use client'
import Image from 'next/image';
import ProductList from '@/components/FeaturedItem/ProductList';
import ProductCategoryGrid from '@/components/ProductCategoryGrid/ProductCategoryGrid'

const ShopPage = () => {
  return (
    <div>
      <div className="relative w-full h-96 mb-8">
        <Image
          src="/assests/images/store.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-16">
        <div className="lg:col-span-2 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Shop Categories</h2>
          <p className="text-gray-700">Explore our wide range of products...</p>
          <ProductList />
        </div>

        <div className="bg-gray-200 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-700">Check out our featured items...</p>
          <ProductCategoryGrid />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
