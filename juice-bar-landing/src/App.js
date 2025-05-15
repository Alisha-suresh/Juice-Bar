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

function Home() {
  return (
    <>
      <Hero />
      <main className="pt-20 min-h-screen">
        <ProductsSection />
        <BenefitsSection />
        <ReviewsSection />
        <NewsletterPopup />
        {/* Remove ContactSection from here */}
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactSection />} />
        {/* Optionally add more routes for Privacy, Terms etc */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
