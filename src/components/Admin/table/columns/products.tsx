// src/components/Admin/table/columns/products.tsx

import React from 'react';

// Define the column structure for the DataTable
export const productColumns = [
  {
    name: 'Name',
    selector: (row: any) => row.name,  // Adjust according to your data structure
    sortable: true,
  },
  {
    name: 'Price',
    selector: (row: any) => `$${row.price.toFixed(2)}`,  // Adjust according to your data structure
    sortable: true,
  },
  {
    name: 'Category',
    selector: (row: any) => row.category,  // Adjust according to your data structure
    sortable: true,
  },
  
];
