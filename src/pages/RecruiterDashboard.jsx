import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Search, Briefcase } from 'lucide-react';

function RecruiterDashboard() {
  const activeListings = [
    { id: 1, title: "Senior Frontend Developer", applicants: 12, status: "Active", posted: "2 days ago" },
    { id: 2, title: "UI/UX Designer", applicants: 8, status: "Active", posted: "5 days ago" }
  ];

  const topCandidates = [
    { id: 1, name: "Sarah Johnson", role: "Frontend Developer", match: "95%", status: "Available" },
    { id: 2, name: "Michael Chen", role: "UI Designer", match: "92%", status: "Available" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Stats Cards */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <FileText className="h-12 w-12 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Listings</p>
                <p className="text-2xl font-semibold text-gray-900">8</p>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Users className="h-12 w-12 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Applicants</p>
                <p className="text-2xl font-semibold text-gray-900">156</p>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Search className="h-12 w-12 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Interviews</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Briefcase className="h-12 w-12 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Hired</p>
                <p className="text-2xl font-semibold text-gray-900">24</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Active Listings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">Active Listings</h2>
                <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                  Post New Job
                </button>
              </div>
              <div className="mt-4 space-y-4">
                {activeListings.map(listing => (
                  <motion.div
                    key={listing.id}
                    whileHover={{ scale: 1.01 }}
                    className="p-4 border rounded-lg"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{listing.title}</h3>
                        <p className="text-sm text-gray-500">Posted {listing.posted}</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        {listing.applicants} Applicants
                      </span>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <p className="text-sm text-gray-500">{listing.status}</p>
                      <button className="text-sm text-indigo-600 hover:text-indigo-800">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Top Candidates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Top Candidates</h2>
              <div className="mt-4 space-y-4">
                {topCandidates.map(candidate => (
                  <motion.div
                    key={candidate.id}
                    whileHover={{ scale: 1.01 }}
                    className="p-4 border rounded-lg"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{candidate.name}</h3>
                        <p className="text-sm text-gray-500">{candidate.role}</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800">
                        {candidate.match} Match
                      </span>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-sm text-green-600">{candidate.status}</span>
                      <button className="text-sm text-indigo-600 hover:text-indigo-800">
                        View Profile
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default RecruiterDashboard;