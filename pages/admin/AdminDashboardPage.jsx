import React from 'react';
import { BookOpenIcon, UsersIcon, TrendingUpIcon, BarChartIcon } from '../../components/icons/IconLibrary';

const StatCard = ({ title, value, icon: Icon, colorClass }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex items-center">
        <div className={`p-3 rounded-full mr-4 bg-opacity-20 ${colorClass.replace('text-', 'bg-')}`}>
            <Icon className={`w-7 h-7 ${colorClass}`} />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">{title}</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
    </div>
);


const AdminDashboardPage = ({ navigate }) => {
    return (
        <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Admin Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Courses" value="6" icon={BookOpenIcon} colorClass="text-blue-500" />
                <StatCard title="Total Students" value="43,128" icon={UsersIcon} colorClass="text-green-500" />
                <StatCard title="Monthly Sales" value="₹1,250,000" icon={TrendingUpIcon} colorClass="text-orange-500" />
                <StatCard title="Pending Tickets" value="12" icon={BarChartIcon} colorClass="text-red-500" />
            </div>

            {/* Placeholder for more components like recent activity, charts, etc. */}
            <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
                <p className="text-gray-600 dark:text-gray-400">Activity feed placeholder...</p>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
