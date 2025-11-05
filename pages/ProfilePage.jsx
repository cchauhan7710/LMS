import React from 'react';

const ProfilePage = ({ navigate }) => {
    return (
        <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Profile</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">View and edit your personal information.</p>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-center">User profile form will be displayed here.</p>
            </div>
        </div>
    );
};

export default ProfilePage;