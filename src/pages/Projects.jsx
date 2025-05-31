import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import construct5 from "../assets/construct5.jpg";
import building from "../assets/building.jpg";
import construct3 from "../assets/construct3.jpg";
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const fetchProjects = async () =>{
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  })
  return (
   <div>
      {/* Hero Section */}
      <div
        className='w-full bg-cover bg-center bg-no-repeat relative'
        style={{ backgroundImage: `url(${construct5})` }}>
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-10'>
          <h1 className='text-3xl md:text-6xl font-bold text-center text-white py-16 md:p-[3em]'>Projects</h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 px-4">
        {projects.map((project) => (
          <div className="cards3 bg-white rounded shadow flex flex-col" key={project._id}>
            <div className="card3-image">
              <img src={`http://localhost:5000${project.image}`} alt={project.title} className="w-full h-56 object-cover rounded-t" />
            </div>
            <div className="category font-semibold text-lg mt-2">{project.title}</div>
            <div className="heading text-gray-500">{project.category}</div>
            <p className='text-black text-center'>{project.description}</p>
            <p className='text-black text-center capitalize'>{project.status}</p>
          </div>
        ))}
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