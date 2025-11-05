import React from 'react';

const TestimonialCard = ({ quote, name, title, avatar }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative testimonial-card transform hover:-translate-y-2 transition-transform duration-300">
            <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg italic">"{quote}"</p>
                <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full mr-4 object-cover" src={avatar} alt={name} />
                    <div>
                        <p className="font-bold text-gray-900 dark:text-white">{name}</p>
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;