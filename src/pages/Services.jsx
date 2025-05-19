import React from "react";
import construct7 from "../assets/construct7.jpg";

const Services = () => {
  return (
    <div>
      <div
        className="w-full bg-cover p-[4em] bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${construct7})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold text-start text-white">Services</h1>
          <h3>Construction services</h3>
        </div>
      </div>

      <div className="container mx-auto ms-4 my-[10em]">
        <h1 className="text-2xl font-bold text-black ">
          Our Featured Services
        </h1>
        <p className="text-black my-[1em]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta excepturi aut, harum numquam unde aperiam, voluptate tenetur minima commodi qui, voluptates eaque vitae eos reiciendis sapiente iusto vel maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis est fugiat obcaecati consequatur illo natus soluta dolorum harum voluptates iusto quas, alias dignissimos commodi perferendis et veritatis distinctio sint. Ratione?
        </p>

        <p className="text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro error impedit assumenda aspernatur harum voluptates voluptatum, consectetur quasi at cum doloribus laborum totam officiis similique reiciendis vero, reprehenderit atque iure? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque iure deserunt ducimus adipisci, perspiciatis non autem maiores nulla blanditiis quae sed animi dicta cum enim quo possimus. Eum, corporis.
        </p>
      </div>

      <div className="mx-auto">
        <h1 className="text-3xl mt-[2em] font-bold text-center text-[rgb(254,93,20)]">Featured Construction Services</h1>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
