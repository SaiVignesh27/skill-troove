import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Star, Clock, Bell, BarChart as ChartBar, TrendingUp, Calendar, CheckCircle } from 'lucide-react';

function FreelancerDashboard() {
  const activeProjects = [
    { 
      id: 1, 
      title: "E-commerce Website Development", 
      client: "TechCorp", 
      dueDate: "2024-03-25", 
      status: "In Progress",
      progress: 58,
      budget: "₹6,900"
    },
    { 
      id: 2, 
      title: "Mobile App UI Design", 
      client: "StartupX", 
      dueDate: "2024-04-01", 
      status: "Review",
      progress: 22,
      budget: "₹8,400"
    }
  ];

  const recommendedJobs = [
    { 
      id: 1, 
      title: "Senior React Developer", 
      company: "InnovateHub", 
      salary: "₹5000-7000/hr", 
      match: "95%",
      skills: ["React", "TypeScript", "Node.js"],
      postedDate: "2 days ago"
    },
    { 
      id: 2, 
      title: "Frontend Specialist", 
      company: "DigitalCraft", 
      salary: "₹2500-6000/hr", 
      match: "88%",
      skills: ["Vue.js", "CSS", "UI/UX"],
      postedDate: "1 day ago"
    }
  ];

  const upcomingDeadlines = [
    { id: 1, task: "Client Meeting - Project Review", date: "Today, 3:00 PM" },
    { id: 2, task: "Submit Design Mockups", date: "Tomorrow, 12:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sai Vignesh! 👋</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your projects today.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-lg shadow-sm text-white"
          >
            <div className="flex items-center">
              <Briefcase className="h-12 w-12 opacity-80" />
              <div className="ml-4">
                <p className="text-sm font-medium text-indigo-100">Active Projects</p>
                <p className="text-3xl font-bold">3</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 rounded-lg shadow-sm text-white"
          >
            <div className="flex items-center">
              <Star className="h-12 w-12 opacity-80" />
              <div className="ml-4">
                <p className="text-sm font-medium text-yellow-50">Rating</p>
                <p className="text-3xl font-bold">4.9</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg shadow-sm text-white"
          >
            <div className="flex items-center">
              <Clock className="h-12 w-12 opacity-80" />
              <div className="ml-4">
                <p className="text-sm font-medium text-green-50">Hours this month</p>
                <p className="text-3xl font-bold">58</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg shadow-sm text-white"
          >
            <div className="flex items-center">
              <TrendingUp className="h-12 w-12 opacity-80" />
              <div className="ml-4">
                <p className="text-sm font-medium text-purple-50">Earnings</p>
                <p className="text-3xl font-bold">₹57,430</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Active Projects */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-lg shadow-sm"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900">Active Projects</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
              </div>
              <div className="space-y-6">
                {activeProjects.map(project => (
                  <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.01 }}
                    className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        <p className="text-sm text-gray-500">Client: {project.client}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === 'In Progress' 
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="text-gray-900 font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div className="text-gray-500">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          Due: {project.dueDate}
                        </div>
                        <div className="font-medium text-gray-900">{project.budget}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming Deadlines</h2>
              <div className="space-y-4">
                {upcomingDeadlines.map(deadline => (
                  <motion.div
                    key={deadline.id}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-start space-x-3 p-3 border border-gray-100 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{deadline.task}</p>
                      <p className="text-xs text-gray-500">{deadline.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recommended Jobs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Recommended Jobs</h2>
              <div className="space-y-4">
                {recommendedJobs.map(job => (
                  <motion.div
                    key={job.id}
                    whileHover={{ scale: 1.01 }}
                    className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900">{job.title}</h3>
                        <p className="text-sm text-gray-500">{job.company}</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        {job.match} Match
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {job.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{job.postedDate}</span>
                      <span className="font-medium text-gray-900">{job.salary}</span>
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

export default FreelancerDashboard;