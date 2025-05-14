
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinic-purple-dark text-white">
      <div className="container mx-auto pt-16 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Mind</span>Care Clinic
            </h3>
            <p className="mb-4">
              Providing compassionate and professional mental healthcare services for all ages.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Phone size={18} />
              <span>+44 20 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Mail size={18} />
              <span>contact@mindcareclinic.co.uk</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>123 Harley Street, London, UK</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-clinic-pink transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-clinic-pink transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-clinic-pink transition-colors">About Doctor</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-clinic-pink transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-clinic-pink transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-clinic-pink transition-colors">
                <Link to="/services">Depression Treatment</Link>
              </li>
              <li className="hover:text-clinic-pink transition-colors">
                <Link to="/services">Anxiety Management</Link>
              </li>
              <li className="hover:text-clinic-pink transition-colors">
                <Link to="/services">Child & Adolescent Psychiatry</Link>
              </li>
              <li className="hover:text-clinic-pink transition-colors">
                <Link to="/services">Stress Management</Link>
              </li>
              <li className="hover:text-clinic-pink transition-colors">
                <Link to="/services">Cognitive Behavioral Therapy</Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Monday - Friday: 9am - 7pm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Saturday: 10am - 4pm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Sunday: Closed</span>
              </div>
              <p className="mt-4 text-clinic-pink">
                Emergency services available 24/7
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p>&copy; {currentYear} MindCare Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
