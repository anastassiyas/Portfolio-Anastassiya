import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar() {
  return (
    <header className="bg-blue-700 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-green-400 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            About</a></a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="group relative inline-block mr-5 p-2.5 outline-none no-underline bg-gradient-to-br from-blue-400 to-green-400 text-lg text-transparent bg-clip-text tracking-wide focus:outline-none transition-all duration-300 transform hover:from-green-400 hover:to-green-400">
          <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-br from-blue-400 to-green-400 opacity-0 transition-all duration-300 transform -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true"/>
            Projects
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-br from-blue-400 to-green-400 opacity-0 transition-all duration-300 transform translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true"/>  
            </a>
          <a href="#skills" className="group relative inline-block mr-5 p-2.5 outline-none no-underline bg-gradient-to-br from-blue-400 to-green-400 text-lg text-transparent bg-clip-text tracking-wide focus:outline-none transition-all duration-300 transform hover:green-400 hover:to-green-400">
          <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-br from-blue-400 to-green-400 opacity-0 transition-all duration-300 transform -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true"/>
            Skills
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-br from-blue-400 to-green-400 opacity-0 transition-all duration-300 transform translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true"/>    
            </a>
          <a href="#testimonials" className="group relative inline-block mr-5 p-2.5 outline-none no-underline bg-gradient-to-br from-blue-400 to-green-400 text-lg text-transparent bg-clip-text tracking-wide focus:outline-none transition-all duration-300 transform hover:from-green-400 hover:to-green-400">
          <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-br from-blue-400 to-green-400 opacity-0 transition-all duration-300 transform -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true"/>
            Testimonials
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-br from-blue-400 to-green-400 opacity-0 transition-all duration-300 transform translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true"/>    
            </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gradient-to-br from-green-500 to-gray-200 hover:from-green-400 hover:to-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
        Contact me <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

export default Navbar