import React from 'react';
import { ArrowLeftIcon } from '../components/icons/IconLibrary';

const AuthPage = ({ title, navigate, onAuthSuccess, handleBack, history }) => {
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        
        // In a real app, you would get a token from your auth API
        const mockToken = `mock-token-${Date.now()}`;
        onAuthSuccess(mockToken);
    };

    return (
        <div className="min-h-full flex items-center justify-center p-8 md:p-12 hero-bg">
            <div className="w-full max-w-md mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 relative">
                {history.length > 0 && (
                    <button 
                        onClick={handleBack}
                        className="absolute top-5 left-5 flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Go back"
                    >
                        <ArrowLeftIcon className="w-5 h-5" />
                    </button>
                )}

                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-6">{title}</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150" 
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150" 
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-primary-700 transition duration-150 transform hover:scale-[1.01]"
                    >
                        {title}
                    </button>

                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                        {title === 'Login' ? "Don't have an account?" : "Already have an account?"}
                        <button 
                            type="button"
                            onClick={() => navigate(title === 'Login' ? 'sign-up' : 'sign-in')}
                            className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 ml-1"
                        >
                            {title === 'Login' ? 'Sign Up' : 'Sign In'}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;