# Paradise Nursery

Paradise Nursery is a React shopping-cart web app for an online houseplant
store. Shoppers can browse plants grouped by category, add them to a cart,
adjust quantities, and see a live running total — all backed by Redux state.

## Project name

**Paradise Nursery**

## Features

- Landing page with a full-bleed background image, the company name, and a
  "Get Started" button that routes into the product catalog.
- About Us section describing the company.
- Product listing page with plants grouped into three categories (Air
  Purifying, Aromatic Fragrant, and Low Maintenance Plants), each showing a
  thumbnail, name, and price.
- "Add to Cart" buttons that add the plant to the cart, disable themselves
  once added, and update a live cart item count in the navbar.
- Shopping cart page showing each item's thumbnail, name, unit price,
  quantity controls, line subtotal, a delete button, the overall cart total,
  a "Checkout (Coming Soon)" button, and a "Continue Shopping" link back to
  the catalog.

## Tech stack

- React (Vite)
- Redux Toolkit + React Redux for cart state
- React Router for navigation between Home, Plants, and Cart

## Project structure

```
paradise-nursery/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── store.js
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── components/
    │   ├── AboutUs.jsx
    │   ├── Navbar.jsx
    │   ├── ProductList.jsx
    │   └── CartItem.jsx
    └── redux/
        └── CartSlice.jsx
```

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`) in your
browser.

## Build

```bash
npm run build
npm run preview
```
