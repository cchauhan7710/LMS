import React from 'react';
import { BookOpenIcon, UsersIcon, TrendingUpIcon, AwardIcon, ArrowRightIcon, TvIcon, PaletteIcon, BarChartIcon } from '../components/icons/IconLibrary';
import FeatureCard from '../components/ui/FeatureCard';
import ImageSlider from '../components/ui/ImageSlider';
import BrandCarousel from '../components/ui/BrandCarousel';
import TestimonialCard from '../components/ui/TestimonialCard';
import CategoryCard from '../components/ui/CategoryCard';
import InstructorCard from '../components/ui/InstructorCard';


const LandingPage = ({ navigate }) => {
    const slides = [
        { url: 'public/Banners/Banner2.jpg' },
        { url: 'public/Banners/Banner1.jpg' },
    ];

    const testimonials = [
        {
            quote: "This platform transformed my career. The courses are practical, up-to-date, and the instructors are true experts in their fields.",
            name: "Priya Sharma",
            title: "Software Engineer",
            avatar: "https://i.pravatar.cc/150?img=1"
        },
        {
            quote: "I was able to level up my design skills significantly. The community support is fantastic and keeps you motivated.",
            name: "Rajesh Kumar",
            title: "UX/UI Designer",
            avatar: "https://i.pravatar.cc/150?img=2"
        },
        {
            quote: "The growth and finance courses by Sushil Arora are pure gold. The best investment I've made in my personal development.",
            name: "Anjali Mehta",
            title: "Marketing Manager",
            avatar: "https://i.pravatar.cc/150?img=3"
        }
    ];

    return (
        <React.Fragment>
            {/* --- Hero Section --- */}
            <section id="hero" className="w-full  h-[110vh] md:h-[70vh]:60 relative bg-gray-800">
                <ImageSlider slides={slides} />
            </section>
            
            {/* --- Intro Section --- */}
            <section id="intro" className="bg-gray-50 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 bg-linear-to-r from-primary-600 via-primary-400 to-primary-600 text-transparent bg-clip-text animated-gradient-text">
                        Master New Skills, Achieve Your Goals
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
                        Join the Sushil Arora Growth Academy and transform your career with expert-led courses.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button 
                            className="flex items-center justify-center w-full sm:w-auto space-x-2 bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-primary-700 transition duration-300 transform hover:scale-105"
                            onClick={() => navigate('courses')}
                        >
                            <span>Explore Courses</span>
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </button>
                        <button 
                            className="w-full sm:w-auto border-2 border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-300 font-medium py-3 px-8 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/40 transition duration-300 transform hover:scale-105"
                            onClick={() => navigate('sign-up')}
                        >
                            Get Started Free
                        </button>
                    </div>
                </div>
            </section>

             {/* --- Categories Section --- */}
            <section id="categories" className="py-16 md:py-24 bg-white dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                            Explore by <span className="text-primary-600 dark:text-primary-400">Category</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Find the right course for you by browsing our main categories.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CategoryCard navigate={navigate} category="Development" icon={TvIcon} description="Code, build, and deploy modern applications." />
                        <CategoryCard navigate={navigate} category="Design" icon={PaletteIcon} description="Master the art of visual design and user experience." />
                        <CategoryCard navigate={navigate} category="Growth" icon={BarChartIcon} description="Unlock your potential in business and finance." />
                    </div>
                </div>
            </section>
            
            <BrandCarousel />

            {/* --- Testimonials Section --- */}
            <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                            What Our <span className="text-primary-600 dark:text-primary-400">Students Say</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Hear from learners who have transformed their careers with us.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- Instructors Section --- */}
            <section id="instructors" className="py-16 md:py-24 bg-white dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                            Learn from <span className="text-primary-600 dark:text-primary-400">Industry Experts</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                           Our instructors are experienced professionals passionate about teaching.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <InstructorCard 
                            name="Sushil Arora"
                            title="Founder & Head Coach"
                            bio="A renowned growth coach and developer with a passion for teaching and mentorship, helping thousands achieve their goals."
                            avatar="public/ProfileImage/ProfileImage.jpg"
                            navigate={navigate}
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default LandingPage;