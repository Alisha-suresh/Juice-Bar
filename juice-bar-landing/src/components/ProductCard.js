import React, { useState, useEffect } from 'react';
import { Button } from './ButtonComponent';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { id, title, price, description, image, tags, rating } = product;
    const { addToCart, isInCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    // Check if product is already in cart when component mounts
    useEffect(() => {
        setIsAdded(isInCart(id));
    }, [id, isInCart]);

    const handleAddToCart = () => {
        if (!isAdded) {
            addToCart(product);
            setIsAdded(true);

            // Reset the "Added" status after 2 seconds to allow adding more of the same item
            setTimeout(() => {
                setIsAdded(false);
            }, 2000);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-64 object-cover" />
                <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold py-1 px-4 rounded-bl-lg">
                    £{price.toFixed(2)}
                </div>

                {/* Yellow splash effect */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                            d="M100,0 C60,40 80,60 50,90 C20,100 0,80 0,100 L100,100 Z"
                            className="fill-yellow-400"
                        />
                    </svg>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">{title}</h3>

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 £{i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                <p className="text-gray-600 mb-4">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-yellow-50 text-yellow-600 text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Button component with conditional text */}
                <Button
                    variant="primary"
                    className={`w-full £{isAdded ? 'bg-green-500 hover:bg-green-600' : ''}`}
                    icon={
                        isAdded ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        )
                    }
                    onClick={handleAddToCart}
                >
                    {isAdded ? "Added" : "Add to cart"}
                </Button>
            </div>
        </div>
    );
};


const ProductsSection = () => {
    const products = [
        {
            id: 1,
            title: "Green Detox",
            price: 7.99,
            rating: 5,
            description: "Kale, spinach, cucumber, apple, and lemon to cleanse and energize.",
            image: "/assets/green_juice.png",
            tags: ["Detox", "Green", "Low Sugar"]
        },
        {
            id: 2,
            title: "Tropical Sunrise",
            price: 6.99,
            rating: 4,
            description: "Pineapple, mango, orange, and passion fruit for a vitamin boost.",
            image: "/assets/sunshine.png",
            tags: ["Fruity", "Vitamin C"]
        },
        {
            id: 3,
            title: "Berry Blast",
            price: 8.49,
            rating: 5,
            description: "Strawberry, blueberry, raspberry, and banana packed with antioxidants.",
            image: "/assets/5.png",
            tags: ["Antioxidants", "Berries"]
        },
        {
            id: 4,
            title: "Carrot Ginger",
            price: 7.49,
            rating: 4,
            description: "Fresh carrots, ginger, apple, and turmeric to boost immunity.",
            image: "/assets/4.png",
            tags: ["Immunity", "Anti-inflammatory"]
        }
    ];

    return (
        <section id="menu" className="py-16 px-6 md:px-12 bg-cream-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-yellow-500 font-medium text-2xl">Discover</span>
                    <h2 className="text-4xl font-extrabold mt-2 mb-4">Our Signature Juices</h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Handcrafted fresh daily using only the finest organic ingredients.
                        Our cold-pressed process preserves nutrients for maximum health benefits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        variant="secondary"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        }
                    >
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
