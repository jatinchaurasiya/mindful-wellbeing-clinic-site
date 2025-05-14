
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Brain, Clock, Users, MessageCircle, Smile } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-clinic-purple/10">
      <div className="bg-clinic-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-clinic-purple" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild variant="outline" className="border-clinic-purple text-clinic-purple hover:bg-clinic-purple/10 w-full">
        <Link to="/appointment">Book Now</Link>
      </Button>
    </div>
  );
};

const Services = () => {
  const servicesList = [
    {
      icon: Heart,
      title: "Depression Treatment",
      description: "Our evidence-based approach to treating depression combines medication management with therapeutic techniques to help you regain hope and joy."
    },
    {
      icon: Brain,
      title: "Anxiety Management",
      description: "We offer personalized strategies to help you understand and manage anxiety, panic attacks, and excessive worry in your daily life."
    },
    {
      icon: Users,
      title: "Child & Adolescent Psychiatry",
      description: "Specialized care for young people dealing with behavioral issues, developmental disorders, and emotional challenges."
    },
    {
      icon: Clock,
      title: "Stress Management",
      description: "Learn effective techniques to cope with stress and prevent it from interfering with your work, relationships, and overall wellbeing."
    },
    {
      icon: MessageCircle,
      title: "Cognitive Behavioral Therapy",
      description: "A goal-oriented therapeutic approach that helps you identify and change negative thought patterns affecting your emotions and behavior."
    },
    {
      icon: Smile,
      title: "Mindfulness Training",
      description: "Develop present-moment awareness to reduce stress, improve focus, and enhance your overall mental wellbeing."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clinic-blue to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-clinic-purple-dark">Our Services</h1>
            <p className="text-lg text-gray-700 mb-8">
              At MindCare Clinic, we offer comprehensive psychiatric services tailored to your individual needs. 
              Our team of experts is dedicated to providing compassionate care using evidence-based approaches.
            </p>
            <Button asChild size="lg" className="bg-clinic-purple hover:bg-clinic-purple-dark">
              <Link to="/appointment">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Treatment Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure you receive the most effective care for your needs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-clinic-purple"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
                    <p className="text-gray-600">
                      A comprehensive evaluation to understand your symptoms, history, and goals for treatment.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-clinic-purple flex items-center justify-center text-white font-bold z-10 order-1 md:order-2">
                    1
                  </div>
                  <div className="flex-1 order-3 md:pl-8"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 order-2 md:order-1"></div>
                  <div className="h-10 w-10 rounded-full bg-clinic-purple flex items-center justify-center text-white font-bold z-10 order-1 md:order-2">
                    2
                  </div>
                  <div className="flex-1 md:pl-8 order-3 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">Personalized Treatment Plan</h3>
                    <p className="text-gray-600">
                      Development of a customized approach based on your specific needs and preferences.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 md:text-right md:pr-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">Treatment Implementation</h3>
                    <p className="text-gray-600">
                      Regular sessions to implement therapeutic techniques and monitor medication if prescribed.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-clinic-purple flex items-center justify-center text-white font-bold z-10 order-1 md:order-2">
                    3
                  </div>
                  <div className="flex-1 order-3 md:pl-8"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 order-2 md:order-1"></div>
                  <div className="h-10 w-10 rounded-full bg-clinic-purple flex items-center justify-center text-white font-bold z-10 order-1 md:order-2">
                    4
                  </div>
                  <div className="flex-1 md:pl-8 order-3 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">Progress Monitoring</h3>
                    <p className="text-gray-600">
                      Regular review of your progress and adjustment of treatment strategies as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Info */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-clinic-purple/10">
            <h3 className="text-2xl font-bold mb-4 text-center">Insurance & Payment Options</h3>
            <p className="text-gray-600 mb-6 text-center">
              We accept a wide range of insurance plans and offer flexible payment options to ensure you can access the care you need.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-semibold mb-2">Accepted Insurance</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Bupa</li>
                  <li>• AXA Health</li>
                  <li>• Aviva</li>
                  <li>• Vitality</li>
                  <li>• WPA</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-semibold mb-2">Payment Options</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Self-pay</li>
                  <li>• Credit/debit cards</li>
                  <li>• Payment plans</li>
                  <li>• Health savings accounts</li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-gray-600">
              Contact our office to verify your insurance coverage or discuss payment options.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-clinic-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward better mental health today. Our team is ready to support you on your journey.
          </p>
          <Button asChild size="lg" className="bg-white text-clinic-purple-dark hover:bg-gray-100">
            <Link to="/appointment">Schedule Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
