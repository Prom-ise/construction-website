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
      <div className="projects-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 px-4">
        {loading ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16">
            <svg className="animate-spin h-8 w-8 text-blue-600 mb-2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            <span className="text-blue-600 font-semibold text-lg">Projects loading...</span>
          </div>
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
        project.status.toLowerCase() === 'completed'
          ? 'text-green-600'
          : project.status.toLowerCase() === 'in progress'
          ? 'text-yellow-600'
          : 'text-red-600'
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