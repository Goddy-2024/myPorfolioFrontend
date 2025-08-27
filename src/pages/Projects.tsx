
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a collection of projects I've worked on. Each project represents challenges overcome and solutions created.
          </p>
        </div>

        <div className="space-y-24">
          {/* Project 1 */}
          <div id="maringo" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <img src="/uploads/smartconnect.png" className="bg-gray-200 h-80 rounded-lg flex items-center justify-center"/>
                
                <p className="text-gray-500 font-medium"></p>
              
            </div>
            <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-4 text-navy">STREET SMART CONNECT</h2>
              <p className="text-gray-600 mb-6">
               A website designed to bridge the gap between 
local merchants (hawkers) and potential customers. The platform allows users to register as either merchants or clients, 
providing them with a seamless way to connect based on their location and product preferences.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-navy mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Express</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Socket.io</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Firebase Auth</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Firebase Auth</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Firebase Cloud Messaging (FCM)</span>
                  
                  
                </div>
              </div>
              <a 
                href="https://preview--street-smart-market-connect.lovable.app/" 
                className="btn-primary inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Project
              </a>
            </div>
          </div>
          

          {/* Project 3 */}
          <div id="ledger" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
            <img src="/uploads/mmufellowship.png" className="bg-gray-200 h-80 rounded-lg flex items-center justify-center"/>

                <p className="text-gray-500 font-medium">ADMIN FELLOWSHIP MANAGER</p>
              
            </div>
            <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-4 text-navy">THE MMU ADMIN FELLOWSHIP MANAGER</h2>
              <p className="text-gray-600 mb-6">
               A comprehensive fellowship management system built with the MERN stack (MongoDB, Express.js, React, Node.js) for managing members, events, and generating reports.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-navy mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Express</span>
                </div>
              </div>
              <a 
                href="https://multimedia-university-fellowship.vercel.app/" 
                className="btn-primary inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
