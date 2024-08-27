'use client'
import { useState, FC } from 'react';
import { saveProducts, getProducts } from '../utils/storage'; 
import { Product } from '../types'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductForm: FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | string>('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string); // Convert the file to Base64 string
    };
    reader.readAsDataURL(file); // Read the file as a Data URL (Base64 string)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation check
    if (!name || !description || !price || !imageUrl || !category) {
      toast.error('Please fill out all fields and upload an image.');
      return;
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      description,
      price: Number(price),
      imageUrl,
      category
    };
    
    const products = getProducts();
    products.push(newProduct);
    saveProducts(products);

    toast.success('Product added successfully!');
    
    setName('');
    setDescription('');
    setPrice('');
    setImageUrl('');
    setCategory('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="p-2 border rounded w-full"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Product Description"
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Product Price"
          className="p-2 border rounded w-full"
        />
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleImageUpload(e.target.files[0]);
            }
          }}
          className="p-2 border rounded w-full"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">Select Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Underwear">Underwear</option>
          {/* Add more categories as needed */}
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Product</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ProductForm;
