# Smada Store Project Overview

## Overview

This project is a modern web application built using Next.js and React. It features a responsive design and includes various components such as product listings, featured items, and blog sections. The application is designed to be user-friendly and visually appealing, showcasing product details and providing a seamless shopping experience.

## Features

- **Product Listings**: Displays a list of products with details such as images, descriptions, and pricing.
- **Product Details**: Users can view detailed information about each product by clicking on it. Features include product images, descriptions, prices, and ratings.
- **Featured Items**: Highlights special items or promotions.
- **Product Categories**: Categorizes products for easier navigation.
- **Blog Section**: Provides informative and engaging content related to the products.
- **Responsive Design**: Ensures the application looks great on all devices, from mobile phones to desktops.
- **Admin Portal**: Allows for product management, including editing, deleting, and searching for products. Access the Admin Portal by clicking on the user icon on the far right and selecting the Admin Portal option.

## Setup and Running Locally

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/WisdomPandovic/Smada-Store.git
2. Navigate to the project directory:
   cd Smada-Store
3. Install dependencies
   npm install
# or
yarn install
4. Run the development server:
    npm run dev
# or
yarn dev
5. Open your browser and navigate to http://localhost:3000 to view the application.

Design Decisions, Optimizations, and Trade-offs
- **Design**: The application uses a grid layout to ensure a responsive design. Tailwind CSS is utilized for styling to maintain a consistent look and feel.
- **Optimization**: Images are optimized for performance using the Next.js Image component, which provides automatic image optimization and lazy loading.
- **Trade-offs**: The decision to use localStorage for storing product data was made to simplify the setup and avoid the need for a backend server. This may limit scalability and data persistence in production environments.

## Admin Portal
To manage products, including editing, deleting, and searching, access the Admin Portal by clicking on the user icon on the far right and selecting "Admin Portal". This section provides functionality for administrative tasks and product management.

## Live Demo
You can view the live demo of the application at the following link:
