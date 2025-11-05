import React from "react";
import {
  ArrowLeftIcon,
  BookOpenIcon,
  UsersIcon,
  TrendingUpIcon,
} from "../components/icons/IconLibrary";

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
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          {title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
    <Icon className="w-10 h-10 text-primary-500 dark:text-primary-400 mb-4" />
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const AboutPage = ({ handleBack, history }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    e.currentTarget.reset();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <PageHeader
        title="About Our Academy"
        subtitle="Learn about our mission, our values, and the team behind our success."
        handleBack={handleBack}
        showBackButton={history && history.length > 0}
      />
      <div className="p-8 md:p-12">
        {/* --- Mission Section --- */}
        <section className="mb-16 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-primary-700 dark:text-primary-400 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            To empower individuals and organizations to achieve their full
            potential through accessible, high-quality education and mentorship.
            We believe in fostering a community of lifelong learners who are
            equipped to navigate the challenges of a rapidly changing world. Our
            courses are designed not just to teach skills, but to inspire
            growth, innovation, and leadership.
          </p>
        </section>

        {/* --- Founder Section --- */}
        <section className="mb-16 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 text-center">
            <div className="w-48 h-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <img
                src="public/ProfileImage/ProfileImage.jpg" // 1. **REPLACE THIS PATH** with your actual image URL
                alt="Sushil Arora Profile" // 2. Add descriptive alt text for accessibility
                className="w-full h-full object-cover rounded-full " // 3. Styling to fill the circle and maintain aspect ratio
              />
              {/* <span className="text-gray-500 dark:text-gray-400">Photo</span> */}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sushil Arora
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-semibold">
              Founder & Head Coach
            </p>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Meet the Founder
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-loose">
              Sushil Arora is a renowned growth coach, developer, and educator
              with over two decades of experience in the tech industry. His
              passion for teaching and mentorship led him to establish the
              Growth Academy, with the goal of making expert knowledge
              accessible to everyone, from beginners to seasoned professionals.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-loose">
              He has a proven track record of helping thousands of students and
              professionals level up their skills, transform their careers, and
              achieve financial freedom. His teaching philosophy is centered
              around practical application, real-world examples, and continuous
              support.
            </p>
          </div>
        </section>

        {/* --- Our Values Section --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-10">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={BookOpenIcon}
              title="Excellence in Content"
              description="We are committed to providing the most accurate, up-to-date, and practical course material."
            />
            <ValueCard
              icon={UsersIcon}
              title="Community-Focused"
              description="We believe learning is a collaborative process and foster a supportive, inclusive community."
            />
            <ValueCard
              icon={TrendingUpIcon}
              title="Commitment to Growth"
              description="Our goal is the continuous personal and professional growth of every single student."
            />
          </div>
        </section>

        {/* --- Contact Form Section --- */}
        <section>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-2">
              Get in Touch
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              Have a question or want to work with us? Drop us a message.
            </p>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-primary-700 transition duration-150 transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
