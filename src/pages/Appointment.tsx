
import React from 'react';
import AppointmentForm from '@/components/AppointmentForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Appointment = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clinic-blue to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-clinic-purple-dark">Book an Appointment</h1>
            <p className="text-lg text-gray-700">
              Take the first step toward better mental health by scheduling your consultation with Dr. Thompson.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold mb-6">Request Your Appointment</h2>
              <AppointmentForm />
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-clinic-purple/10 p-2 rounded mr-3">
                      <Phone className="h-5 w-5 text-clinic-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+44 20 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-clinic-purple/10 p-2 rounded mr-3">
                      <Mail className="h-5 w-5 text-clinic-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">appointments@mindcareclinic.co.uk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-clinic-purple/10 p-2 rounded mr-3">
                      <MapPin className="h-5 w-5 text-clinic-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">123 Harley Street, London, UK</p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-clinic-purple-dark hover:text-clinic-purple text-sm inline-flex items-center mt-1"
                      >
                        View on map
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-clinic-purple/10 p-2 rounded mr-3">
                      <Clock className="h-5 w-5 text-clinic-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">Monday - Friday</p>
                      <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-clinic-purple/10 p-2 rounded mr-3">
                      <Clock className="h-5 w-5 text-clinic-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">Saturday</p>
                      <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-clinic-purple/10 p-2 rounded mr-3">
                      <Clock className="h-5 w-5 text-clinic-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">Sunday</p>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-clinic-pink/20 rounded-md">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Note:</span> Emergency services are available 24/7. For urgent matters, please call our emergency line at +44 20 5678 1234.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Appointment Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What to Bring</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Photo identification</li>
                  <li>Insurance card (if applicable)</li>
                  <li>List of current medications</li>
                  <li>Any relevant medical records or previous psychiatric evaluations</li>
                  <li>Payment method for co-pays or self-pay fees</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Appointment Types</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-semibold">Initial Consultation (60 minutes)</p>
                    <p className="text-gray-700">
                      A comprehensive assessment to understand your concerns, symptoms, medical history, and goals for treatment. This session will conclude with initial recommendations for your treatment plan.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-semibold">Follow-up Appointment (30 minutes)</p>
                    <p className="text-gray-700">
                      Regular sessions to monitor your progress, adjust treatment as needed, and address any concerns that have arisen since your last appointment.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Cancellation Policy</h3>
                <p className="text-gray-700">
                  We understand that situations arise that may require you to cancel or reschedule your appointment. We kindly request at least 24 hours' notice for any cancellations or changes to avoid a cancellation fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
