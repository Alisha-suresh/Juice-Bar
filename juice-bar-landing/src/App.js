import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductsSection from './components/ProductCard';
import ReviewsSection from './components/ProductReviews';
import BenefitsSection from './components/Benefits';
import NewsletterPopup from './components/Newsletter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactSection from './components/Contact';
import { CartProvider } from './context/CartContext';
import CartPage from './components/OrderNow';

function Home() {
  return (
    <>
      <Hero />
      <main className="pt-20 min-h-screen">
        <ProductsSection />
        <BenefitsSection />
        <ReviewsSection />
        <NewsletterPopup />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<div className="pt-24">Checkout Page Placeholder</div>} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;