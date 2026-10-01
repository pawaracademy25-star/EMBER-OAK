import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/#story' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Events', path: '/#events' },
    { name: 'Visit', path: '/#visit' },
  ];

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-brand-cream/95 backdrop-blur-md border-brand-stone py-4 shadow-sm' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-wide text-brand-espresso z-50">
          EMBER & OAK
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleHashLink(e, link.path)}
              className="text-sm font-medium tracking-wide text-brand-espresso/80 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/reservation"
            className="px-6 py-2.5 bg-brand-espresso text-brand-cream text-sm font-medium tracking-wide hover:bg-brand-accent transition-colors duration-300"
          >
            Reserve a Table
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-espresso z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            'fixed inset-0 bg-brand-cream z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden',
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <nav className="flex flex-col items-center space-y-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleHashLink(e, link.path)}
                className="text-2xl font-serif text-brand-espresso hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservation"
              className="mt-8 px-8 py-3 bg-brand-espresso text-brand-cream text-lg font-medium tracking-wide hover:bg-brand-accent transition-colors duration-300"
            >
              Reserve a Table
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
