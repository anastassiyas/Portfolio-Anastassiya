import React from 'react';
import {about} from "../data";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <br />
          <h1 className="title-font  italic  sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">
            Hi, my name is Anastassiya</h1>
            <br />
            <div className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center uppercase text-transparent text-xl sm:text-2xl font-extrabold tracking-wide antialiased" style={{ backgroundImage: "url(https://media.giphy.com/media/2HwWFR7TEr8aJS1uQt/source.gif)" }}>
            I am a Full stack web developer <br /> based in Denver, Co, US
      </div>
      <br />
            
             
          
          <p className="font-mono mb-8 leading-relaxed">
          I have knowledge and experience in designing, developing and<br />
          implementing applications and solutions using various technologies and programming languages.<br />
          I strive to use my development experience and apply hands-on technical expertise in a  role as a Full-stack Developer.
          <br />
          <br />
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className=" inline-flex text-gray-200 bg-gradient-to-br from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 text-gray-200 rounded text-lg">

              Recent Works
            </a>
            <a
              href="./resume.png" target="_blank" rel="noreferrer"
              className="ml-4 inline-flex text-gray-200 bg-gradient-to-br from-green-500 to-red-500 hover:from-green-400 hover:to-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-gray-200 rounded text-lg"> 
           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
        class="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor"
          d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
        </path>
      </svg>
      
             Download CV
             
            </a>
            
          </div>
        </div>
        <span className="relative inline-block rounded-full" aria-label="avatar">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        
          <img
            className="block mx-auto h-96 rounded-full sm:mx-5 sm:shrink-5 border-8 border-green-500" alt="my face"
            src="./portfolio.png"
          />
          <span className="absolute bottom-12 right-16 w-6 h-6 rounded-full bg-green-500 ring-2 ring-gray-50" />
        <span className="absolute bottom-12 right-16 w-6 h-6 rounded-full bg-green-500 animate-ping" />
      
    
        </div>
        </span>
      </div>
      
    </section>
  );
}

export default About;



