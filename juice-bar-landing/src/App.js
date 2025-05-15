import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductsSection from './components/ProductCard';
import ReviewsSection from './components/ProductReviews';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="pt-20 min-h-screen">
        {/* Content */}
        <ProductsSection />
        <ReviewsSection />
        {/* Add more sections as needed */}
      </main>
      <Footer />
    </>
  );
}

export default App;
