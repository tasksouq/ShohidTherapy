import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (heroSection) {
      observer.observe(heroSection);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="font-playfair text-xl font-semibold text-text">
              Therapy with Shohid
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-inter text-text/80 hover:text-text transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              {!isHeroVisible && (
                <button 
                  onClick={() => window.open('https://calendly.com/shohid-wpkt/30min', '_blank')}
                  className="bg-primary hover:bg-primary-dark text-text px-6 py-2 rounded-lg transition-colors duration-200 font-inter"
                >
                  Book Consultation
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-text/80 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4 animate-fade-in">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-inter text-text/80 hover:text-text transition-colors duration-200 px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {!isHeroVisible && (
                <button 
                  onClick={() => window.open('https://calendly.com/shohid-wpkt/30min', '_blank')}
                  className="bg-primary hover:bg-primary-dark text-text px-6 py-2 rounded-lg transition-colors duration-200 font-inter mx-4"
                >
                  Book Consultation
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;