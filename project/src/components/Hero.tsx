import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-25T06:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isExpired: false,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/hero-background.jpg")',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#D84315]/75 via-[#F4511E]/70 to-[#1565C0]/75"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-lg leading-tight">
          चिपळूण सायक्लोथॉन 2025
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/95 mb-4">
          (वर्ष 4थे)
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 mb-6">
          Chiplun Cyclothon 2025 (4th Edition)
        </h3>

        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-medium italic">
          "चला अनुभवूया आणि जगूया जुन्या सायकलिंग्च्या आठवणी"
        </p>

        {timeLeft.isExpired ? (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border-2 border-white/30">
            <p className="text-2xl md:text-3xl font-bold text-white">
              Event Completed - See you next year! 🚴‍♂️
            </p>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-white/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Event Starts In</h3>
            <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
              {[
                { value: timeLeft.days, label: 'Days', labelMr: 'दिवस' },
                { value: timeLeft.hours, label: 'Hours', labelMr: 'तास' },
                { value: timeLeft.minutes, label: 'Minutes', labelMr: 'मिनिटे' },
                { value: timeLeft.seconds, label: 'Seconds', labelMr: 'सेकंद' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-2xl">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#D84315] mb-1 sm:mb-2">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-600">{item.labelMr}</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => scrollToSection('registration')}
          className="bg-white text-[#D84315] px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl inline-block mb-12"
        >
          रजिस्टर करा आता! | Register Now!
        </button>

        <button
          onClick={() => scrollToSection('event-details')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
}
