🛍️ LapakShop – Simple E-Commerce with Next.js
📌 Overview

LapakShop is a simple e-commerce web application built using Next.js (App Router).
This project demonstrates modern web development concepts including:

Static Site Generation (SSG)

Server-Side Rendering (SSR)

Client-Side Data Fetching

Dynamic Routing

Global State Management (Cart)

Error & Loading Handling

The application fetches product data from a public API and allows users to browse products, view details, and add items to a shopping cart.

🔗 Live Demo:
https://milestone-3-zezeone.vercel.app/

🔗 Source Code Repository:
https://github.com/Revou-FSSE-Oct25/milestone-3-zezeone

🚀 Features Implemented
🏠 Home Page (Product Listing)

Fetches products from FakeStore API (Escuela API).

Uses Client-Side Rendering (CSR) with useEffect.

Displays products in a responsive grid layout.

Shows:

Product image

Product title

Product price

Clicking a product navigates to its detail page using dynamic routing.

📄 Product Detail Page

Uses Server-Side Rendering (SSR).

Dynamic route using [id].

Fetches product data based on route parameter.

Displays:

Product image

Product title

Product description

Product price

Implements Add to Cart button.

⚡ Performance Optimization

Uses generateStaticParams() to pre-render selected product pages at build time (Hybrid SSG + SSR).

Implements loading.tsx for better loading experience.

Implements error.tsx for graceful error handling.

🛒 Shopping Cart

Global state management using React Context API.

Features:

Add product to cart

Increase quantity automatically

Remove product

Clear cart

Cart state persists during session navigation.

🧠 Technical Implementation
✅ Next.js Fundamentals

Uses App Router

File-based routing

Dynamic routing with [id]

Component-based architecture

Props passing between components

Proper use of useState and useEffect

✅ Routing & Navigation

next/link for client-side navigation

Dynamic route parameter handling

Server component + Client component separation

No unnecessary page reloads

✅ Data Fetching Strategy
Page	Rendering Strategy
Home	Client-Side Fetching (CSR)
Product Detail	Server-Side Rendering (SSR)
FAQ / Promo	Static Site Generation (SSG)
🛠 Technologies Used

Next.js 16 (App Router)

React 18

TypeScript

Tailwind CSS

Vercel (Deployment)

Public API: https://api.escuelajs.co

📁 Project Structure
src/
 ├── app/
 │   ├── page.tsx
 │   ├── product/[id]/page.tsx
 │   ├── product/[id]/loading.tsx
 │   ├── product/[id]/error.tsx
 │   ├── cart/page.tsx
 │   ├── faq/page.tsx
 │   ├── promo/page.tsx
 │   └── layout.tsx
 │
 ├── components/
 │   ├── nav/
 │   └── product/
 │
 ├── context/
 │   └── CartContext.tsx
 │
 ├── services/
 │   └── ProductService.ts
 │
 └── types/
     └── product.ts

📸 Screenshots
🏠 Home Page

Displays product grid with images and prices.

📄 Product Detail Page

Shows detailed product information and Add to Cart functionality.

🛒 Cart Page

Displays selected items and quantities.

⚙️ How to Run Locally
# Clone repository
git clone https://github.com/Revou-FSSE-Oct25/milestone-3-zezeone

# Go to project folder
cd milestone-3-zezeone

# Install dependencies
npm install

# Run development server
npm run dev


Then open:

http://localhost:3000

📈 Learning Outcomes

Through this project, the following concepts were implemented:

Understanding Next.js App Router architecture

Difference between CSR, SSR, and SSG

Dynamic routing with [id]

Global state management using Context API

Error boundary implementation in Next.js

Proper separation between Server and Client components

Production deployment workflow with Vercel

🏁 Conclusion

LapakShop successfully demonstrates the core fundamentals of Next.js development, including routing, rendering strategies, data fetching patterns, and state management.

This project is structured using modern best practices and follows scalable architecture principles suitable for real-world applications.
