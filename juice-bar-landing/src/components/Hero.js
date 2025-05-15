import React, { useState, useEffect } from 'react';
import { Button } from './ButtonComponent';

const slides = [
    {
        id: 1,
        image: '/assets/1.png',
        headline: 'FRESH NATURAL JUICE',
        subheadline: 'cold-pressed daily for you',
        description: '100% organic ingredients, packed with nutrients and flavor. No added sugar, no preservatives — just pure goodness.',
    },
    {
        id: 2,
        image: '/assets/2.png',
        headline: 'PURE, COLD-PRESSED GOODNESS',
        subheadline: 'Refreshing flavors every day',
        description: 'Made with fresh fruits and veggies to energize your day.',
    },
    {
        id: 3,
        image: '/assets/3.png',
        headline: 'NATURAL JUICES DELIVERED',
        subheadline: 'Straight from farm to your door',
        description: 'Experience the freshness of cold-pressed juices with every sip.',
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, 10000); // change slide every 10 seconds

        return () => clearInterval(timer);
    }, [length]);

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent((current + 1) % length);
    };

    if (!Array.isArray(slides) || length === 0) {
        return null;
    }

    return (
        <>
            <section className="relative pt-20 md:pt-0 h-screen flex flex-col justify-center overflow-hidden text-white">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === current ? 'opacity-100 z-10' : 'opacity-0 -z-10'
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>
                ))}

                <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div> {/* overlay */}

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 hover:bg-opacity-70 text-yellow-400 hover:text-yellow-500 p-3 rounded-full focus:outline-none transition-all"
                    aria-label="Previous Slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 hover:bg-opacity-70 text-yellow-400 hover:text-yellow-500 p-3 rounded-full focus:outline-none transition-all"
                    aria-label="Next Slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="container mx-auto px-4 md:px-6 relative z-30 max-w-4xl text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
                        {slides[current].headline.split(' ').map((word, i) =>
                            word.toUpperCase() === 'NATURAL' ? (
                                <span key={i} className="text-yellow-400 block">{word}</span>
                            ) : (
                                <span key={i} className="block">{word}</span>
                            )
                        )}
                    </h1>

                    <p className="font-script text-2xl md:text-3xl mb-6">
                        {slides[current].subheadline}
                    </p>

                    <p className="text-lg mb-8 max-w-md mx-auto md:mx-0 text-gray-200">
                        {slides[current].description}
                    </p>

                    <div className="flex justify-center md:justify-start flex-wrap gap-4">
                        {/* using Button component */}
                        <Button href="#menu" variant="primary" size="md">
                            See Menu
                        </Button>
                        <Button href="#contact" variant="secondary" size="md">
                            Order Now
                        </Button>
                    </div>

                    <div className="flex justify-center md:justify-start gap-3 mt-8">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-4 h-4 rounded-full transition-colors ${idx === current ? 'bg-yellow-400' : 'bg-yellow-200'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="bg-yellow-50 text-gray-800 py-16 px-6 md:px-20 text-center md:text-left">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-6">About Us</h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
                        At our juice bar, we are passionate about delivering the freshest, healthiest juices made from 100% organic fruits and vegetables.
                        Our cold-pressed juices preserve natural nutrients and flavor, supporting your wellness and vitality every day.
                        We believe in sustainability, using eco-friendly packaging and sourcing local produce to reduce our environmental impact.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Hero;
