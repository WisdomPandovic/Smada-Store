import React from 'react';

const FeatureItems: React.FC = () => {
  // Sample data for the images and titles
  const items = [
    { id: 1, title: 'New In', imageUrl: '/assests/images/FeatureItems.jpg' },
    { id: 2, title: 'Clothing', imageUrl: '/assests/images/FeatureItems-2.jpg' },
    { id: 3, title: 'Casual', imageUrl: '/assests/images/FeaturedItems-5.jpg' },
    { id: 4, title: 'Accessories', imageUrl: '/assests/images/FeaturedItems-9.jpg' },
    { id: 5, title: 'New In', imageUrl: '/assests/images/FeaturedItems-6.jpg' },
    { id: 6, title: 'Bottom', imageUrl: '/assests/images/FeatureItems-4.jpg' },
    { id: 7, title: 'Hat', imageUrl: '/assests/images/FeatureItems-3.jpg' },
    { id: 8, title: 'Kids', imageUrl: '/assests/images/FeaturedItems-10.jpg' },
    { id: 9, title: 'Accessories', imageUrl: '/assests/images/FeaturedItems-8.jpg' },
    { id: 10, title: 'Kids', imageUrl: '/assests/images/FeaturedItems-11.jpg' },
    { id: 11, title: 'Shoes', imageUrl: '/assests/images/FeaturedItems-12.jpg' },
    { id: 12, title: 'Handbags', imageUrl: '/assests/images/FeaturedItems-7.jpg' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 p-4 m-6">
      {items.map(item => (
        <div key={item.id} className="text-center cursor-pointer">
      <div className='shadow-sm p-4'>
      <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-32 object-cover mb-2 " // Added shadow class
          />
          <h3 className="text-sm font-bold uppercase"> {/* Added text shadow */}
            {item.title}
          </h3>
        </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureItems;
