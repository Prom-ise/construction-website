import React from 'react'
import construct7 from '../assets/construct7.jpg'

const Services = () => {
  return (
    <div>
      <div
              className="w-full bg-cover p-[4em] bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${construct7})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10">
                <h1 className="text-6xl font-bold text-start text-white">
                  Services
                </h1>
                <h3>Construction services</h3>
              </div>
            </div>

            <div>
              <h1 className='text-5xl font-bold text-[rgb(254,93,20)] mt-[4em] mb-[4em]'>Our Featured Services</h1>
              <p>NIA Construction tackles all projects with a personal commitment to providing an efficient and professional experience from start to finish. We understand the stress our clients experience when selecting the right company for their real estate related projects. Whether the project is building a new home, remodeling an existing one or assisting with a maintenance project, NIA Construction approaches every project with the utmost integrity.</p>

<p>We take the time to fully realize the needs of our clients so that we can work as a unified front to achieve the best possible result. We live by the motto that no job is too small or robust, and take pride in understanding and servicing the needs of the client first. We aim to not only meet, but to exceed deliverable expectations. We look forward to "building" lasting relationships and to earning your trust and business!</p>
            </div>
    </div>
  )
}

export default Services