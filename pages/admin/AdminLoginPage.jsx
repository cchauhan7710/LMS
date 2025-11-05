import React from 'react';
import { ShieldCheckIcon } from '../../components/icons/IconLibrary';

const AdminLoginPage = ({ onAuthSuccess, navigate }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Mock authentication
        if (email === 'admin@example.com' && password === 'admin') {
            const mockAdminToken = `mock-admin-token-${Date.now()}`;
            onAuthSuccess(mockAdminToken);
        } else {
            alert('Invalid admin credentials.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
            <div className="w-full max-w-sm mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col items-center mb-6">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-full mb-3">
                        <ShieldCheckIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center">Admin Panel Login</h2>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150" 
                            placeholder="admin@example.com"
                            defaultValue="admin@example.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150" 
                            placeholder="••••••••"
                            defaultValue="admin"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-primary-700 transition duration-150 transform hover:scale-[1.01]"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                    <button 
                        onClick={() => navigate('home')}
                        className="hover:underline"
                    >
                        &larr; Back to main site
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AdminLoginPage;
