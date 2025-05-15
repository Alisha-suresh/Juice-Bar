import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Trash2, ClipboardList, Check, ChevronLeft } from 'lucide-react';

const CartPage = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
    const isEmpty = cart.length === 0;

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity >= 1) {
            updateQuantity(itemId, newQuantity);
        }
    };

    const handleRemoveItem = (itemId) => {
        removeFromCart(itemId);
    };

    const continueShopping = () => {
        navigate('/menu');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Summer Banner */}
            <div className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 h-12 flex items-center justify-center">
                <p className="text-black font-medium">☀️ Summer special! Free shipping on all orders ☀️</p>
            </div>

            {/* Page Header */}
            <div className="pt-10 pb-6 relative">
                <h1 className="text-4xl font-extrabold text-center">
                    Your <span className="text-yellow-500">Cart</span>
                </h1>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 pb-24">
                {isEmpty ? (
                    <div className="flex flex-col items-center justify-center py-16 px-4">
                        <div className="w-32 h-32 mb-6 text-green-400">
                            <ShoppingCart size={128} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
                        <p className="text-gray-600 mb-8 text-center max-w-md">
                            Looks like you haven't added any fresh juice to your cart yet!
                        </p>
                        <div className="relative">
                            <button
                                onClick={continueShopping}
                                className="relative bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all shadow-md hover:shadow-lg"
                            >
                                Start Shopping
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                                        <ShoppingCart className="h-6 w-6 mr-2 text-yellow-400" />
                                        Cart Items
                                    </h2>

                                    <div className="space-y-6">
                                        {cart.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex flex-col sm:flex-row border-b border-gray-200 pb-6 relative group hover:bg-yellow-50 rounded-xl p-3 transition-all"
                                            >
                                                {/* Yellow splash effect on each item */}
                                                <div className="absolute -bottom-3 -right-3 w-16 h-16 opacity-30">
                                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                                        <path
                                                            d="M100,0 C60,40 80,60 50,90 C20,100 0,80 0,100 L100,100 Z"
                                                            className="fill-[#FFD100]"
                                                        />
                                                    </svg>
                                                </div>

                                                <div className="sm:w-32 h-32 mb-4 sm:mb-0 flex-shrink-0">
                                                    <div className="w-full h-full rounded-lg bg-yellow-50 flex items-center justify-center overflow-hidden">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="h-28 w-28 object-contain group-hover:scale-110 transition-transform"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex-grow sm:ml-6 flex flex-col">
                                                    <div className="flex justify-between mb-2">
                                                        <h3 className="font-bold text-gray-800 text-xl">{item.name}</h3>
                                                        <p className="font-bold text-gray-800">£{(item.price * item.quantity).toFixed(2)}</p>
                                                    </div>

                                                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                                                    {/* Tags */}
                                                    {item.tags && (
                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            {item.tags.map((tag, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="bg-yellow-50 text-yellow-700 text-xs font-medium px-2.5 py-1 rounded-full border border-yellow-200"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                                                        {/* Quantity Controls */}
                                                        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
                                                            <button
                                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                                disabled={item.quantity <= 1}
                                                                className="px-4 py-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                                                            >
                                                                -
                                                            </button>
                                                            <span className="px-4 py-1 font-medium">{item.quantity}</span>
                                                            <button
                                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                                className="px-4 py-1 bg-gray-100 hover:bg-gray-200"
                                                            >
                                                                +
                                                            </button>
                                                        </div>

                                                        {/* Remove Button */}
                                                        <button
                                                            onClick={() => handleRemoveItem(item.id)}
                                                            className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            {/* Order Summary with Promo & Review together in one scrollable component */}
                            <div className="sticky top-4 space-y-6">
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                    <div className="absolute -top-3 -right-3 w-16 h-16">
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <path
                                                d="M100,0 C60,40 80,60 50,90 C20,100 0,80 0,100 L100,100 Z"
                                                className="fill-[#FFD100]"
                                            />
                                        </svg>
                                    </div>


                                    {/* Top color bar */}
                                    <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>

                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                                            <ClipboardList className="h-6 w-6 mr-2 text-yellow-400" />
                                            Order Summary
                                        </h2>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Subtotal</span>
                                                <span className="font-medium">£{getCartTotal().toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Shipping</span>
                                                <span className="font-medium text-green-600 flex items-center">
                                                    <Check className="h-4 w-4 mr-1" />
                                                    Free
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Tax</span>
                                                <span className="font-medium">£{(getCartTotal() * 0.07).toFixed(2)}</span>
                                            </div>
                                            <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                                                <div className="flex justify-between">
                                                    <span className="font-bold text-lg">Total</span>
                                                    <span className="font-bold text-lg">£{(getCartTotal() * 1.07).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => navigate('/checkout')}
                                            className="block w-full bg-yellow-400 text-black text-center py-3 rounded-full font-bold hover:bg-yellow-500 transition-all shadow-md hover:shadow-lg"
                                        >
                                            Proceed to Checkout
                                        </button>

                                        <button
                                            className="flex items-center justify-center w-full text-center mt-4 py-2 text-gray-600 hover:text-black"
                                        >
                                            <ChevronLeft className="h-4 w-4 mr-2" />
                                            Continue Shopping
                                        </button>
                                    </div>
                                </div>

                                {/* Promotional banner - Part of sticky container */}
                                <div className="bg-gradient-to-br from-green-300 to-green-500 p-4 rounded-xl shadow-lg relative overflow-hidden">
                                    <div className="absolute -right-6 -bottom-6 w-24 h-24 opacity-20">
                                        {/* Placeholder for lemon image */}
                                        <div className="w-full h-full rounded-full bg-yellow-100 opacity-50"></div>
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-1">Summer Deal! 🍋</h3>
                                    <p className="text-white text-sm">Buy any 3 juices and get a free immunity booster shot!</p>
                                </div>

                                {/* Customer review - Part of sticky container */}
                                <div className="bg-white p-4 rounded-xl shadow border border-yellow-100">
                                    <div className="flex items-center mb-2">
                                        <div className="text-yellow-400 flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm italic text-gray-600">"The Green Detox is amazing! I've been drinking it every morning and feel so energized!"</p>
                                    <p className="text-xs text-gray-500 mt-1">- Sarah T.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;