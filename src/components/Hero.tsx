
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";
import { useState, useEffect } from "react";


export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen pt-20 pb-10 flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <div className="overflow-hidden">
              <h2 
                className={`text-4xl md:text-6xl font-bold mb-4 text-navy ${isVisible ? 'animate-merge-left' : 'opacity-0'}`}
                style={{ animationDelay: '200ms' }}
              >
                Hello,
              </h2>
            </div>
            
            <div className="overflow-hidden">
              <h1 
                className={`text-4xl md:text-6xl font-bold mb-4 text-navy ${isVisible ? 'animate-merge-right' : 'opacity-0'}`}
                style={{ animationDelay: '400ms' }}
              >
                I'm <span className="text-royal">Godswill</span>, A Software Engineering
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <h3 
                className={`text-2xl md:text-4xl font-bold mb-6 text-navy ${isVisible ? 'animate-merge-left' : 'opacity-0'}`}
                style={{ animationDelay: '600ms' }}
              >
               
                <span className="text-royal"> Student and a Full Stack Developer</span>.
              </h3>
            </div>
            
            <div className={`mt-12 flex flex-wrap gap-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
              <SocialLinks />
            </div>

            <div className={`mt-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
              <Link to="/contact" className="btn-primary">
                HIRE ME
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in order-first lg:order-last">
            <div className="relative z-10">
              <img 
                src="/uploads/portfolio1.jfif" 
                alt="Godswill Portrait" 
                className=""
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
