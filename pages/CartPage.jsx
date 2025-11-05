import React from 'react';
import { ArrowLeftIcon, Trash2Icon, ArrowRightIcon } from '../components/icons/IconLibrary';

const PageHeader = ({ title, subtitle, handleBack, showBackButton }) => {
    return (
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-12">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                {showBackButton && (
                    <button 
                        onClick={handleBack}
                        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Go back"
                    >
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>
                )}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">{title}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
            </div>
        </div>
    );
};

const CartPage = ({ navigate, handleBack, history, cartItems, removeFromCart, clearCart }) => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const taxRate = 0.10; // 10% tax
    const taxes = subtotal * taxRate;
    const total = subtotal + taxes;

    const handleCheckout = () => {
        alert(`Thank you for your purchase! Your total is $${total.toFixed(2)}.`);
        clearCart();
        navigate('dashboard');
    };

    if (cartItems.length === 0) {
        return (
            <div className="bg-gray-50 dark:bg-gray-900">
                <PageHeader 
                    title="Shopping Cart" 
                    subtitle="Your cart is currently empty."
                    handleBack={handleBack}
                    showBackButton={history && history.length > 0}
                />
                <div className="text-center p-12">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Looks like you haven't added any courses yet.</p>
                    <button
                        onClick={() => navigate('courses')}
                        className="bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primary-700 transition"
                    >
                        Browse Courses
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <PageHeader 
                title="Shopping Cart"
                subtitle={`You have ${cartItems.length} course(s) in your cart.`}
                handleBack={handleBack}
                showBackButton={history && history.length > 0}
            />
            <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items */}
                    <div className="lg:w-2/3 w-full">
                        <div className="space-y-4">
                            {cartItems.map(course => (
                                <div key={course.id} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                                    <div className="w-24 h-24 flex-shrink-0 rounded-xl flex items-center justify-center bg-primary-100 dark:bg-primary-900/50">
                                        <span className="text-xs font-bold text-primary-700 dark:text-primary-300">
                                            {course.category}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{course.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{course.level}</p>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <p className="font-bold text-lg text-primary-600 dark:text-primary-400">${course.price.toFixed(2)}</p>
                                        <button onClick={() => removeFromCart(course.id)} className="text-red-500 hover:text-red-700 dark:hover:text-red-400 mt-1 transition">
                                            <Trash2Icon className="w-5 h-5 inline-block mr-1" />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3 w-full">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">Order Summary</h2>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                    <span>Taxes ({(taxRate * 100).toFixed(0)}%)</span>
                                    <span>${taxes.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white pt-3 border-t border-gray-200 dark:border-gray-700 mt-3">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <button 
                                onClick={handleCheckout}
                                className="w-full bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-primary-700 transition duration-150 transform hover:scale-[1.01] flex items-center justify-center"
                            >
                                Proceed to Checkout
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </button>
                            <button
                                onClick={clearCart}
                                className="w-full text-center text-sm text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 mt-4 transition"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;