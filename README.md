Hello Everyone,
Here’s a detailed breakdown of an ecommerce project that you can work on to consolidate your Next.js knowledge. This assignment will test your skills in Next.js features, API integration, and application architecture.
Next.js Ecommerce Platform Using Free APIs
Project Overview:
Build a fully functional ecommerce application using Next.js. The app should allow users to:
•	Browse categories and products.
•	Filter products by price and category.
•	Add/remove products to/from cart, wishlist, and compare list.
•	View detailed information for each product.
•	Persist cart, wishlist, and compare data using local storage or session storage.
________________________________________
Free APIs to Use:
1.	Fake Store API: 
o	Base URL: https://fakestoreapi.com
o	Endpoints: 
	Categories: /products/categories
	Products by Category: /products/category/:category
	Product Details: /products/:id
	All Products: /products
________________________________________
Project Features:
1. Homepage: Display Categories
•	Fetch and display product categories (/products/categories) as cards or tiles.
•	On clicking a category, navigate to a dedicated category page.
________________________________________
2. Category Page: Display Products by Category
•	Fetch and display products for the selected category (/products/category/:category).
•	Implement pagination (8 products per page).
•	Allow sorting by price (low to high, high to low).
•	Add filter options for price range and ratings (mock ratings since API doesn’t provide it).
________________________________________
3. Product Details Page
•	Fetch and display detailed product information (/products/:id).
•	Include the following: 
o	Product image, title, price, description, and category.
o	"Add to Cart," "Add to Wishlist," and "Add to Compare" buttons.
________________________________________
4. Cart Functionality
•	Implement a Cart page: 
o	Display items added to the cart.
o	Allow users to adjust product quantities or remove items.
o	Show the total price of items in the cart.
•	Persist cart data in localStorage.
________________________________________
5. Wishlist Functionality
•	Implement a Wishlist page: 
o	Display products added to the wishlist.
o	Allow users to move products from the wishlist to the cart.
•	Persist wishlist data in localStorage.
________________________________________
6. Compare Functionality
•	Implement a Compare page: 
o	Display side-by-side comparison of selected products (e.g., title, price, description).
o	Allow users to add compared products to the cart.
•	Persist compare data in localStorage.
________________________________________
7. Search Functionality
•	Add a search bar in the navbar to search for products by title (/products).
•	Display results on a dedicated Search Results page.
________________________________________
8. Product Filters
•	Implement filters on the product listing and category pages: 
o	Price Range Filter: Mock price range filtering on the client side.
o	Category Filter: Allow multiple category selections (checkboxes).
•	Combine filters dynamically to refine results.
________________________________________
9. Responsive Design
•	Ensure the application is mobile-friendly.
________________________________________
Project Architecture:
Pages Directory
/pages
  index.js               // Homepage: Displays product categories
  /category
    [category].js        // Category page: Displays products for a category
  /products
    [id].js              // Product details page
  cart.js                // Cart page
  wishlist.js            // Wishlist page
  compare.js             // Compare page
  search.js              // Search results page
________________________________________
Components Directory
/components
  Navbar.js              // Navbar with search bar, cart icon, wishlist icon
  Footer.js              // Footer with links and copyright
  CategoryCard.js        // Card component for product categories
  ProductCard.js         // Card component for product listing
  ProductDetails.js      // Component for product details
  CartItem.js            // Cart item with quantity controls
  WishlistItem.js        // Wishlist item component
  CompareTable.js        // Comparison table for products
  Pagination.js          // Pagination component for product lists
  Filters.js             // Filters for price range and category
________________________________________
Tech Stack and Next.js Features to Use
1.	Data Fetching: 
o	Use getStaticProps for static data (e.g., categories).
o	Use getServerSideProps for dynamic data (e.g., products and search).
2.	Dynamic Routing: 
o	Use dynamic routes for categories (/category/[category]) and products (/products/[id]).
3.	State Management: 
o	Use Context API for managing cart, wishlist, and compare states.
4.	Image Optimization: 
o	Use the Next.js <Image> component for optimized product images.
5.	SEO Optimization: 
o	Add meta tags dynamically using next/head.
o	Generate SEO-friendly URLs for products and categories.
6.	Error Handling: 
o	Implement custom error pages for 404 and 500 errors.
7.	Performance Optimization: 
o	Use lazy loading for components and images.
o	Implement client-side caching for API responses.
Please go through the email carefully and start working on the assignment. I will only check once everything is implemented and tested from your side.
Note: Please do not take help from anyone while coding as this will only grow you as individual contributor and improve your confidence.

Thanks and Regards,
Rohit A. | Sr. Software Engineer
 
Futurism Technologies, Inc.
Email: rohita@futurismtechnologies.com 
Website: www.futurismtechnologies.com
Website: www.futurismsecurity.com

 

Disclaimer: This e-mail and any files transmitted with it are for the sole use of the intended recipient(s) and may contain confidential and privileged information. If you are not the intended recipient, please contact the sender by reply e-mail and destroy all copies of the original message. 
