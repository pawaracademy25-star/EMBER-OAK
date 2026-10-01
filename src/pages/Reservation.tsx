import { useState } from 'react';

const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 bg-brand-cream min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-lg text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-16 h-16 bg-brand-stone/50 text-brand-espresso rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-brand-espresso mb-4">Table Requested</h1>
          <p className="text-brand-espresso/80 font-light leading-relaxed mb-8">
            Thank you, {formData.name}. We have received your request for a table for {formData.guests} on {new Date(formData.date).toLocaleDateString()} at {formData.time}. 
            <br/><br/>
            We will send a confirmation email to {formData.email} shortly.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 border border-brand-espresso text-brand-espresso text-sm font-medium tracking-widest uppercase hover:bg-brand-stone transition-colors duration-300"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-brand-cream min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-espresso mb-6">Reserve a Table</h1>
          <p className="text-brand-espresso/70 font-light max-w-lg mx-auto leading-relaxed">
            Join us for brunch or reserve a quiet spot for an afternoon coffee. 
            For parties larger than 6, please call us directly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white/50 p-8 md:p-12 border border-brand-stone/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-brand-espresso uppercase tracking-wider">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-brand-stone focus:border-brand-espresso py-2 outline-none transition-colors rounded-none font-light"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-brand-espresso uppercase tracking-wider">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-brand-stone focus:border-brand-espresso py-2 outline-none transition-colors rounded-none font-light"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-brand-espresso uppercase tracking-wider">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-brand-stone focus:border-brand-espresso py-2 outline-none transition-colors rounded-none font-light"
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="guests" className="block text-sm font-medium text-brand-espresso uppercase tracking-wider">Guests</label>
              <select
                id="guests"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-brand-stone focus:border-brand-espresso py-2 outline-none transition-colors rounded-none font-light cursor-pointer appearance-none"
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-brand-espresso uppercase tracking-wider">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-brand-stone focus:border-brand-espresso py-2 outline-none transition-colors rounded-none font-light"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="time" className="block text-sm font-medium text-brand-espresso uppercase tracking-wider">Time</label>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-brand-stone focus:border-brand-espresso py-2 outline-none transition-colors rounded-none font-light cursor-pointer appearance-none"
              >
                <option value="">Select a time</option>
                <option value="08:30">08:30 AM</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="18:00">06:00 PM</option>
                <option value="19:00">07:00 PM</option>
                <option value="20:00">08:00 PM</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="requests" className="block text-sm font-medium text-brand-espresso uppercase tracking-wider">Special Requests (Optional)</label>
            <textarea
              id="requests"
              name="requests"
              rows={3}
              value={formData.requests}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-brand-stone focus:border-brand-espresso py-2 outline-none transition-colors rounded-none font-light resize-none"
              placeholder="Any dietary requirements or special occasions?"
            ></textarea>
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-brand-espresso text-brand-cream text-sm font-medium tracking-widest uppercase hover:bg-brand-accent transition-colors duration-300 w-full md:w-auto"
            >
              Request Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
