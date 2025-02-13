import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg"
    >
      <div className="fixed top-1 w-full bg-white/30 backdrop-blur-md shadow-md z-50 rounded-[50px] mx--2">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <Briefcase className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">
            Unified Freelance MarketPlace
          </span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/jobs" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
          Find Jobs
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
          Login
        </Link>
        <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Sign Up
        </Link>
      </div>
    </div>
  </div>
</div>

<div className="pt-16">
</div>

    </motion.nav>
  );
}

export default Navbar;