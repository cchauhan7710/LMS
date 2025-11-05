import React from 'react';
import { ArrowLeftIcon, AwardIcon, BookOpenIcon, UsersIcon, TrendingUpIcon } from '../components/icons/IconLibrary';

// Inlined PageHeader for consistency with other pages
const PageHeader = ({ title, subtitle, handleBack, showBackButton }) => (
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

// Feature component for this page
const FeatureDetail = ({ icon: Icon, title, children, iconBgColor }) => (
    <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className={`flex-shrink-0 p-4 rounded-2xl ${iconBgColor}`}>
            <Icon className="w-8 h-8 text-white" />
        </div>
        <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3 leading-relaxed">
                {children}
            </div>
        </div>
    </div>
);


const WhyChooseUsPage = ({ navigate, handleBack, history }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <PageHeader
                title="Why Choose Us?"
                subtitle="Discover the unique advantages that make our academy the best choice for your growth."
                handleBack={handleBack}
                showBackButton={history && history.length > 0}
            />
            <div className="p-8 md:p-12">
                <div className="max-w-4xl mx-auto space-y-16">
                    <FeatureDetail icon={AwardIcon} title="Expert-Led Instruction" iconBgColor="bg-red-500">
                        <p>
                            Our courses are crafted and taught by industry veterans and renowned experts like Sushil Arora. You're not just learning theory; you're gaining practical, real-world insights from professionals who have built successful careers and businesses.
                        </p>
                        <p>
                            This direct access to expertise ensures our curriculum is always relevant, up-to-date, and focused on the skills that truly matter in today's market.
                        </p>
                    </FeatureDetail>

                    <FeatureDetail icon={BookOpenIcon} title="Practical, Hands-On Curriculum" iconBgColor="bg-blue-500">
                        <p>
                            We believe the best way to learn is by doing. That's why our courses are packed with hands-on projects, real-world case studies, and practical exercises. 
                        </p>
                        <p>
                            You'll build a portfolio of work that showcases your abilities to potential employers and gain the confidence to apply your new skills immediately in a professional setting.
                        </p>
                    </FeatureDetail>
                    
                    <FeatureDetail icon={UsersIcon} title="Supportive Learning Community" iconBgColor="bg-green-500">
                        <p>
                            When you enroll in our academy, you join a vibrant community of motivated learners, alumni, and instructors. 
                        </p>
                        <p>
                            Collaborate on projects, ask questions in our dedicated forums, and network with peers who share your passion for growth. This supportive environment is invaluable for staying motivated and overcoming challenges.
                        </p>
                    </FeatureDetail>

                    <FeatureDetail icon={TrendingUpIcon} title="Focus on Career Growth" iconBgColor="bg-purple-500">
                        <p>
                            Our ultimate goal is your success. We go beyond just teaching skills by providing career-focused resources, including resume workshops, interview preparation, and networking opportunities. 
                        </p>
                        <p>
                            We are committed to helping you not only learn a new skill but also successfully transition into a new role or advance in your current career path.
                        </p>
                    </FeatureDetail>
                </div>

                 {/* CTA Section */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                        Explore our course catalog and find the perfect program to help you achieve your goals.
                    </p>
                    <button
                        onClick={() => navigate('courses')}
                        className="bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-primary-700 transition duration-300 transform hover:scale-105"
                    >
                        Browse All Courses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsPage;
