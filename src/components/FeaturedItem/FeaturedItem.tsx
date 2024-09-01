import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeatureItems: React.FC = () => {
  const items = [
    { id: 1, title: 'New In', imageUrl: '/assests/images/FeatureItems.jpg', link: '/new-in' },
    { id: 2, title: 'Clothing', imageUrl: '/assests/images/FeatureItems-2.jpg', link: '/clothing' },
    { id: 3, title: 'Casual', imageUrl: '/assests/images/FeaturedItems-5.jpg', link: '/casual' },
    { id: 4, title: 'Accessories', imageUrl: '/assests/images/FeaturedItems-9.jpg', link: '/accessories' },
    { id: 5, title: 'New In', imageUrl: '/assests/images/FeaturedItems-6.jpg', link: '/new-in' },
    { id: 6, title: 'Bottom', imageUrl: '/assests/images/FeatureItems-4.jpg', link: '/bottom' },
    { id: 7, title: 'Hat', imageUrl: '/assests/images/FeatureItems-3.jpg', link: '/hat' },
    { id: 8, title: 'Kids', imageUrl: '/assests/images/FeaturedItems-10.jpg', link: '/kids' },
    { id: 9, title: 'Accessories', imageUrl: '/assests/images/FeaturedItems-8.jpg', link: '/accessories' },
    { id: 10, title: 'Kids', imageUrl: '/assests/images/FeaturedItems-11.jpg', link: '/kids' },
    { id: 11, title: 'Shoes', imageUrl: '/assests/images/FeaturedItems-12.jpg', link: '/shoes' },
    { id: 12, title: 'Handbags', imageUrl: '/assests/images/FeaturedItems-7.jpg', link: '/handbags' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 p-4 m-6">
      {items.map(item => (
        <Link key={item.id} href={item.link}>
          <div className="text-center cursor-pointer">
            <div className='shadow-sm p-4'>
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={100}
                height={32}
                className="w-full h-32 object-cover mb-2 "
              />
              <h3 className="text-sm font-bold uppercase">
                {item.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeatureItems;
