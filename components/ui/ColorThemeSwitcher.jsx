import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '../icons/IconLibrary';

const THEME_COLORS = [
    { name: 'orange', color: 'bg-[#FF8C42]' },
    { name: 'red', color: 'bg-red-500' },
    { name: 'green', color: 'bg-green-500' },
    { name: 'blue', color: 'bg-indigo-500' },
    { name: 'purple', color: 'bg-purple-500' },
];

const ColorThemeSwitcher = () => {
    const { theme, toggleTheme, colorTheme, setColorTheme } = useTheme();

    return (
        <div className="p-1 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-1.5">
                {THEME_COLORS.map((c) => (
                    <button
                        key={c.name}
                        aria-label={`Switch to ${c.name} theme`}
                        className={`w-5 h-5 rounded-full transform focus:outline-none theme-button-transition ${c.color}
                        ${colorTheme === c.name 
                            ? 'ring-2 ring-offset-1 ring-gray-900 dark:ring-gray-300 ring-offset-gray-100 dark:ring-offset-gray-800 scale-125 shadow-sm' 
                            : 'opacity-75 hover:scale-110 hover:opacity-100'}`}
                        onClick={() => setColorTheme(c.name)}
                    />
                ))}
                <div className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"></div>
                <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-5 h-5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                >
                    {theme === 'light' ? (
                        <MoonIcon className="w-4 h-4" />
                    ) : (
                        <SunIcon className="w-4 h-4" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default ColorThemeSwitcher;