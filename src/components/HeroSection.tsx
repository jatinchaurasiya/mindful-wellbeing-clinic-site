
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-clinic-blue to-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-clinic-purple-dark leading-tight">
              Compassionate Mental Healthcare For Everyone
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              At MindCare Clinic, we provide expert psychiatric services in a caring and supportive environment. Your journey to better mental health starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-clinic-purple hover:bg-clinic-purple-dark text-lg py-6">
                <Link to="/appointment">Book an Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-clinic-purple text-clinic-purple hover:bg-clinic-purple/10 text-lg py-6">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            <div className="pt-4 flex items-center space-x-2">
              <div className="bg-green-500 w-3 h-3 rounded-full"></div>
              <span className="text-green-700">Currently accepting new patients</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1559839914-17aae19cec71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Doctor caring for patient" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-clinic-purple/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
