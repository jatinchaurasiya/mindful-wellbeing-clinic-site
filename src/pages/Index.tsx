
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle, Calendar, MessageCircle } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: "Depression Treatment",
      description: "Evidence-based approaches to help you overcome depression and regain joy in your life.",
      icon: Heart
    },
    {
      title: "Anxiety Management",
      description: "Personalized strategies to manage anxiety and build resilience for everyday challenges.",
      icon: CheckCircle
    },
    {
      title: "Child & Adolescent Care",
      description: "Specialized psychiatric support for young ones navigating mental health challenges.",
      icon: MessageCircle
    },
    {
      title: "Online Consultations",
      description: "Convenient virtual appointments from the comfort of your home.",
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose MindCare Clinic?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-clinic-purple/20">
              <div className="w-14 h-14 bg-clinic-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Expert Psychiatrists</h3>
              <p className="text-gray-600 text-center">Our team consists of highly qualified psychiatrists with years of experience in various mental health fields.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-clinic-purple/20">
              <div className="w-14 h-14 bg-clinic-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Compassionate Care</h3>
              <p className="text-gray-600 text-center">We provide a warm, non-judgmental environment where you can feel safe to express yourself.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-clinic-purple/20">
              <div className="w-14 h-14 bg-clinic-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 text-center">We offer appointments that fit your lifestyle, including evenings and weekends.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of psychiatric and psychological services tailored to meet your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 card-shadow">
                <div className="flex items-start">
                  <div className="bg-clinic-purple/10 p-3 rounded-full mr-4">
                    <service.icon className="h-6 w-6 text-clinic-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link to="/services" className="text-clinic-purple-dark hover:text-clinic-purple font-medium inline-flex items-center">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-clinic-purple hover:bg-clinic-purple-dark">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonial Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of those who have found support and healing at MindCare Clinic.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-clinic-purple/5 p-8 rounded-lg relative">
            <svg className="absolute top-4 left-4 h-12 w-12 text-clinic-purple opacity-20" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            
            <div className="relative z-10">
              <p className="text-lg italic text-gray-700 mb-6">
                "Coming to MindCare Clinic was a turning point in my life. Dr. Thompson's approach was exactly what I needed - professional yet deeply caring. I finally feel like I have the tools to manage my anxiety."
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-clinic-purple rounded-full flex items-center justify-center text-white font-bold mr-3">
                  SJ
                </div>
                <div>
                  <p className="font-semibold">Sarah J.</p>
                  <p className="text-sm text-gray-500">Patient for 2 years</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-clinic-purple text-clinic-purple hover:bg-clinic-purple/10">
              <Link to="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-clinic-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the First Step?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to support you on your journey to better mental health. Schedule your appointment today.
          </p>
          <Button asChild size="lg" className="bg-white text-clinic-purple-dark hover:bg-gray-100">
            <Link to="/appointment">Book an Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
