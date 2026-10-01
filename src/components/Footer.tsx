import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-espresso text-brand-stone py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif text-brand-cream mb-4">EMBER & OAK</h3>
            <p className="text-brand-stone/80 font-light leading-relaxed max-w-xs">
              Good coffee. Slow mornings. A neighbourhood café focused on specialty coffee and unhurried brunches.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-brand-cream uppercase mb-6">Visit</h4>
            <address className="not-italic text-brand-stone/80 font-light leading-loose">
              24 Willow Street<br />
              Pune, Maharashtra<br />
              +91 98765 43210
            </address>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-brand-cream uppercase mb-6">Hours</h4>
            <div className="text-brand-stone/80 font-light leading-loose">
              <p>Mon–Fri: 8:00 AM – 10:00 PM</p>
              <p>Sat–Sun: 8:30 AM – 11:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-brand-cream uppercase mb-6">Links</h4>
            <nav className="flex flex-col space-y-3 text-brand-stone/80 font-light">
              <Link to="/menu" className="hover:text-brand-cream transition-colors w-fit">Menu</Link>
              <Link to="/reservation" className="hover:text-brand-cream transition-colors w-fit">Reservations</Link>
              <a href="#" className="hover:text-brand-cream transition-colors w-fit">Instagram</a>
              <a href="#" className="hover:text-brand-cream transition-colors w-fit">Privacy & Terms</a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-stone/20 flex flex-col md:flex-row justify-between items-center text-sm text-brand-stone/60 font-light">
          <p>&copy; {new Date().getFullYear()} Ember & Oak. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Fictional Demo Website</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
