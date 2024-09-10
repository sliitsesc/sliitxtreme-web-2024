import React from "react";

const FAQ = () => {
  return (
    <div className="px-8 py-16 gap-y-10 md:gap-x-10">
      <h1 className="mb-6 text-2xl font-bold text-center">FAQ</h1>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" name="my-accordion-2" defaultChecked />
        <div className="text-xl font-medium collapse-title">
          What is SLIIT Extreme
        </div>
        <div className="collapse-content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, quasi 
            inventore ducimus laboriosam, ad ea, enim alias ipsa quod eveniet vel nesciunt
             at? Natus modi pariatur sequi delectus consectetur quia.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" name="my-accordion-2" />
        <div className="text-xl font-medium collapse-title">
        What is SLIIT Extreme
        </div>
        <div className="collapse-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit 
            ea suscipit tempora quibusdam magni non in mollitia? Excepturi dolores voluptate 
            explicabo sed minima! Laboriosam eligendi dolor quisquam nobis rerum!</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="my-accordion-2" />
        <div className="text-xl font-medium collapse-title">
        What is SLIIT Extreme
        </div>
        <div className="collapse-content">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus
             deserunt quis numquam nisi cupiditate in quo aut saepe veniam, doloremque voluptatum 
             dicta reprehenderit repudiandae aliquid commodi quasi sit dolore.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
