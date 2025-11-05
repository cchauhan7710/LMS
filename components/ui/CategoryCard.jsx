import React from 'react';
import { ArrowRightIcon } from '../icons/IconLibrary';

const CategoryCard = ({ navigate, category, icon: Icon, description }) => {
    return (
        <button 
            onClick={() => navigate('courses')}
            className="group text-left bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-2 transition-all duration-300"
        >
            <Icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{category}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
            <span className="font-semibold text-primary-600 dark:text-primary-400 flex items-center">
                Explore
                <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </span>
        </button>
    );
};

export default CategoryCard;