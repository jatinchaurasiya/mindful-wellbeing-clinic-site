
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Award, BookOpen, Check } from 'lucide-react';

const About = () => {
  const qualifications = [
    "MD in Psychiatry, University of Oxford",
    "Fellowship in Child & Adolescent Psychiatry, King's College London",
    "Member of the Royal College of Psychiatrists (MRCPsych)",
    "Certified in Cognitive Behavioral Therapy",
    "Published researcher in the British Journal of Psychiatry"
  ];

  const specializations = [
    "Depression and Mood Disorders",
    "Anxiety and Panic Disorders",
    "Child & Adolescent Psychiatry",
    "Trauma and PTSD",
    "ADHD Management",
    "Cognitive Behavioral Therapy"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clinic-blue to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-clinic-purple-dark">Meet Dr. Sarah Thompson</h1>
            <p className="text-lg text-gray-700 mb-8">
              Dedicated to providing compassionate psychiatric care with over 15 years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1559839914-17aae19cec71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Dr. Sarah Thompson" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="mt-8 flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-clinic-purple">15+</div>
                  <div className="text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-clinic-purple">5000+</div>
                  <div className="text-gray-500">Patients Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-clinic-purple">20+</div>
                  <div className="text-gray-500">Research Papers</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold mb-6 text-clinic-purple-dark">About Dr. Thompson</h2>
              
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  Dr. Sarah Thompson is a leading psychiatrist with over 15 years of experience in both clinical practice and research. She founded MindCare Clinic with a mission to provide accessible, compassionate mental healthcare to the community.
                </p>
                <p>
                  After completing her medical degree at the University of Oxford, Dr. Thompson specialized in psychiatry at King's College London, where she also completed a fellowship in Child & Adolescent Psychiatry. Her extensive training and research have made her an expert in treating a wide range of mental health conditions.
                </p>
                <p>
                  Dr. Thompson takes a holistic approach to mental healthcare, considering not just the symptoms but the whole person. She believes in the importance of building a strong therapeutic relationship and creating individualized treatment plans that address each patient's unique needs.
                </p>
                <p>
                  Throughout her career, Dr. Thompson has been recognized for her contributions to the field of psychiatry, receiving several awards for her research and clinical excellence. She regularly contributes to academic journals and speaks at conferences on topics related to mental health.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-clinic-purple" />
                    Qualifications
                  </h3>
                  <ul className="space-y-2">
                    {qualifications.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-clinic-purple shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-clinic-purple" />
                    Specializations
                  </h3>
                  <ul className="space-y-2">
                    {specializations.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-clinic-purple shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-clinic-purple" />
                  Publications & Research
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    "The Role of Early Intervention in Adolescent Depression" - British Journal of Psychiatry, 2021
                  </li>
                  <li className="text-gray-700">
                    "Cognitive Behavioral Therapy Outcomes in Anxiety Disorders" - Journal of Mental Health, 2019
                  </li>
                  <li className="text-gray-700">
                    "Modern Approaches to ADHD Management" - European Psychiatry, 2018
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg" className="bg-clinic-purple hover:bg-clinic-purple-dark">
                  <Link to="/appointment">Book an Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Philosophy of Care</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg">
                At MindCare Clinic, we believe that mental healthcare should be personalized, evidence-based, and delivered with compassion. Our approach is centered on these core principles:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-clinic-purple-dark">Person-Centered</h3>
                  <p>
                    We see each patient as a whole person with unique needs, preferences, and circumstances that inform their treatment.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-clinic-purple-dark">Evidence-Based</h3>
                  <p>
                    Our treatments are grounded in the latest research and clinical evidence to ensure effective outcomes.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-clinic-purple-dark">Collaborative</h3>
                  <p>
                    We work together with our patients, involving them as active participants in their treatment journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-clinic-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the First Step?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule your consultation with Dr. Thompson and begin your journey to better mental health.
          </p>
          <Button asChild size="lg" className="bg-white text-clinic-purple-dark hover:bg-gray-100">
            <Link to="/appointment">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
