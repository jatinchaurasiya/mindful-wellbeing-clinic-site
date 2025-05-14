
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, content, rating, duration }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-clinic-purple/10">
      <div className="flex items-center space-x-1 mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic mb-6">{content}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-clinic-purple rounded-full flex items-center justify-center text-white font-bold">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="ml-4">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role} • Patient for {duration}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsList = [
    {
      name: "Sarah Johnson",
      role: "Working Professional",
      duration: "2 years",
      rating: 5,
      content: "Coming to MindCare Clinic was a turning point in my life. Dr. Thompson's approach was exactly what I needed - professional yet deeply caring. I finally feel like I have the tools to manage my anxiety."
    },
    {
      name: "Michael Davis",
      role: "Teacher",
      duration: "1 year",
      rating: 5,
      content: "After struggling with depression for years, I found real help at MindCare Clinic. Dr. Thompson took the time to truly understand what I was going through, and worked with me to find the right treatment approach."
    },
    {
      name: "Emma Wilson",
      role: "University Student",
      duration: "6 months",
      rating: 5,
      content: "I was nervous about seeking help for my panic attacks, but from my first appointment, the entire team made me feel comfortable and supported. The difference in my daily life has been remarkable."
    },
    {
      name: "James Roberts",
      role: "Parent",
      duration: "1.5 years",
      rating: 5,
      content: "When our teenage son started struggling with anxiety, we didn't know where to turn. Dr. Thompson's expertise with adolescents made all the difference. Her compassionate approach helped him open up and engage with treatment."
    },
    {
      name: "Linda Thompson",
      role: "Retiree",
      duration: "3 years",
      rating: 4,
      content: "After losing my husband, I fell into a deep depression. Dr. Thompson helped me navigate the grieving process and rebuild my life. I'm now able to remember him with joy rather than overwhelming sadness."
    },
    {
      name: "Robert Mitchell",
      role: "Business Owner",
      duration: "8 months",
      rating: 5,
      content: "The stress of running my own business was taking a serious toll on my mental health. Dr. Thompson taught me practical strategies to manage stress and prevent burnout. I'm now more productive and, more importantly, happier."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clinic-blue to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-clinic-purple-dark">Patient Testimonials</h1>
            <p className="text-lg text-gray-700 mb-8">
              Read about the experiences and transformations of those who have received care at MindCare Clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsList.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                duration={testimonial.duration}
                rating={testimonial.rating}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Patient Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">A Journey to Recovery</h2>
            
            <div className="prose max-w-none">
              <p className="text-lg">
                <span className="text-2xl text-clinic-purple">"</span>
                I never thought I would find my way out of the darkness. For years, I had been struggling with severe depression that affected every aspect of my life. I had tried different therapists and medications, but nothing seemed to make a lasting difference.
              </p>
              
              <p className="my-4">
                When I first came to MindCare Clinic, I was at my lowest point. Dr. Thompson spent our first session just listening - really listening - to my story. She didn't rush to conclusions or immediately prescribe medication. Instead, she worked with me to create a comprehensive treatment plan that addressed not just my symptoms but the underlying causes.
              </p>
              
              <p className="my-4">
                Over the months that followed, we worked together through a combination of therapy and carefully monitored medication. Dr. Thompson was always available when I needed support, and she adjusted my treatment as we discovered what worked best for me.
              </p>
              
              <p className="my-4">
                Today, I can genuinely say I've rediscovered joy in my life. I still have difficult days, but I now have the tools and support to manage them effectively. MindCare Clinic didn't just treat my depression; they helped me build a foundation for lasting mental wellness.
              </p>
              
              <p className="text-right font-semibold">
                - Rachel W., Patient for 2 years
                <span className="text-2xl text-clinic-purple">"</span>
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-clinic-purple hover:bg-clinic-purple-dark">
                <Link to="/appointment">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">What can I expect at my first appointment?</h3>
                <p className="text-gray-700">
                  Your first appointment will be a comprehensive assessment where Dr. Thompson will take time to understand your concerns, symptoms, and medical history. This session typically lasts 60-90 minutes and will conclude with initial recommendations for your treatment plan.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">How long does treatment typically last?</h3>
                <p className="text-gray-700">
                  Treatment duration varies based on individual needs. Some patients benefit from short-term therapy lasting a few months, while others with more complex conditions may continue treatment for longer periods. Dr. Thompson will discuss expectations for your specific situation during your assessment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Do you prescribe medication?</h3>
                <p className="text-gray-700">
                  Yes, as a psychiatrist, Dr. Thompson can prescribe medication when appropriate. However, she believes in a comprehensive approach and may recommend therapy, lifestyle changes, or a combination of treatments based on your individual needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Are virtual appointments available?</h3>
                <p className="text-gray-700">
                  Yes, we offer secure video appointments for both initial consultations and follow-up sessions, making it convenient for you to receive care from the comfort of your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-clinic-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community of Healing</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward better mental health today. Our team is ready to support you on your journey.
          </p>
          <Button asChild size="lg" className="bg-white text-clinic-purple-dark hover:bg-gray-100">
            <Link to="/appointment">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
