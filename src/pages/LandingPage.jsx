import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Building, Star, BlocksIcon, StarHalf, PersonStanding } from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <motion.div 
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                className="sm:text-center lg:text-left"
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Find the perfect</span>
                  <span className="block text-indigo-600">freelance match</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Connect with top talent and opportunities. Whether you're a freelancer or recruiter, we've got you covered.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/signup?role=freelancer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Join as Freelancer
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/signup?role=recruiter" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Join as Recruiter
                    </Link>
                  </div>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">For Freelancers</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Find great projects, showcase your portfolio, and connect with top clients.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Building className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">For Recruiters</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Post jobs, find talented freelancers, and manage projects efficiently.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Star className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Quality First</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  AI-powered matching ensures the perfect fit for every project.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <BlocksIcon className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure Profiles</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                Secure and transparent blockchain integration for trusted collaborations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Dashboard Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-10 bg-white"
      >
      <div className="mt-10 mx-auto max-w-2xl flex item-center justify-center">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-0 md:gap-y-0">
          
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <PersonStanding className="h-6 w-6" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Personal Dashboard</p>
            <p className="mt-2 ml-16 text-base text-gray-500">
              Access your dashboard 
            </p>
            <Link to="/login">
              <button className="mt-4 ml-0 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Go to Personal Dashboard
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      </motion.section>
    </div>
  );
}

export default LandingPage;
