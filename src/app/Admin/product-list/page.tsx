// 'use client'
// import React, { useEffect, useState } from 'react';
// import DataTable from 'react-data-table-component';
// import { getProducts } from '@/utils/storage';  
// import { productColumns } from '@/components/Admin/table/columns/products'; 
// import SearchInput from '@/components/shared/Input/index';

// const ProductList = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [filteredData, setFilteredData] = useState<any[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [editProduct, setEditProduct] = useState<any | null>(null);
//   const [formData, setFormData] = useState({ name: '', price: '', description: '' });

//   useEffect(() => {
//     const storedProducts = getProducts(); 
//     setData(storedProducts || []);  // Ensure data is always an array
//   }, []);

//   const handleEdit = (product: any) => {
//     setEditProduct(product);
//     setFormData({ name: product.name, price: product.price.toFixed(2), description: product.description });
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const updatedProducts = data.map((product: any) =>
//       product.id === editProduct.id
//         ? { ...product, name: formData.name, price: parseFloat(formData.price), description: formData.description }
//         : product
//     );
//     setData(updatedProducts);
//     localStorage.setItem('products', JSON.stringify(updatedProducts));
//     setEditProduct(null);
//   };

//   const handleDelete = (productId: string) => {
//     const updatedProducts = data.filter((product: any) => product.id !== productId);
//     setData(updatedProducts);
//     localStorage.setItem('products', JSON.stringify(updatedProducts));
//   };

//   const columnsWithActions = [
//     ...productColumns,
//     {
//       name: 'Actions',
//       cell: (row: any) => (
//         <div className="flex space-x-2">
//           <button
//             className="bg-blue-500 text-white px-3 py-1 rounded"
//             onClick={() => handleEdit(row)}
//           >
//             Edit
//           </button>
//           <button
//             className="bg-red-500 text-white px-3 py-1 rounded"
//             onClick={() => handleDelete(row.id)}
//           >
//             Delete
//           </button>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Product List</h1>
//       <DataTable
//         columns={columnsWithActions}
//         data={data}
//         pagination
//         highlightOnHover
//       />
//       {editProduct && (
//         <div className="mt-6 p-4 border rounded">
//           <h2 className="text-xl font-bold mb-4">Edit Product</h2>
//           <form onSubmit={handleFormSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleFormChange}
//                 className="border p-2 rounded w-full"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Price:</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleFormChange}
//                 className="border p-2 rounded w-full"
//                 required
//                 step="0.01"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Description:</label>
//               <input
//                 type="text"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleFormChange}
//                 className="border p-2 rounded w-full"
//                 required
//                 step="0.01"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-green-500 text-white px-4 py-2 rounded"
//             >
//               Save Changes
//             </button>
//             <button
//               type="button"
//               onClick={() => setEditProduct(null)}
//               className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
//             >
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;


'use client';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { getProducts } from '@/utils/storage';
import { productColumns } from '@/components/Admin/table/columns/products';
import SearchInput from '@/components/shared/Input/index'; // Import the SearchInput component

const ProductList = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [editProduct, setEditProduct] = useState<any | null>(null);
  const [formData, setFormData] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    const storedProducts = getProducts();
    setData(storedProducts || []);
    setFilteredData(storedProducts || []); // Initialize filteredData with all products
  }, []);

  useEffect(() => {
    // Filter data based on the search term
    const filtered = data.filter(product => 
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toString().includes(searchTerm)
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (product: any) => {
    setEditProduct(product);
    setFormData({ name: product.name, price: product.price.toFixed(2), description: product.description });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProducts = data.map(product =>
      product.id === editProduct.id
        ? { ...product, name: formData.name, price: parseFloat(formData.price), description: formData.description }
        : product
    );
    setData(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setEditProduct(null);
  };

  const handleDelete = (productId: string) => {
    const updatedProducts = data.filter(product => product.id !== productId);
    setData(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const columnsWithActions = [
    ...productColumns,
    {
      name: 'Actions',
      cell: (row: any) => (
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => handleEdit(row)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Add the SearchInput component */}
      <SearchInput
        placeholder="Search by category or price..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <DataTable
        columns={columnsWithActions}
        data={filteredData} // Use filteredData instead of data
        pagination
        highlightOnHover
      />
      {editProduct && (
        <div className="mt-6 p-4 border rounded">
          <h2 className="text-xl font-bold mb-4">Edit Product</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleFormChange}
                className="border p-2 rounded w-full"
                required
                step="0.01"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description:</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditProduct(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductList;
