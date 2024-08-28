import React from 'react';


export const productColumns = [
  {
    name: 'Name',
    selector: (row: any) => row.name,  
    sortable: true,
  },
  {
    name: 'Price',
    selector: (row: any) => `$${row.price.toFixed(2)}`,  
    sortable: true,
  },
  {
    name: 'Category',
    selector: (row: any) => row.category,  
    sortable: true,
  },
  
];
