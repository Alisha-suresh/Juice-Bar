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
          {/* Optionally add more routes for Privacy, Terms etc */}
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;