import React, { useState, useEffect } from 'react';
import { COURSES } from '../constants';
import { ArrowRightIcon } from '../components/icons/IconLibrary';

const RecentlyViewedCard = ({ course, navigate }) => {
    const handleContinue = () => {
        // Set the active course in localStorage so the 'My Learning' page can pick it up
        localStorage.setItem('sushil-academy-active-course', course.id.toString());
        navigate('my-courses');
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col">
            <div className="w-full h-24 bg-primary-200 dark:bg-primary-800/50 rounded-lg flex items-center justify-center mb-4">
                 <span className={`text-sm font-semibold text-primary-700 dark:text-primary-300`}>{course.category}</span>
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white grow line-clamp-2 mb-2">{course.title}</h4>
            <button 
                onClick={handleContinue}
                className="w-full mt-auto bg-primary-600 text-white font-semibold py-2 rounded-lg hover:bg-primary-700 transition flex items-center justify-center text-sm"
            >
                Continue Learning <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
        </div>
    );
};


const DashboardPage = ({ navigate }) => {
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(() => {
        try {
            const storedValue = localStorage.getItem('sushil-academy-recently-viewed');
            const viewedIds = storedValue ? JSON.parse(storedValue) : [];
            
            if (viewedIds.length > 0) {
                // Map IDs to full course objects, preserving order
                const viewedCourses = viewedIds.map(id => 
                    COURSES.find(course => course.id === id)
                ).filter(Boolean); // Filter out any nulls if a course was removed
                
                setRecentlyViewed(viewedCourses);
            }
        } catch (error) {
            console.error("Failed to load recently viewed courses:", error);
            setRecentlyViewed([]);
        }
    }, []);

    return (
        <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Welcome back, Rahul! Here's a summary of your learning progress.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Courses Enrolled</h3>
                    <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mt-2">4</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Courses Completed</h3>
                    <p className="text-4xl font-bold text-green-500 dark:text-green-400 mt-2">2</p>
                </div>
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Assignments Due</h3>
                    <p className="text-4xl font-bold text-amber-500 dark:text-amber-400 mt-2">3</p>
                </div>
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Certificates Earned</h3>
                    <p className="text-4xl font-bold text-sky-500 dark:text-sky-400 mt-2">1</p>
                </div>
            </div>

            {/* New "Continue Learning" Section */}
            {recentlyViewed.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Continue Learning</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recentlyViewed.map(course => (
                            <RecentlyViewedCard key={course.id} course={course} navigate={navigate} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;