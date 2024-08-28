// import { Product } from '../types/index'; 

// export const getProducts = (): Product[] => {
//     const products = localStorage.getItem('products');
//     return products ? JSON.parse(products) : [];
//   };
  
//   export const saveProducts = (products: Product[]): void => {
//     localStorage.setItem('products', JSON.stringify(products));
//   };
  

import { Product } from '../types/index';

export const getProducts = (): Product[] => {
    if (typeof window !== 'undefined') {
        const products = localStorage.getItem('products');
        return products ? JSON.parse(products) : [];
    }
    return []; // Return an empty array if localStorage is not available (e.g., server-side)
};

export const saveProducts = (products: Product[]): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('products', JSON.stringify(products));
    }
};
