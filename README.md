# Meridian Furniture eCommerce Platform

## Overview

Meridian Furniture is an eCommerce platform focused on delivering high-quality furniture directly to customers' doorsteps. The platform aims to leverage online channels and imported stock initially, with plans to expand into local production.

## Day 1 - Market Research & Business Focus

### Market Research

- **Market Size:** The furniture market in Pakistan is valued at approximately $3-4 billion, growing at 8-10% annually.
- **Key Segments:** Dominated by wooden furniture (60-65% of sales), with significant demand for bedroom, living room, and dining room furniture.
- **Competitive Landscape:** A mix of large manufacturers and local workshops, with brands like Artistic Furniture and Serena leading the market. Imported furniture is gaining traction.
- **Retail Channels:** Sales occur through showrooms, retail stores, and e-commerce platforms like Daraz.
- **Challenges & Opportunities:** High raw material costs and competition from imports are challenges, while opportunities lie in expanding to smaller cities and developing affordable furniture lines.

### Business Focus

- **Requirements:** A high-quality frontend, responsive backend, efficient storage, reliable shipping, and good customer service.
- **Target Audience:** Young adults in urban and suburban areas, who are increasingly comfortable with online shopping.
- **Goal:** To create a sustainable and thriving business in the competitive furniture market.

### Schema Draft

- **Product:** ID, Name, Description, Image, Price, Sizes, Colors, Rating, SKU, Category, Tags.
- **Customer:** ID, Name, Phone, Email, Orders, Wishlist, Cart.
- **Order:** ID, Customer ID, Products, Status.
- **Shipment:** ID, Order ID, Address, Zone, Provider.
- **Review:** ID, Product ID, Customer ID, Stars, Body.

---

## Day 2 - Technical Specifications

### System Architecture Overview

The architecture utilizes a **Next.js** frontend that interacts with a **Sanity CMS API** and various third-party APIs for data management and content delivery.

### Key Workflows

1. **User Registration:** Users can register through the frontend, which communicates with the Sanity API to create accounts.
2. **Product Browsing:** Users can view and filter products, with data fetched from the Sanity API.
3. **Order Placement:** Users can add items to their cart and place orders, with the Sanity API handling order validation and processing.

### API Requirements

- **Endpoints:** Include customer registration, product listing, product details, and order placement, with specified payloads and responses.

---

## Day 3 - API Integration Report

### Process

Product data was successfully migrated from an external API to the Sanity API without errors.

### Adjustments

Significant changes were made to the product schema to ensure compatibility with the API, including renaming fields and adjusting data types.

### Migration Steps

1. **Define the Schema:** Created a new schema file for products in the Sanity project.
2. **Migrate Data:** Implemented a route handler to fetch and insert product data into Sanity.

---

## Day 4 - Dynamic Frontend Components

### Components

The platform features a live cart and dynamic product listings, utilizing a custom `useCart()` hook with the Context API for state management.

### Challenges

The main challenge was ensuring that duplicate entries in the cart were avoided during product addition.

tsx

```tsx
// Example of CartProvider implementation
const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State management for cart items and total
  // Functions to add and remove items from the cart
};
```

---

## Day 5 - Testing and Backend Refinement

### Test Report

A series of test cases were executed to validate core functionalities of the eCommerce platform, including adding items to the cart, viewing the cart, and navigating through the site.

#### Summary of Test Cases

- **Passed:** Most core functionalities, including adding items to the cart and proceeding to checkout.
- **Failed:**
  - **TC006:** Empty cart message not displayed correctly (Priority issue).
  - **TC008:** Navigation to product details from the cart needs further investigation.
