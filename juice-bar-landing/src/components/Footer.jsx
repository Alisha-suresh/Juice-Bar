import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-cream text-black py-8 mt-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Social Media Icons */}
                <div className="flex space-x-6 text-lemon text-xl">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent-green transition">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent-green transition">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent-green transition">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent-green transition">
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* Links */}
                <nav className="flex space-x-8 font-semibold text-sm">
                    <a href="/privacy-policy" className="hover:text-lemon transition">Privacy Policy</a>
                    <a href="/terms" className="hover:text-lemon transition">Terms</a>
                    <a href="/contact" className="hover:text-lemon transition">Contact</a>
                </nav>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-xs text-black/60">
                &copy; {new Date().getFullYear()} JuiceBar. All rights reserved.
            </div>
        </footer>
    );
}
