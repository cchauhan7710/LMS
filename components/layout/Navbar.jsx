import React from 'react';
import { MenuIcon, ShoppingCartIcon } from '../icons/IconLibrary';
import ColorThemeSwitcher from '../ui/ColorThemeSwitcher';

const Navbar = ({ navigate, toggleSidebar, cartItemCount }) => {
    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-40 shadow-sm border-b border-gray-200 rounded- dark:border-gray-700">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center py-4 gap-4">
                    {/* Left side: Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleSidebar} className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Open menu">
                            <MenuIcon className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Right side: Actions - pushed to the right */}
                    <div className="flex items-center gap-4 ml-auto">
                        <ColorThemeSwitcher />
                        <button 
                            onClick={() => navigate('cart')}
                            className="relative p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                            aria-label="View shopping cart"
                        >
                            <ShoppingCartIcon className="w-6 h-6" />
                            {cartItemCount > 0 && (
                                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-primary-600 text-white text-xs items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;