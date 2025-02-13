import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, DollarSign, Clock, MapPin } from 'lucide-react';

function JobMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$50-70/hr",
      type: "Full-time",
      category: "development",
      posted: "2 days ago",
      description: "Looking for an experienced React developer to join our team..."
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "New York, USA",
      salary: "$45-60/hr",
      type: "Contract",
      category: "design",
      posted: "1 day ago",
      description: "Seeking a creative UI/UX designer for our upcoming projects..."
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Remote",
      salary: "$60-80/hr",
      type: "Full-time",
      category: "devops",
      posted: "3 days ago",
      description: "Experienced DevOps engineer needed for cloud infrastructure management..."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Jobs' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'devops', name: 'DevOps' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mt-4 md:mt-0">
              <button className="w-full md:w-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800">
                    {job.type}
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-5 w-5 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-500">
                  <DollarSign className="h-5 w-5 mr-2" />
                  {job.salary}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-5 w-5 mr-2" />
                  {job.posted}
                </div>
              </div>

              <p className="mt-4 text-gray-600">{job.description}</p>

              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobMarketplace;