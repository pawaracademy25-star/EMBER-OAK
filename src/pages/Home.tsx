import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react';
import { menuItems } from '../data/menu';

const Home = () => {
  const previewItems = menuItems.filter(item => 
    ['c1', 'c5', 'c6', 'cd1', 'b2', 'bk1', 'br1', 'br2'].includes(item.id)
  );

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Interior of Ember & Oak café" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-cream/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-espresso leading-tight mb-6">
            Good coffee.<br />
            <span className="italic text-brand-accent">Slow mornings.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-espresso/80 font-light max-w-lg mb-10 leading-relaxed">
            Specialty coffee, fresh bakes, and unhurried brunches in the heart of the neighbourhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/menu" 
              className="px-8 py-3.5 bg-brand-espresso text-brand-cream text-sm font-medium tracking-widest uppercase hover:bg-brand-accent transition-colors duration-300 text-center"
            >
              View Menu
            </Link>
            <Link 
              to="/reservation" 
              className="px-8 py-3.5 border border-brand-espresso text-brand-espresso text-sm font-medium tracking-widest uppercase hover:bg-brand-stone transition-colors duration-300 text-center"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-24 md:py-32 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-espresso mb-8">Built around good coffee and better company.</h2>
          <p className="text-lg text-brand-espresso/80 font-light leading-loose text-balance">
            Ember & Oak is a neighbourhood café designed for the community. Whether you're stopping by for your morning espresso, finding a quiet corner to work for an hour, meeting an old friend, or settling in for a slow weekend brunch, our doors are open. We believe in taking our time to make things right.
          </p>
        </div>
      </section>

      {/* MENU PREVIEW SECTION */}
      <section className="py-24 bg-brand-stone/30">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-espresso mb-4">A Taste of Our Menu</h2>
              <p className="text-brand-espresso/70 font-light">Carefully sourced. Made fresh daily.</p>
            </div>
            <Link to="/menu" className="group flex items-center text-sm font-medium tracking-widest uppercase text-brand-espresso hover:text-brand-accent transition-colors">
              Full Menu <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {previewItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b border-brand-espresso/10 pb-4">
                <div className="pr-4">
                  <h3 className="text-lg font-medium text-brand-espresso mb-1">{item.name.toUpperCase()}</h3>
                  {item.description && <p className="text-sm text-brand-espresso/70 font-light">{item.description}</p>}
                </div>
                <div className="text-lg text-brand-espresso">₹{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="story" className="py-24 md:py-32 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] md:h-[600px] w-full">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Barista pouring latte art" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-brand-espresso mb-8">Our Story</h2>
              <div className="space-y-6 text-brand-espresso/80 font-light leading-relaxed">
                <p>
                  Ember & Oak was started by two friends who spent years working in hospitality across the country, always searching for the perfect local spot.
                </p>
                <p>
                  We wanted to create a place that combined the exacting standards of a specialty coffee roaster with the unpretentious warmth of your local diner. A place where the food is honest, the coffee is exceptional, and nobody rushes you out the door.
                </p>
                <blockquote className="border-l-2 border-brand-accent pl-6 my-8 italic text-lg text-brand-espresso">
                  "We don't want to change the world. We just want to make your morning slightly better."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-4 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-[400px]">
              <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Coffee pouring into cup" className="w-full h-full object-cover" />
            </div>
            <div className="h-[400px]">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Latte on wooden table" className="w-full h-full object-cover" />
            </div>
            <div className="h-[400px]">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cafe interior" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-2 h-[400px]">
              <img src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80" alt="Brunch spread" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS & REVIEWS SECTION */}
      <section id="events" className="py-24 bg-brand-stone/20">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Events */}
            <div>
              <h2 className="text-3xl font-serif text-brand-espresso mb-10">What's On</h2>
              <div className="space-y-8">
                {[
                  { day: 'SATURDAY', date: 'October 10', title: 'Acoustic Evening', time: '7:00 PM' },
                  { day: 'SUNDAY', date: 'October 18', title: 'Coffee Brewing Workshop', time: '4:00 PM' },
                  { day: 'FRIDAY', date: 'October 23', title: 'Late Night at Ember & Oak', time: '8:00 PM' }
                ].map((event, i) => (
                  <div key={i} className="flex border-b border-brand-espresso/10 pb-6 group cursor-default">
                    <div className="w-32 flex-shrink-0">
                      <div className="text-xs font-semibold tracking-widest text-brand-espresso/60 mb-1">{event.day}</div>
                      <div className="text-sm font-medium text-brand-espresso">{event.date}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-brand-espresso mb-1 group-hover:text-brand-accent transition-colors">{event.title}</h4>
                      <p className="text-sm text-brand-espresso/70">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-3xl font-serif text-brand-espresso mb-10">From the Neighbourhood</h2>
              <div className="space-y-10">
                <blockquote className="space-y-4">
                  <p className="text-lg text-brand-espresso/80 font-light italic">"The flat white is excellent, but honestly the almond croissant is the reason I keep coming back."</p>
                  <footer className="text-sm font-medium text-brand-espresso">— Sarah T.</footer>
                </blockquote>
                <blockquote className="space-y-4">
                  <p className="text-lg text-brand-espresso/80 font-light italic">"Finally a place that understands you don't need loud music to create a good atmosphere. Great spot for getting some reading done."</p>
                  <footer className="text-sm font-medium text-brand-espresso">— Marcus W.</footer>
                </blockquote>
                <blockquote className="space-y-4">
                  <p className="text-lg text-brand-espresso/80 font-light italic">"The shakshuka on a Sunday morning has become our weekend ritual."</p>
                  <footer className="text-sm font-medium text-brand-espresso">— Priya & James</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & VISIT SECTION */}
      <section id="visit" className="py-24 bg-brand-cream border-t border-brand-stone/30">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-espresso mb-4">Visit Us</h2>
            <p className="text-brand-espresso/70 font-light">Walk-ins always welcome. Reservations recommended for weekends.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <MapPin className="w-6 h-6 text-brand-accent mb-4" />
              <h3 className="text-lg font-medium text-brand-espresso mb-2">Location</h3>
              <p className="text-brand-espresso/70 font-light leading-relaxed">
                24 Willow Street<br />
                Pune, Maharashtra
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Clock className="w-6 h-6 text-brand-accent mb-4" />
              <h3 className="text-lg font-medium text-brand-espresso mb-2">Opening Hours</h3>
              <p className="text-brand-espresso/70 font-light leading-relaxed">
                Mon–Fri: 8:00 AM – 10:00 PM<br />
                Sat–Sun: 8:30 AM – 11:00 PM
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Phone className="w-6 h-6 text-brand-accent mb-4" />
              <h3 className="text-lg font-medium text-brand-espresso mb-2">Contact</h3>
              <p className="text-brand-espresso/70 font-light leading-relaxed">
                +91 98765 43210<br />
                hello@emberandoak.demo
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
