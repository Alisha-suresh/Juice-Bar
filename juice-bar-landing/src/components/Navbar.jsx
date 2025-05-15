import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['About', 'Menu', 'Benefits', 'Reviews'];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Updated logo link to direct to home page */}
                <a href="/" className="flex items-center text-2xl font-bold">
                    <span className="text-black">Fresh</span>
                    <span className="text-yellow-400">Squeeze</span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-medium hover:text-yellow-400 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition-colors"
                    >
                        Order Now
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Mobile Menu + Backdrop */}
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-30 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <nav className="fixed top-full left-0 right-0 bg-white shadow-lg py-6 z-50 animate-slide-down md:hidden">
                            <div className="container mx-auto px-4 flex flex-col space-y-4">
                                {navItems.map(item => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="font-medium hover:text-yellow-400 transition-colors px-2 py-1"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full w-full text-center transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Order Now
                                </a>
                            </div>
                        </nav>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navigation;