import React from 'react'
import { Link } from "react-router-dom";
import construct5 from "../assets/construct5.jpg"
import building from "../assets/building.jpg"
import construct3 from "../assets/construct3.jpg"

const Projects = () => {
  return (
    <div>
       <div
        className='w-full bg-cover bg-center bg-no-repeat relative'
        style={{ backgroundImage: `url(${construct5})` }}>
          <div className='absolute inset-0 bg-black/60'></div>
          <div className='relative z-10'>
    <h1 className='text-6xl font-bold text-center text-white p-[3em]'>Projects</h1>
  </div>
        </div>

        <div className='my-[6em] mb-[7em]'>
          <h1 className='text-center text-[rgb(254,93,20)]'>Our Past Projects</h1>
          <h1 className='text-center text-4xl text-[navy] font-bold'>Featured Previous Projects</h1>

          <div>
            <div className='flex flex-row my-10 space-x-8 w-full justify-center items-center'>
             <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential-Renovation</div>
            </div>
            <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential-Renovation</div>
            </div>
            <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential Renovation</div>
            </div>
             </div>
          </div>

          <div>
            <div className='flex flex-row my-10 space-x-8 w-full justify-center items-center'>
             <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential Renovation</div>
            </div>
            <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential Renovation</div>
            </div>
            <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential Renovation</div>
            </div>
             </div>
          </div>

          <div>
            <div className='flex flex-row my-10 space-x-8 w-full justify-center items-center'>
             <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential Renovation</div>
            </div>
            <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential Renovation</div>
            </div>
            <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential Renovation</div>
            </div>
             </div>
          </div>

          <div>
            <div className='flex flex-row my-10 space-x-8 w-full justify-center items-center'>
             <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential Renovation</div>
            </div>
            <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential Renovation</div>
            </div>
            <div class="cards3 flex-row w-4/12">
                <div class="card3-image">
                  <img src={building} alt="pfile img.." />
                </div>
                <div class="category">Five Star Suite</div>
                <div class="heading">Residential Renovation</div>
            </div>
             </div>
          </div>
        </div>
         <div className="relative p-[3em] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${construct3})` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
          
          <div className="relative z-10">
          <h1 className="text-center text-4xl text-[rgb(254,93,20)] font-bold">
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