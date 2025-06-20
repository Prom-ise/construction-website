import React from 'react'
import construct4 from "../assets/construct4.jpg"
import construct2 from "../assets/construct2.jpg"
import profile from "../assets/profile.jpg"

const teamMembers = [
  { name: 'John Doe', role: 'Founder' },
  { name: 'Jane Smith', role: 'Project Manager' },
  { name: 'Alice Johnson', role: 'Engineer' },
  { name: 'Michael Brown', role: 'Architect' },
  { name: 'Laura Wilson', role: 'Coordinator' },
  { name: 'James Lee', role: 'Supervisor' },
];

const About = () => {
  return (
    <div>
      <div
        className='w-full bg-cover bg-center bg-no-repeat relative'
        style={{ backgroundImage: `url(${construct4})` }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative z-10'>
          <h1 className='text-4xl md:text-6xl font-bold text-center text-white py-16 md:p-[3em]'>About</h1>
        </div>
      </div>

    <div className="container text-black max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-8 my-16">
  <div className="px-4 sm:px-8 md:px-16 lg:px-24">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-8 pb-4">
      Who Are We?
    </h1>
    <p className="mb-4 text-center text-gray-700 leading-relaxed">
      We are <strong>Bumia Partners Construction</strong>, a young and fast-growing company passionate about bringing your dream home to life. Our team consists of competent, dynamic professionals who are skilled, sincere, and committed to timely delivery using the latest construction innovations.
    </p>
    <p className="text-center text-gray-600 leading-relaxed">
      With a client-first approach and a reputation for excellence, we ensure that every project is handled with precision, care, and integrity. At Bumia Partners, your vision becomes our mission.
    </p>
  </div>
</div>

<div className="container text-black max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-8 my-16">
  <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-8 pb-4'>Our Journey</h1>
  <p className="mb-4 text-center text-gray-700 leading-relaxed">
    <strong>Bumia Partners Construction</strong> was founded in 2015 and has since operated in various parts of Nigeria including Abuja, Lagos, Osogbo, Ibadan, and Ogbomoso. We have successfully handled all kinds of construction projects nationwide, from foundation to completion, and are eager to expand our expertise internationally.
  </p>
  <p className="text-center text-gray-600 leading-relaxed">
    Over the years, we have built a strong reputation for delivering quality projects on time and within budget, earning the trust of our clients across the country.
  </p>
</div>

<div className="container text-black max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-8 my-16">
  <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-8 pb-4'>What We Believe In</h1>
  <p className="mb-4 text-center text-gray-700 leading-relaxed">
    We believe in ourselves, in durability, in being passion-driven, and in making our clients' dreams a reality. We value innovation, positive thinking, and a commitment to excellence in every project we undertake.
  </p>
  <p className="text-center text-gray-600 leading-relaxed">
    Our core values are integrity, transparency, and a relentless pursuit of customer satisfaction. We strive to exceed expectations and set new standards in the construction industry.
  </p>
</div>

<div className="container text-black max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-8 my-16">
  <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-8 pb-4'>Our Work and Expertise</h1>
  <p className="mb-4 text-center text-gray-700 leading-relaxed">
    We handle all kinds of building construction, including duplexes, bungalows, warehouses, shopping complexes, recreation centers, and event halls. Our expertise also covers bridges, roads, drainage systems, and more.
  </p>
</div>

<div className="container text-black max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-8 my-16">
  <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-8 pb-4'>Our Team</h1>
  <p className="mb-4 text-center text-gray-700 leading-relaxed">
    Our team is made up of professionals across various fields: building construction, civil engineering, land surveying, quantity surveying, town planning, structural engineering, electrical works, and skilled artisans from different trades.
  </p>
</div>

<div className="container mb-10 text-black mx-auto px-4 md:px-[3em]">
  <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-10 text-center pt-8 pb-4'>Our People</h1>
  <div className="w-full px-4 py-10 bg-gray-100">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div
            className="bg-white dark:bg-[#131944] rounded-xl shadow-md p-4 flex flex-col items-center text-center transition hover:shadow-xl"
            key={index}
          >
            <img
              src={profile}
              alt={member.name}
              className="rounded-full w-44 h-46 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
     

<div className="bg-white">
   <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-4 md:px-[2em] py-10 md:py-[5em] gap-8 md:gap-0">
        <div className="md:w-6/12 w-full mb-6 md:mb-0 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[rgb(254,93,20)]">
            Why choose us?
          </h1>
          <p className="mb-2 text-black leading-relaxed">
    Our client choices because we are Reliable, Quick Delivery,  professional experience used in achieving our work, standard work space and environment, use of quality materials without compromise, no access charges (moderate charges), Dependable, use of modern equipment and expertise, professional Advice, Engineers Always available on site to supervise,etc
  </p>
  <p className='text-black leading-relaxed'>
   <strong>Lets build something together</strong>
  </p>
        </div>
        <div className="md:w-6/12 w-full flex justify-center">
          <img src={construct2} alt="const-img.." className="rounded-lg max-h-80 w-full object-cover" />
        </div>
      </div>
</div>
     
     <div className='text-center text-gray-600 leading-relaxed mt-[4em] mb-[4em] text-2xl sm:text-3xl md:text-4xl'><strong>"You can try us today and be more convinced"</strong></div>
    </div>
  )
}

export default About