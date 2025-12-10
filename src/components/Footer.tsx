import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div className="text-center md:text-left">
            <img
              src="https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/logo.png"
              alt="Chiplun Cycling Club"
              className="h-20 w-auto mx-auto md:mx-0 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Chiplun Cycling Club</h3>
            <p className="text-gray-400 text-sm mb-4">Established July 2020</p>
            <div className="flex items-start justify-center md:justify-start space-x-2 text-gray-400 text-sm">
              <MapPin size={18} className="flex-shrink-0 mt-1" />
              <span>Chiplun, Maharashtra, India</span>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('event-details')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Event Details
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('route-map')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Route Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('registration')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#1565C0] flex items-center justify-center transition-all transform hover:scale-110"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#D84315] flex items-center justify-center transition-all transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:info@chipluncyclingclub.com"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#2E7D32] flex items-center justify-center transition-all transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Contact us for more information
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2025 Chiplun Cycling Club. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            चिपळूण सायक्लिंग क्लब | Promoting Cycling Culture in Chiplun
          </p>
        </div>
      </div>
    </footer>
  );
}
