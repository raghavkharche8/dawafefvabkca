import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/logo.png"
              alt="Chiplun Cycling Club"
              className="h-12 md:h-14 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base md:text-lg text-[#D84315] leading-tight">
                Chiplun Cycling Club
              </span>
              <span className="text-xs text-gray-600 hidden sm:inline">
                Cyclothon 2025
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-[#D84315] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('event-details')}
              className="text-gray-700 hover:text-[#D84315] transition-colors font-medium"
            >
              Event Details
            </button>
            <button
              onClick={() => scrollToSection('route-map')}
              className="text-gray-700 hover:text-[#D84315] transition-colors font-medium"
            >
              Route Map
            </button>
            <button
              onClick={() => scrollToSection('registration')}
              className="bg-[#D84315] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#BF360C] transition-all transform hover:scale-105 shadow-lg"
            >
              Register Now
            </button>
          </div>

          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-gray-700 hover:text-[#D84315] transition-colors font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('event-details')}
              className="block w-full text-left text-gray-700 hover:text-[#D84315] transition-colors font-medium py-2"
            >
              Event Details
            </button>
            <button
              onClick={() => scrollToSection('route-map')}
              className="block w-full text-left text-gray-700 hover:text-[#D84315] transition-colors font-medium py-2"
            >
              Route Map
            </button>
            <button
              onClick={() => scrollToSection('registration')}
              className="block w-full bg-[#D84315] text-white px-6 py-3 rounded-full font-bold hover:bg-[#BF360C] transition-all text-center shadow-lg"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
