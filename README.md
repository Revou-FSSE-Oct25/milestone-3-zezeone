# 🛍️ LapakShop – Simple E-Commerce with Next.js

## 📌 Overview

LapakShop is a full-stack e-commerce web application built using **Next.js (App Router)** and **TypeScript**.

This project demonstrates modern web development concepts including:

- Static Site Generation (SSG)
- Server-Side Rendering (SSR)
- Incremental Static Regeneration (ISR)
- Client-Side Data Fetching (CSR)
- Dynamic Routing
- Authentication & Protected Routes
- Global State Management (Cart)
- Internal API CRUD
- Unit Testing

The application fetches product data from a public API and allows users to browse products, view details, manage a shopping cart, and access protected pages.

---

## 🔗 Live Demo

👉 https://milestone-3-zezeone.vercel.app/

## 🔗 Source Code

👉 https://github.com/Revou-FSSE-Oct25/milestone-3-zezeone

---

# 🚀 Features

## 🏠 Home Page (Product Listing)

- Fetches products from Escuela API
- Uses Client-Side Rendering (CSR) with `useEffect`
- Displays products in a responsive grid layout
- Shows:
  - Product image
  - Product title
  - Product price
- Navigation using dynamic routing

---

## 📄 Product Detail Page

- Dynamic route using `[id]`
- Server-Side Rendering (SSR)
- Uses `generateStaticParams()` for partial pre-rendering
- Implements `revalidate = 60` (ISR)
- Displays:
  - Product image
  - Title
  - Description
  - Price
- Includes **Add to Cart** functionality

---

## 🔐 Authentication & Middleware

- Login system using **NextAuth (Credentials Provider)**
- Session handling via `SessionProvider`
- Protected routes using middleware (`proxy.ts`)
- Unauthorized users are redirected to the login page
- Checkout and Admin pages are protected

---

## 🛒 Shopping Cart

Global state managed using **React Context API**.

Features:

- Add product to cart
- Auto-increment quantity
- Remove product
- Clear cart
- Persistent cart using localStorage

---

## 📦 Admin & API (CRUD)

Internal API route:

Supports:

- GET – Retrieve products
- POST – Add product
- PUT – Update product
- DELETE – Remove product

Admin page allows product management with dynamic UI updates.

---

## ⚡ Performance Optimization

- Hybrid SSG + SSR architecture
- ISR using `revalidate = 60`
- `loading.tsx` for improved UX
- `error.tsx` for graceful error handling
- Optimized fetch caching

---

## 🧪 Unit Testing

Testing implemented using:

- Jest
- React Testing Library

Coverage:

- 72% overall coverage
- Component rendering tests
- Cart state management tests
- Production build verified

Run tests:

```bash
npm test
```

Check coverage:

```bash
npm run test:coverage
```

## 🧠 Technical Implementation
Next.js Fundamentals

- App Router
- File-based routing
- Dynamic routing
- Server & Client components
- useState & useEffect

## Data Fetching Strategy

- Home : CSR
- Product Detail : SSR + ISR
- FAQ/Promo : SSG

## 🛠 Technologies Used
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- NextAuth
- Jest & React Testing Library
- Vercel
- Public API: https://api.escuelajs.co/

## 📁 Project Structure
Project follows a modular and scalable structure:
```

src/
 ├── app/
 │   ├── admin/
 │   ├── api/
 │   ├── cart/
 │   ├── checkout/
 │   ├── product/[id]/
 │   ├── faq/
 │   ├── promo/
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
 ├── types/
 │   └── product.ts
 │
 └── hooks/

 ```

## 🏁 Conclusion

LapakShop demonstrates modern Next.js development practices including rendering strategies, authentication, protected routes, ISR optimization, CRUD API handling, persistent global state, and unit testing.