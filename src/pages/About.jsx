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

      <div className="container text-black mx-auto px-4 md:px-[3em]">
        <h1 className='text-2xl md:text-3xl font-bold text-center pt-8 pb-4'>Our History</h1>
        <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nesciunt, impedit quo cum hic deserunt cumque dolor autem quisquam, esse earum corrupti eius quae repellendus? Nihil sed ad amet repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem nulla labore voluptatum. Non, quibusdam ratione earum voluptas unde omnis tempora consequuntur praesentium velit nulla, deleniti culpa similique nihil inventore!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id praesentium exercitationem blanditiis vitae sit assumenda. Architecto hic officiis in nostrum quibusdam magnam impedit sed, facere vel. Error dicta perferendis nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora sint dolore consequatur rem quod est, veritatis exercitationem quaerat repellat dolorum aperiam iusto non quis perferendis, quisquam accusantium vero a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci officiis aliquid, expedita possimus tenetur explicabo assumenda vitae quia voluptatibus natus, ipsum maiores, molestiae earum commodi blanditiis fuga sit quas itaque!</p>
      </div>

      <div className="container text-black mx-auto px-4 md:px-[3em]">
        <h1 className='text-2xl md:text-3xl font-bold text-center pt-8 pb-4'>Our Approach</h1>
        <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nesciunt, impedit quo cum hic deserunt cumque dolor autem quisquam, esse earum corrupti eius quae repellendus? Nihil sed ad amet repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem nulla labore voluptatum. Non, quibusdam ratione earum voluptas unde omnis tempora consequuntur praesentium velit nulla, deleniti culpa similique nihil inventore!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id praesentium exercitationem blanditiis vitae sit assumenda. Architecto hic officiis in nostrum quibusdam magnam impedit sed, facere vel. Error dicta perferendis nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora sint dolore consequatur rem quod est, veritatis exercitationem quaerat repellat dolorum aperiam iusto non quis perferendis, quisquam accusantium vero a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci officiis aliquid, expedita possimus tenetur explicabo assumenda vitae quia voluptatibus natus, ipsum maiores, molestiae earum commodi blanditiis fuga sit quas itaque!</p>
      </div>

      <div className="container mb-10 text-black mx-auto px-4 md:px-[3em]">
        <h1 className='text-2xl md:text-3xl my-10 font-bold text-center pt-8 pb-4'>Our People</h1>
        
        <div className="w-full px-4 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
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

      <div className="flex flex-col md:flex-row bg-white px-4 md:px-[2em] py-10 md:py-[5em] gap-8 md:gap-0">
        <div className="md:w-6/12 w-full mb-6 md:mb-0 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl text-[rgb(254,93,20)] font-bold">
            Our Facility
          </h1>
          <p className="text-black mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            culpa deleniti rem et voluptate incidunt sapiente fugit ipsa autem
            dolorem ea quam, mollitia corporis vel ad illo quisquam nobis quo.
          </p>
          <p className="text-black mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            tempora illo necessitatibus aut ad quae aliquid modi autem
            adipisci esse blanditiis voluptas, vero a quas ratione ea
            explicabo! Nemo, quibusdam?
          </p>
        </div>
        <div className="md:w-6/12 w-full flex justify-center">
          <img src={construct2} alt="const-img.." className="rounded-lg max-h-80 w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default About