import React from 'react';
import { XIcon, HomeIcon, BookOpenIcon, ChevronsLeftIcon, LogOutIcon, InfoIcon, EducationLogoIcon, ShoppingCartIcon, LayoutDashboardIcon, HelpCircleIcon, UserCircleIcon, AwardIcon } from '../icons/IconLibrary';

const Sidebar = ({ 
    isOpen, 
    toggleSidebar, 
    isCollapsed,
    toggleCollapse,
    navigate, 
    authStatus, 
    handleSignOut,
    currentView,
    cartItemCount
}) => {
    
    const handleNavigation = (view) => {
        navigate(view);
        if (isOpen) {
            toggleSidebar(); // Close mobile sidebar on navigation
        }
    };

    const getNavItems = () => {
        const cartItem = { 
            view: 'cart', 
            label: 'My Cart', 
            icon: ShoppingCartIcon, 
            count: cartItemCount 
        };

        if (authStatus) {
            return [
                { view: 'home', label: 'Home', icon: HomeIcon },
                { view: 'dashboard', label: 'Dashboard', icon: LayoutDashboardIcon },
                { view: 'my-courses', label: 'My Learning', icon: BookOpenIcon },
                { view: 'courses', label: 'Courses', icon: BookOpenIcon },
                cartItem,
                { view: 'support', label: 'Support', icon: HelpCircleIcon },
                { view: 'profile', label: 'Profile', icon: UserCircleIcon },
            ];
        }
        
        return [
            { view: 'home', label: 'Home', icon: HomeIcon },
            { view: 'courses', label: 'Courses', icon: BookOpenIcon },
            { view: 'why-choose-us', label: 'Why Choose Us', icon: AwardIcon },
            { view: 'about', label: 'About Us', icon: InfoIcon },
            cartItem,
        ];
    };

    const navItems = getNavItems();

    const sidebarContent = (
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex flex-col h-full border-r border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className={`flex items-center h-16 border-b border-gray-200 dark:border-gray-700 px-4 ${isCollapsed ? 'md:justify-center' : 'md:justify-start'} justify-start`}>
                <button onClick={() => handleNavigation('home')} className={`flex items-center ${isCollapsed ? 'md:w-full md:justify-center' : ''}`}>
                    <EducationLogoIcon className="h-9 w-7 text-primary-600 dark:text-primary-400 shrink-0" />
                    <span className={`text-xl font-bold whitespace-nowrap ml-2 ${isCollapsed ? 'md:hidden' : 'md:block'}`}>Growth Academy</span>
                </button>
                <button onClick={toggleSidebar} className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white ml-auto">
                    <XIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Navigation */}
            <nav className="grow p-4 space-y-2 overflow-y-auto">
                {navItems.map(item => (
                    <button 
                        key={item.view}
                        onClick={() => handleNavigation(item.view)}
                        title={isCollapsed ? item.label : undefined}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${isCollapsed ? 'md:justify-center' : ''} ${currentView === item.view ? 'bg-primary-50 dark:bg-primary-600/20 text-primary-600 dark:text-primary-300 font-semibold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}`}
                    >
                        <item.icon className="h-6 w-6 shrink-0" />
                        <span className={`ml-4 font-medium whitespace-nowrap ${isCollapsed ? 'md:hidden' : 'md:block'}`}>{item.label}</span>
                        {/* FIX: Added 'count' in item check to act as a type guard, ensuring `item.count` can be safely accessed for the cart item. */}
                        {item.view === 'cart' && 'count' in item && item.count > 0 && (
                            <span className={`ml-auto bg-primary-600 text-white text-xs font-bold px-2 py-0.5 rounded-full ${isCollapsed ? 'md:hidden' : ''}`}>
                                {item.count}
                            </span>
                        )}
                    </button>
                ))}
            </nav>

            {/* Footer / User Actions */}
            <div className={`p-4 border-t border-gray-200 dark:border-gray-700 space-y-3 ${isCollapsed ? 'md:px-2' : ''}`}>
                {authStatus ? (
                     <div className={`flex items-center ${isCollapsed ? 'md:hidden' : 'md:flex'}`}>
                        <UserCircleIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                        <div className="ml-3">
                            <p className="font-semibold text-gray-800 dark:text-white">Rahul Kumar</p>
                            <button 
                                onClick={() => { handleSignOut(); if (isOpen) toggleSidebar(); }} 
                                className="text-sm text-red-500 hover:underline"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={`${isCollapsed ? 'md:hidden' : 'md:block'} space-y-3`}>
                        <button 
                            onClick={() => handleNavigation('sign-in')} 
                            className="w-full border-2 border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-300 font-medium py-2 px-4 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/50 transition"
                        >
                            Sign In
                        </button>
                        <button 
                            onClick={() => handleNavigation('sign-up')} 
                            className="w-full bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-primary-700 transition"
                        >
                            Sign Up
                        </button>
                    </div>
                )}
                 {authStatus && (
                    <button 
                        onClick={() => { handleSignOut(); if (isOpen) toggleSidebar(); }} 
                        title="Sign Out"
                        className={`w-full items-center p-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition ${isCollapsed ? 'md:flex md:justify-center' : 'md:hidden'}`}
                    >
                        <LogOutIcon className="h-6 w-6 shrink-0" />
                    </button>
                 )}

                <button 
                    onClick={toggleCollapse} 
                    className="w-full hidden md:flex items-center justify-center mt-2 p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    <ChevronsLeftIcon className={`h-6 w-6 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : 'rotate-0'}`} />
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Overlay for mobile */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleSidebar}
                aria-hidden="true"
            ></div>

            {/* Sidebar container */}
            <aside className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ease-in-out 
                md:translate-x-0 
                ${isCollapsed ? 'md:w-20' : 'md:w-64'}
                w-72 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {sidebarContent}
            </aside>
        </>
    );
};

export default Sidebar;