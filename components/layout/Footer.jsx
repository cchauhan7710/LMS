import React from 'react';

const Footer = ({ userId, navigate, authStatus, handleSignOut }) => {
    return (
        <footer className="bg-gray-900 text-white pt-16">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Left: Brand Description */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">Sushil Arora Growth Academy</h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Empowering learners worldwide with high-quality courses and expert instruction.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <button onClick={() => navigate('courses')} className="text-gray-400 hover:text-primary-400 transition">Browse Courses</button>
                            </li>
                             <li>
                                <button onClick={() => navigate('why-choose-us')} className="text-gray-400 hover:text-primary-400 transition">Why Choose Us</button>
                            </li>
                             <li>
                                <button onClick={() => navigate('about')} className="text-gray-400 hover:text-primary-400 transition">About Us</button>
                            </li>
                            <li>
                                {authStatus ? (
                                    <button onClick={handleSignOut} className="text-gray-400 hover:text-primary-400 transition">Sign Out</button>
                                ) : (
                                    <button onClick={() => navigate('sign-in')} className="text-gray-400 hover:text-primary-400 transition">Sign In</button>
                                )}
                            </li>
                        </ul>
                    </div>
                    
                    {/* For Business/Instructors */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Partners</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <button onClick={() => alert('Feature coming soon!')} className="text-gray-400 hover:text-primary-400 transition">Become an Instructor</button>
                            </li>
                             <li>
                                <button onClick={() => alert('Feature coming soon!')} className="text-gray-400 hover:text-primary-400 transition">For Business</button>
                            </li>
                             <li>
                                <button onClick={() => navigate('admin-login')} className="text-gray-400 hover:text-primary-400 transition">Admin Panel</button>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                        <p className="text-gray-400 text-sm">
                            Have questions? Reach out to us and we’ll get back to you shortly.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Bottom Line */}
            <div className="border-t border-gray-800 py-4">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
                    <p>© 2025 Sushil Arora Growth Academy. All rights reserved.</p>
                    {userId && <p className="text-xs mt-1">User ID: {userId}</p>}
                </div>
            </div>
        </footer>
    );
};

export default Footer;