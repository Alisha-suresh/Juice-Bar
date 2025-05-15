import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleOrderNow = () => {
        navigate('/order');
    };

    return (
        <header className="w-full bg-[#2b2517] bg-opacity-20 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
            {/* Logo */}
            <div className="logo">
                <h1 className="text-2xl font-bold">
                    Fresh<span className="text-[#e3b53b]">Squeeze</span>
                </h1>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
                <Link
                    to="about-us"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer hover:text-[#e3b53b] transition-colors"
                >
                    About
                </Link>

                <Link
                    to="benefits"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer hover:text-[#e3b53b] transition-colors"
                >
                    Benefits
                </Link>
                <Link
                    to="reviews"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer hover:text-[#e3b53b] transition-colors"
                >
                    Reviews
                </Link>

                <button
                    onClick={handleOrderNow}
                    className="bg-[#e3b53b] text-black px-6 py-2 rounded-full font-medium hover:bg-[#d6a930] transition-colors ml-4"
                >
                    Order Now
                </button>
            </nav>
        </header>
    );
};

export default Header;
