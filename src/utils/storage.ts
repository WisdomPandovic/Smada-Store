import { Product } from '../types/index';

export const getProducts = (): Product[] => {
    if (typeof window !== 'undefined') {
        const products = localStorage.getItem('products');
        return products ? JSON.parse(products) : [];
    }
    return []; 
};

export const saveProducts = (products: Product[]): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('products', JSON.stringify(products));
    }
};
