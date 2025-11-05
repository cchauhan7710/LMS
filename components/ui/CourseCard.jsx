import React from 'react';
import { UsersIcon } from '../icons/IconLibrary';

const CourseCard = ({ course, onAddToCart, onBuyNow }) => {
    const { title, description, price, category, level, enrollmentCount, isBestseller, isNew } = course;

    const getPlaceholderStyle = () => {
        return {
            bgColor: 'bg-primary-200 dark:bg-primary-800/50',
            textColor: 'text-primary-700 dark:text-primary-300',
        };
    };

    const { bgColor, textColor } = getPlaceholderStyle();

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col hover:shadow-xl transition duration-300 overflow-hidden group">
            {/* Image placeholder */}
            <div className="w-full h-40 relative overflow-hidden">
                <div className={`absolute inset-0 ${bgColor} transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90`}></div>
                <div className="relative h-full flex items-center justify-center">
                    <span className={`text-lg font-semibold ${textColor}`}>Image for {category}</span>
                </div>
                {(isBestseller || isNew) && (
                    <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                         {isBestseller && (
                            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">Bestseller</span>
                        )}
                        {isNew && (
                            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">New!</span>
                        )}
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col grow">
                {/* Top part: Category, Title, Description */}
                <div className="grow">
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                        {category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
                </div>

                {/* Middle part: Enrollment Count */}
                 <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <UsersIcon className="w-4 h-4 mr-2" />
                    <span>{enrollmentCount.toLocaleString()} students</span>
                </div>

                {/* Bottom part: Price, Level, Buttons */}
                <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-2xl font-extrabold text-primary-600 dark:text-primary-400">₹{price.toFixed(2)}</span>
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">{level}</span>
                    </div>
                    <div className="flex space-x-3">
                        <button 
                            className="flex-1 bg-primary-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-primary-700 transition"
                            onClick={() => onBuyNow(course)}
                        >
                            Buy Now
                        </button>
                        <button 
                            className="flex-1 border-2 border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-300 font-medium py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/50 transition"
                            onClick={() => onAddToCart(course)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;