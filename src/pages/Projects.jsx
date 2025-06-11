import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import construct5 from "../assets/construct5.jpg";
import building from "../assets/building.jpg";
import construct3 from "../assets/construct3.jpg";
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () =>{
      try {
        const response = await axios.get('https://construct-backend.onrender.com/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  return (
   <div>
      {/* Hero Section */}
      <div
        className='w-full bg-cover bg-center bg-no-repeat relative'
        style={{ backgroundImage: `url(${construct5})` }}>
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-10'>
          <h1 className='text-3xl md:text-6xl pt-[3em] font-bold text-center text-white py-16 md:p-[3em]'>Projects</h1>
        </div>
      </div>

      {/* Projects Grid */}
    <div className="projects-container lg:mx-[3em] xl:mx-[3em] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 my-10 px-2 sm:px-4">
  {loading ? (
    // Show 3 shimmer cards for loading state
    Array.from({ length: 3 }).map((_, idx) => (
      <div
        key={idx}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
      >
        <div className="w-full h-56 overflow-hidden relative">
          <div className="absolute inset-0 bg-gray-300 animate-pulse" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 opacity-60 animate-[shimmer_1.5s_infinite_linear]"
            style={{ backgroundSize: "200% 100%" }}
          />
          <style>
            {`
              @keyframes shimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
              }
            `}
          </style>
        </div>
        <div className="p-5 flex flex-col gap-2 text-center">
          <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-100 rounded w-1/3 mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-100 rounded w-1/4 mx-auto animate-pulse"></div>
        </div>
      </div>
    ))
  ) : projects.length === 0 ? (
    <div className="col-span-full text-center font-bold text-gray-500 text-lg py-10">
      No Projects available at the moment.
    </div>
  ) : (
    projects.map((project) => (
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
        key={project._id}
      >
        <div className="w-full h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col gap-2 text-center">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
          <span className="text-sm text-[#fe5d14] font-medium tracking-wide uppercase">
            {project.category}
          </span>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
          <p
            className={`text-sm font-semibold mt-2 ${
              project.status.toLowerCase() === "completed"
                ? "text-green-600"
                : project.status.toLowerCase() === "in progress"
                ? "text-yellow-600"
                : "text-red-600"
            } capitalize`}
          >
            {project.status}
          </p>
        </div>
      </div>
    ))
  )}
</div>

      {/* Call to Action Section */}
      <div className="relative px-4 md:p-[3em] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${construct3})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 py-10 md:py-0">
          <h1 className="text-center text-2xl md:text-4xl text-[rgb(254,93,20)] font-bold">
            Ready to Discuss your Next Project?
          </h1>
          <div className="flex justify-center my-5">
            <Link to='/contact' className="get-in font-bold">Get in Touch</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects