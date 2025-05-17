import React from 'react'
import construct6 from "../assets/construct6.jpg"

const Contact = () => {
  return (
    <div> 
      <div
            className='w-full bg-cover p-[4em] bg-center bg-no-repeat relative'
            style={{ backgroundImage: `url(${construct6})` }}>
              <div className='absolute inset-0 bg-black/60'></div>
              <div className='relative z-10'>
        <h1 className='text-6xl font-bold text-start text-white'>Contact Us</h1>
        <h3>Get in touch with us about your next construction project</h3>
      </div>
            </div>

            <div className="input-groud">
  <input required="" type="text" name="text" autocomplete="off" className="input"/>
  <label className="user-label">First Name</label>
</div>
    </div>
  )
}

export default Contact