import React from 'react';
import { LayoutDashboardIcon, BookOpenIcon, HelpCircleIcon, UserCircleIcon, LogOutIcon, ChevronsLeftIcon, XIcon, EducationLogoIcon } from '../icons/IconLibrary';

const LmsSidebar = ({ 
    navigate, 
    handleSignOut, 
    isCollapsed, 
    toggleCollapse, 
    currentView,
    isMobileOpen,
    toggleMobileSidebar
}) => {
    
    const navItems = [
        { view: 'dashboard', label: 'Dashboard', icon: LayoutDashboardIcon },
        { view: 'my-courses', label: 'My Courses', icon: BookOpenIcon },
        { view: 'support', label: 'Support', icon: HelpCircleIcon },
        { view: 'profile', label: 'Profile', icon: UserCircleIcon },
    ];

    const handleNavigation = (view) => {
        navigate(view);
        if (isMobileOpen) {
            toggleMobileSidebar();
        }
    };

    const sidebarContent = (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col h-full border-r border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className={`flex items-center h-16 border-b border-gray-200 dark:border-gray-700 px-4 ${isCollapsed ? 'lg:justify-center' : 'lg:justify-start'} justify-start`}>
                <button onClick={() => handleNavigation('dashboard')} className={`flex items-center ${isCollapsed ? 'lg:w-full lg:justify-center' : ''}`}>
                    <EducationLogoIcon className="h-8 w-8 text-primary-600 dark:text-primary-400 shrink-0" />
                    <span className={`text-xl font-bold whitespace-nowrap ml-2 ${isCollapsed ? 'lg:hidden' : 'lg:block'}`}>Growth Academy</span>
                </button>
                <button onClick={toggleMobileSidebar} className="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white ml-auto">
                    <XIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Navigation */}
            <nav className="grow p-4 space-y-2">
                {navItems.map(item => (
                    <button 
                        key={item.view}
                        onClick={() => handleNavigation(item.view)}
                        title={isCollapsed ? item.label : undefined}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${isCollapsed ? 'lg:justify-center' : ''} 
                        ${currentView === item.view 
                            ? 'bg-primary-600 text-white' 
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}`}
                    >
                        <item.icon className="h-6 w-6 shrink-0" />
                        <span className={`ml-4 font-medium whitespace-nowrap ${isCollapsed ? 'lg:hidden' : 'lg:block'}`}>{item.label}</span>
                    </button>
                ))}
            </nav>

            {/* Footer / User Actions */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <button
                    onClick={handleSignOut}
                    title={isCollapsed ? "Sign Out" : undefined}
                    className={`w-full flex items-center p-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 ${isCollapsed ? 'lg:justify-center' : ''}`}
                >
                    <LogOutIcon className="h-6 w-6 shrink-0" />
                    <span className={`ml-4 font-medium whitespace-nowrap ${isCollapsed ? 'lg:hidden' : 'lg:block'}`}>Sign Out</span>
                </button>
                <button 
                    onClick={toggleCollapse} 
                    className="w-full hidden lg:flex items-center justify-center mt-2 p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
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
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMobileSidebar}
                aria-hidden="true"
            ></div>

            {/* Sidebar container */}
            <aside className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ease-in-out 
                lg:translate-x-0 
                ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}
                w-72 
                ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {sidebarContent}
            </aside>
        </>
    );
};

export default LmsSidebar;