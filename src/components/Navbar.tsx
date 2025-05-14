
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Doctor', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-clinic-purple">
            <span className="text-clinic-purple-dark">Mind</span>Care Clinic
          </h1>
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navItems.map(item => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "text-gray-600 hover:text-clinic-purple transition-colors",
                  location.pathname === item.path && "text-clinic-purple font-medium"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Button asChild className="bg-clinic-purple hover:bg-clinic-purple-dark">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </li>
        </ul>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in">
          <div className="container mx-auto p-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map(item => (
                <li key={item.name} className="py-2 border-b border-gray-100">
                  <Link
                    to={item.path}
                    className={cn(
                      "text-gray-600 hover:text-clinic-purple transition-colors block",
                      location.pathname === item.path && "text-clinic-purple font-medium"
                    )}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="py-2">
                <Button 
                  asChild 
                  className="w-full bg-clinic-purple hover:bg-clinic-purple-dark"
                  onClick={toggleMenu}
                >
                  <Link to="/appointment">Book Appointment</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
