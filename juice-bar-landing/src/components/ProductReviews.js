import React, { useState, useEffect } from 'react';

const ReviewsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    const reviews = [
        {
            id: 1,
            name: "Jessica L.",
            avatar: "/assets/female_1.png",
            rating: 5,
            date: "April 12, 2025",
            review: "The Green Detox completely changed my morning routine! I've tried many juice cleanses, but this one actually tastes amazing while giving me so much energy.",
            location: "Portland, OR"
        },
        {
            id: 2,
            name: "Michael T.",
            avatar: "/assets/male_1.png",
            rating: 5,
            date: "March 30, 2025",
            review: "Tropical Sunrise is like vacation in a bottle. The freshness is unmatched, and I love how they don't add any artificial sweeteners. My kids love it too!",
            location: "Austin, TX"
        },
        {
            id: 3,
            name: "Aisha K.",
            avatar: "/assets/female_2.png",
            rating: 4,
            date: "May 2, 2025",
            review: "I order weekly through their subscription service, and it's so convenient. The Berry Blast is my favorite - packed with antioxidants and tastes like summer.",
            location: "Chicago, IL"
        },
        {
            id: 4,
            name: "David R.",
            avatar: "/assets/male_2.png",
            rating: 5,
            date: "April 25, 2025",
            review: "The Carrot Ginger juice helped me through my cold last month. I can literally taste how nutrient-dense these juices are. Worth every penny!",
            location: "Miami, FL"
        }
    ];

    // Auto-scroll functionality
    useEffect(() => {
        let timer;
        if (isAutoScrolling) {
            timer = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }, 8000); // Change review every 8 seconds
        }
        return () => clearInterval(timer);
    }, [isAutoScrolling, reviews.length]);

    // Pause auto-scrolling when user interacts
    const handleDotClick = (index) => {
        setActiveIndex(index);
        setIsAutoScrolling(false);
        // Resume auto-scrolling after 30 seconds of inactivity
        setTimeout(() => setIsAutoScrolling(true), 30000);
    };

    const handleArrowClick = (direction) => {
        setIsAutoScrolling(false);
        if (direction === 'prev') {
            setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
        } else {
            setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }
        // Resume auto-scrolling after 30 seconds of inactivity
        setTimeout(() => setIsAutoScrolling(true), 30000);
    };

    // Smooth scrolling function for CTA button
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();

        const section = document.getElementById(sectionId);
        if (section) {
            // Get the navbar height for offset
            const navbarHeight = document.querySelector('header').offsetHeight;

            // Calculate position accounting for navbar height
            const targetPosition = section.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update URL without full page reload
            window.history.pushState(null, '', `#${sectionId}`);
        }
    };

    return (
        // Added id for smooth scrolling navigation
        <section id="reviews" className="py-16 px-6 md:px-12 bg-cream-50 relative overflow-hidden scroll-mt-20">
            {/* Background decoration */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-yellow-100 opacity-30"></div>
            <div className="absolute -left-16 -bottom-16 w-96 h-96 rounded-full bg-yellow-100 opacity-30"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <span className="text-yellow-500 font-script text-2xl">Customer Love</span>
                    <h2 className="text-4xl font-extrabold mt-2 mb-4">What People Are Saying</h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
                </div>

                <div className="relative px-4">
                    {/* Reviews carousel */}
                    <div className="flex overflow-hidden">
                        {reviews.map((review, index) => (
                            <div
                                key={review.id}
                                className={`w-full flex-shrink-0 transition-all duration-500 transform ${index === activeIndex ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95 absolute'
                                    }`}
                                style={{
                                    left: index === activeIndex ? '0' : '100%',
                                    zIndex: index === activeIndex ? 10 : 0
                                }}
                            >
                                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative">
                                    {/* Yellow splash in corner */}
                                    <div className="absolute -top-3 -right-3 w-16 h-16 z-0">
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <path
                                                d="M0,0 C40,40 20,60 50,90 C80,100 100,80 100,100 L0,100 Z"
                                                className="fill-yellow-400"
                                            />
                                        </svg>
                                    </div>

                                    {/* Large quote mark */}
                                    <div className="text-8xl text-yellow-200 font-serif absolute top-4 left-6 leading-none z-0">"</div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                            <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                                        </div>

                                        <p className="text-lg text-gray-700 mb-8 italic relative z-10">
                                            "{review.review}"
                                        </p>

                                        <div className="flex items-center">
                                            <img
                                                src={review.avatar}
                                                alt={review.name}
                                                className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                                            />
                                            <div className="ml-4">
                                                <h4 className="font-bold text-lg">{review.name}</h4>
                                                <p className="text-sm text-gray-500">{review.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={() => handleArrowClick('prev')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 z-20 bg-white hover:bg-yellow-50 text-yellow-400 hover:text-yellow-500 p-3 rounded-full shadow-lg focus:outline-none transition-all"
                        aria-label="Previous review"
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

                    <button
                        onClick={() => handleArrowClick('next')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-0 z-20 bg-white hover:bg-yellow-50 text-yellow-400 hover:text-yellow-500 p-3 rounded-full shadow-lg focus:outline-none transition-all"
                        aria-label="Next review"
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
                </div>

                {/* Dots navigation */}
                <div className="flex justify-center gap-3 mt-8">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === activeIndex ? 'bg-yellow-400 w-6' : 'bg-yellow-200 hover:bg-yellow-300'
                                }`}
                            aria-label={`Go to review ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* CTA Section with smooth scrolling */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to try our juices?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Join thousands of happy customers who have discovered the benefits of our fresh, cold-pressed juices.
                    </p>
                    <a
                        href="#order"
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center"
                    >
                        Order Now
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;