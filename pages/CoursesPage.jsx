import React, { useState, useMemo } from 'react';
import { COURSES } from '../constants';
import { ArrowLeftIcon, MenuIcon, XIcon } from '../components/icons/IconLibrary';
import CourseCard from '../components/ui/CourseCard';

// Inlined PageHeader component to resolve module import error
const PageHeader = ({ title, subtitle, handleBack, showBackButton }) => {
    return (
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-12">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                {showBackButton && (
                    <button 
                        onClick={handleBack}
                        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Go back"
                    >
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>
                )}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">{title}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
            </div>
        </div>
    );
};

const CoursesPage = ({ navigate, authStatus, handleBack, history, addToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [sortOrder, setSortOrder] = useState('popularity');
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

    const categories = ['All', 'Development', 'Design', 'Growth'];
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

    const handleAddToCart = (course) => {
        if (!authStatus) {
            alert("Please sign in to add items to your cart.");
            navigate('sign-in');
        } else {
            addToCart(course);
            alert(`'${course.title}' has been added to your cart.`);
        }
    };
    
    const handleBuyNow = (course) => {
        if (!authStatus) {
            alert("Please sign in to purchase a course.");
            navigate('sign-in');
        } else {
            addToCart(course);
            navigate('cart');
        }
    };

    const filteredAndSortedCourses = useMemo(() => {
        let filtered = COURSES.filter(course => {
            const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
            const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
            const searchMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
            return categoryMatch && levelMatch && searchMatch;
        });

        switch (sortOrder) {
            case 'price-asc':
                return filtered.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return filtered.sort((a, b) => b.price - a.price);
            case 'popularity':
            default:
                return filtered.sort((a, b) => b.enrollmentCount - a.enrollmentCount);
        }
    }, [selectedCategory, selectedLevel, searchTerm, sortOrder]);


    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <PageHeader
                title="Our Courses"
                subtitle="Explore our catalog of expert-led courses."
                handleBack={handleBack}
                showBackButton={history && history.length > 0}
            />

            <div className="p-8 md:p-12">
                <button 
                    className="lg:hidden flex items-center mb-4 p-2 bg-primary-600 text-white rounded-lg shadow-md hover:bg-primary-700 transition"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
                    <span className="ml-2">{isSidebarOpen ? 'Close Filters' : 'Open Filters'}</span>
                </button>

                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className={`transition-all duration-300 ease-in-out 
                        ${isSidebarOpen ? 'w-full translate-x-0 max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                        ${isSidebarOpen ? 'p-6' : 'p-0'}
                        lg:w-1/4 lg:p-6 lg:block lg:max-h-none lg:opacity-100 lg:translate-x-0
                        bg-white dark:bg-gray-800 rounded-2xl shadow-lg h-fit lg:sticky lg:top-24 overflow-hidden border border-gray-100 dark:border-gray-700`}>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
                        <div className="space-y-2 mb-6">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`w-full text-left py-2 px-3 rounded-lg transition duration-150 
                                        ${selectedCategory === cat 
                                            ? 'bg-primary-600 text-white font-semibold shadow-md' 
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">Level</h3>
                        <div className="space-y-2 mb-6">
                           {levels.map(level => (
                                <button
                                    key={level}
                                    onClick={() => setSelectedLevel(level)}
                                    className={`w-full text-left py-2 px-3 rounded-lg transition duration-150 
                                        ${selectedLevel === level 
                                            ? 'bg-primary-600 text-white font-semibold shadow-md' 
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">Search</h3>
                        <input 
                            type="text"
                            placeholder="Search course titles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150" 
                        />
                    </aside>

                    <main className="flex-grow lg:w-3/4 w-full">
                         <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-600 dark:text-gray-400 font-medium">{filteredAndSortedCourses.length} results</span>
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150"
                            >
                                <option value="popularity">Sort by Popularity</option>
                                <option value="price-asc">Sort by Price: Low to High</option>
                                <option value="price-desc">Sort by Price: High to Low</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredAndSortedCourses.length > 0 ? (
                                filteredAndSortedCourses.map(course => (
                                    <CourseCard 
                                        key={course.id} 
                                        course={course} 
                                        onAddToCart={handleAddToCart}
                                        onBuyNow={handleBuyNow} 
                                    />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-gray-600 dark:text-gray-400">
                                    No courses found matching your criteria.
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;