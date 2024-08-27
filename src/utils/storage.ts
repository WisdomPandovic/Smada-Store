export const getProducts = (): Product[] => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  };
  
  export const saveProducts = (products: Product[]): void => {
    localStorage.setItem('products', JSON.stringify(products));
  };
  