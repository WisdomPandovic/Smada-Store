import React from 'react';

const BlogSection = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: 'How to Style Your Wardrobe',
      description: 'Learn the latest trends and styling tips for your wardrobe.',
      imageUrl: '/assests/images/cloth.jpg',
      date: 'August 25, 2024',
    },
    {
      id: 2,
      title: 'The Best Accessories for Fall',
      description: 'Discover must-have accessories for the upcoming fall season.',
      imageUrl: '/assests/images/accessories.jpg',
      date: 'September 5, 2024',
    },
    {
      id: 3,
      title: 'Why Sustainable Fashion Matters',
      description: 'Explore the importance of sustainability in the fashion industry.',
      imageUrl: '/assests/images/sustainable-fashion.jpg',
      date: 'October 10, 2024',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8 uppercase">Smada Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <p className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-center text-xs text-white bg-black py-3 px-2 w-[150px]">
  {blog.date}
</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 text-center">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">{blog.description}</p>            
              <div className="flex justify-center mt-4">
                <button className="bg-white text-xs text-black border-2 border-black py-2 px-6 hover:bg-blue-600 hover:text-white transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
