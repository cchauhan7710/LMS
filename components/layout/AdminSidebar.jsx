import React from 'react';
import { LayoutDashboardIcon, BookOpenIcon, UsersIcon, LogOutIcon, EducationLogoIcon, ShieldCheckIcon } from '../icons/IconLibrary';

const AdminSidebar = ({ navigate, handleSignOut, currentView }) => {
    const navItems = [
        { view: 'admin-dashboard', label: 'Dashboard', icon: LayoutDashboardIcon },
        { view: 'admin-courses', label: 'Manage Courses', icon: BookOpenIcon },
        { view: 'admin-users', label: 'Manage Users', icon: UsersIcon },
    ];

    const handleNavigation = (view) => {
        navigate(view);
    };

    return (
        <aside className="w-64 h-screen bg-gray-900 text-gray-200 flex flex-col shrink-0">
            {/* Header */}
            <div className="flex items-center h-16 border-b border-gray-700 px-4">
                <button onClick={() => handleNavigation('home')} className="flex items-center">
                    <EducationLogoIcon className="h-8 w-8 text-primary-400" />
                    <span className="text-xl font-bold whitespace-nowrap ml-2">Admin Panel</span>
                </button>
            </div>

            {/* Navigation */}
            <nav className="grow p-4 space-y-2">
                <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Management</p>
                {navItems.map(item => (
                    <button 
                        key={item.view}
                        onClick={() => handleNavigation(item.view)}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${currentView === item.view ? 'bg-primary-600/30 text-primary-300 font-semibold' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                    >
                        <item.icon className="h-6 w-6" />
                        <span className="ml-4 font-medium">{item.label}</span>
                    </button>
                ))}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700">
                <button 
                    onClick={() => navigate('home')}
                    className="w-full flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                >
                    <ShieldCheckIcon className="h-6 w-6" />
                    <span className="ml-4 font-medium">View Main Site</span>
                </button>
                <button
                    onClick={handleSignOut}
                    className="w-full flex items-center p-3 mt-2 rounded-lg text-gray-300 hover:bg-red-900/40 hover:text-red-400 transition-colors"
                >
                    <LogOutIcon className="h-6 w-6" />
                    <span className="ml-4 font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
