import React from 'react';
import { MenuIcon } from '../icons/IconLibrary';

const LmsHeader = ({ toggleSidebar, currentView }) => {
    const getTitle = (view) => {
        switch(view) {
            case 'dashboard': return 'Dashboard';
            case 'my-courses': return 'My Courses';
            case 'support': return 'Support';
            case 'profile': return 'Profile';
            default: return 'Growth Academy';
        }
    };
    
    return (
        <header className="bg-white dark:bg-gray-900 sticky top-0 z-30 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <button onClick={toggleSidebar} className="lg:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Open menu">
                        <MenuIcon className="w-6 h-6" />
                    </button>
                    <span className="text-xl font-bold text-gray-800 dark:text-white lg:ml-0 ml-2">{getTitle(currentView)}</span>
                </div>
            </div>
        </header>
    );
};

export default LmsHeader;
