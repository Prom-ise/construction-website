import React from 'react'
import construct4 from "../assets/construct4.jpg"
import construct2 from "../assets/construct2.jpg"
import profile from "../assets/profile.jpg"

const About = () => {
  return (
    <div>
      <div
  className='w-full bg-cover bg-center bg-no-repeat relative'
  style={{ backgroundImage: `url(${construct4})` }}
>
  {/* Overlay */}
  <div className='absolute inset-0 bg-black bg-opacity-50'></div>

  {/* Content */}
  <div className='relative z-10'>
    <h1 className='text-6xl font-bold text-center text-white p-[3em]'>About</h1>
  </div>
</div>

<div className="container text-black mx-auto px-[3em]">
  <h1 className='text-3xl font-bold text-center pt-[2em] pb-4'>Our History</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nesciunt, impedit quo cum hic deserunt cumque dolor autem quisquam, esse earum corrupti eius quae repellendus? Nihil sed ad amet repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem nulla labore voluptatum. Non, quibusdam ratione earum voluptas unde omnis tempora consequuntur praesentium velit nulla, deleniti culpa similique nihil inventore!</p>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id praesentium exercitationem blanditiis vitae sit assumenda. Architecto hic officiis in nostrum quibusdam magnam impedit sed, facere vel. Error dicta perferendis nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora sint dolore consequatur rem quod est, veritatis exercitationem quaerat repellat dolorum aperiam iusto non quis perferendis, quisquam accusantium vero a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci officiis aliquid, expedita possimus tenetur explicabo assumenda vitae quia voluptatibus natus, ipsum maiores, molestiae earum commodi blanditiis fuga sit quas itaque!</p>
</div>
<div className="container text-black mx-auto px-[3em]">
  <h1 className='text-3xl font-bold text-center pt-[2em] pb-4'>Our Approach</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nesciunt, impedit quo cum hic deserunt cumque dolor autem quisquam, esse earum corrupti eius quae repellendus? Nihil sed ad amet repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem nulla labore voluptatum. Non, quibusdam ratione earum voluptas unde omnis tempora consequuntur praesentium velit nulla, deleniti culpa similique nihil inventore!</p>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id praesentium exercitationem blanditiis vitae sit assumenda. Architecto hic officiis in nostrum quibusdam magnam impedit sed, facere vel. Error dicta perferendis nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora sint dolore consequatur rem quod est, veritatis exercitationem quaerat repellat dolorum aperiam iusto non quis perferendis, quisquam accusantium vero a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci officiis aliquid, expedita possimus tenetur explicabo assumenda vitae quia voluptatibus natus, ipsum maiores, molestiae earum commodi blanditiis fuga sit quas itaque!</p>
</div>
<div className="container mb-10 text-black mx-auto px-[3em]">
  <h1 className='text-3xl my-10 font-bold text-center pt-[2em] pb-4'>Our People</h1>
 <div className='flex flex-row space-x-8 w-full justify-center items-center'>
<div class="card2 flex-row w-4/12">
    <div class="card2-image">
      <img src={profile} alt="pfile img.." />
    </div>
    <div class="category">John Doe</div>
    <div class="heading">Founder</div>
</div>
<div class="card2 flex-row w-4/12">
    <div class="card2-image">
      <img src={profile} alt="pfile img.." />
    </div>
    <div class="category">John Doe</div>
    <div class="heading">Founder</div>
</div>
<div class="card2 flex-row w-4/12">
    <div class="card2-image">
      <img src={profile} alt="pfile img.." />
    </div>
    <div class="category">John Doe</div>
    <div class="heading">Founder</div>
</div>
 </div>

 <div className='flex flex-row my-10 space-x-8 w-full justify-center items-center'>
 <div class="card2 flex-row w-4/12">
    <div class="card2-image">
      <img src={profile} alt="pfile img.." />
    </div>
    <div class="category">John Doe</div>
    <div class="heading">Founder</div>
</div>
<div class="card2 flex-row w-4/12">
    <div class="card2-image">
      <img src={profile} alt="pfile img.." />
    </div>
    <div class="category">John Doe</div>
    <div class="heading">Founder</div>
</div>
<div class="card2 flex-row w-4/12">
    <div class="card2-image">
      <img src={profile} alt="pfile img.." />
    </div>
    <div class="category">John Doe</div>
    <div class="heading">Founder</div>
</div>
 </div>
</div>

<div className="flex bg-white flex-row px-[2em] py-[5em]">
          <div className="w-6/12">
            <h1 className="text-3xl text-[rgb(254,93,20)] font-bold">
              Our Facility
            </h1>
            <p className="text-black">
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
          <div className="w-6/12">
            <img src={construct2} alt="const-img.." />
          </div>
        </div>
    </div>
  )
}

export default About