import React, { createContext, useState, useEffect, useContext } from 'react';

interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    colorTheme: string;
    setColorTheme: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [colorTheme, setColorThemeState] = useState('orange');

    // Effect for light/dark mode
    useEffect(() => {
        const storedTheme = localStorage.getItem('sushil-academy-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (storedTheme) {
            setTheme(storedTheme as 'light' | 'dark');
        } else if (prefersDark) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('sushil-academy-theme', theme);
    }, [theme]);

    // Effect for color theme
     useEffect(() => {
        const storedColorTheme = localStorage.getItem('sushil-academy-color-theme') || 'orange';
        setColorThemeState(storedColorTheme);
        
        const root = window.document.documentElement;
        // Clean up other themes before adding the new one
        ['orange', 'red', 'green', 'blue', 'purple'].forEach(color => {
            root.classList.remove(`theme-${color}`);
        });
        root.classList.add(`theme-${storedColorTheme}`);
    }, []);

    const setColorTheme = (color: string) => {
        const root = window.document.documentElement;
        root.classList.remove(`theme-${colorTheme}`); // remove old
        root.classList.add(`theme-${color}`); // add new
        localStorage.setItem('sushil-academy-color-theme', color);
        setColorThemeState(color);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, colorTheme, setColorTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};