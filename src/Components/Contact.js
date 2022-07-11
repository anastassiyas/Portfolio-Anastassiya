import React from "react";

export default function Contact() {
  
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-blue-700 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=denver+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-blue-700 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-green-200 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-200">
                <br />
                DENVER, C0 80222
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-green-200 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-gray-200 text-sm leading-relaxed">
                ana.savostina@yahoo.com
              </a>
              <h2 className="title-font font-semibold text-green-200 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-200">720-462-1016</p>
            </div>
          </div>
        </div>

        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-green-500 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
        
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-blue-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full bg-blue-700 rounded border border-gray-700 focus:border-blue-600 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-blue-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="myaddress@example.com"
              className="w-full bg-blue-700 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-blue-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full bg-blue-700 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-gray-200 font-bold bg-gradient-to-br from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
