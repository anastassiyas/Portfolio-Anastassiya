import React from 'react';

import { CodeIcon } from "@heroicons/react/solid";

import { projects } from "../data";

 function Projects() {
  return (
    <section id="projects" className="relative mx-auto py-8 md:py-16 px-4 w-full max-w-7xl bg-gradient-to-b from-blue-600 to-gray-400">
    <div className="mx-auto max-w-5xl">
    <div className="text-center mb-20">
      {/* :TITLE CONTAINER */}
     
        <CodeIcon className="mx-auto inline-block w-10 mb-4 text-green-300" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-green-300">Apps I've Built</h1>
       
      </div>

      <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
        {projects.map(project => (
          <a href={project.link} key={project.id} className="col-span-1 group relative p-2 pb-5 flex flex-col items-center border-2 border-transparent rounded-xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm hover:shadow-xl hover:border-pink-500">
            {/* ::Image */}
            <div className="relative max-h-64 rounded-2xl overflow-hidden">
              <img src={project.image} alt="" className="object-cover transition duration-200 ease-in transform group-hover:scale-105" />
            
                </div>
            {/* ::Details */}
            <div className="mt-2 px-2 w-full flex flex-col space-y-1">
              {/* :::name */}
              <p className="text-xl text-green-300 text-opacity-80 font-semibold tracking-wide group-hover:text-opacity-100">{project.title}</p>
           
              <p className="flex items-center">
              
                <span className="text-xs text-red-500 text-opacity-80 font-bold tracking-wide">{project.subtitle}</span>
              </p>
              {/* :::bid infos */}
              <span className="flex justify-between items-center">
                <span className="mr-4 text-sm text-white font-semibold">{`${project.description}`}</span>
               
              </span>
             
        
              <a href={project.github} className="w-16 rounded-full flex-shrink-0 object-cover object-center relative px-3 py-1.5 rounded-full bg-gradient-to-t from-pink-600 to-pink-200 text-xs text-gray-200 font-bold tracking-wide hover:to-pink-600">Github</a>
            </div>
          </a>
        ))
        }
      </div>

    </div>      
  </section>
)
}  

export default Projects

