import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    return (
        <header className="w-full bg-[#2b2517] bg-opacity-20 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
            {/* Logo */}
            <div className="logo">
                <RouterLink to="/">
                    <h1 className="text-2xl font-bold">
                        Fresh<span className="text-[#e3b53b]">Squeeze</span>
                    </h1>
                </RouterLink>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-8">
                <ScrollLink
                    to="about-us"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer hover:text-[#e3b53b] transition-colors"
                >
                    About
                </ScrollLink>

                <ScrollLink
                    to="benefits"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer hover:text-[#e3b53b] transition-colors"
                >
                    Benefits
                </ScrollLink>

                <ScrollLink
                    to="reviews"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer hover:text-[#e3b53b] transition-colors"
                >
                    Reviews
                </ScrollLink>

                <div className="flex items-center space-x-6">
                    {/* Cart Icon with badge */}
                    <RouterLink
                        to="/cart"
                        className="relative focus:outline-none text-white hover:text-[#e3b53b] transition-colors"
                        aria-label="Shopping cart"
                        title="Cart"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>

                        {/* Badge */}
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-[#e3b53b] text-black text-xs rounded-full px-1.5 font-bold">
                                {cartCount}
                            </span>
                        )}
                    </RouterLink>

                    <RouterLink
                        to="/order"
                        className="bg-[#e3b53b] text-black px-6 py-2 rounded-full font-medium hover:bg-[#d6a930] transition-colors"
                    >
                        Order Now
                    </RouterLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;