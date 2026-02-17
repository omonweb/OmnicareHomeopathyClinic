'use client';
import { useState, useEffect } from 'react';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowLeft,
  FaBars,
  FaTimes,
  FaLeaf,
  FaLaptopMedical // Icon for Online Consult
} from 'react-icons/fa';

// CASE STUDIES DATA
const cases = [
  {
    id: 1,
    title: "Severe Skin Allergy",
    description: "Patient suffered from chronic eczema. Completely cured in 4 months.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Skin",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Treatment",
  },
  {
    id: 2,
    title: "Hair Fall Treatment",
    description: "Significant regrowth and hair density improvement within 8 weeks.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Hair",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Growth",
  },
  {
    id: 3,
    title: "PCOD Management",
    description: "Regulated hormones and improved symptoms in 5 months with natural treatment.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+PCOD",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Recovery",
  },
  {
    id: 4,
    title: "Chronic Migraine",
    description: "Reduced frequency and intensity from daily to once a month.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Migraine",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Relief",
  },
  {
    id: 5,
    title: "Arthritis Pain Relief",
    description: "Joint pain significantly decreased with improved mobility in 6 months.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Arthritis",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Relief",
  },
  {
    id: 6,
    title: "Gastric Issues",
    description: "Completely eliminated acid reflux and digestive problems in 3 months.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Gastric",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Healing",
  },
  {
    id: 7,
    title: "Child Immunity Boost",
    description: "Reduced frequent infections and improved overall health in children.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Immunity",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Health",
  },
  {
    id: 8,
    title: "Thyroid Imbalance",
    description: "Normalized thyroid levels with improved energy and metabolism.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Thyroid",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Balance",
  },
  {
    id: 9,
    title: "Anxiety & Stress",
    description: "Significantly reduced anxiety levels and improved sleep quality.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Stress",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Calm",
  },
  {
    id: 10,
    title: "Allergic Rhinitis",
    description: "Eliminated chronic nasal congestion and seasonal allergies completely.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Allergies",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Relief",
  }
];

export default function Home() {
  const [currentCase, setCurrentCase] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  const nextCase = () => setCurrentCase((prev) => (prev + 1) % cases.length);
  const prevCase = () => setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements((prev) => new Set([...prev, entry.target.id]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-stone-50 text-gray-800 font-sans selection:bg-green-200">

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/97 backdrop-blur-md shadow-sm z-40 border-b border-[#e5e7eb]">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">

          {/* Logo / Name */}
          <div className="flex items-center gap-2 min-w-0">
            <FaLeaf className="text-[#10b981] text-xl md:text-2xl flex-shrink-0" />
            <div className="truncate">
              <span className="font-bold text-base md:text-lg text-[#1f2937] tracking-tight block leading-tight">
                Dr. Richa Singh's
              </span>
              <span className="font-bold text-xs md:text-sm text-[#10b981] tracking-tight block leading-tight">
                Omnicare HomeoClinic
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-[#6b7280]">
            <a href="#about" className="hover:text-[#10b981] transition-smooth text-sm lg:text-base">About</a>
            <a href="#treatments" className="hover:text-[#10b981] transition-smooth text-sm lg:text-base">Treatments</a>
            <a href="#proof" className="hover:text-[#10b981] transition-smooth text-sm lg:text-base">Success Stories</a>
            <a href="#contact" className="hover:text-[#10b981] transition-smooth text-sm lg:text-base">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#10b981] p-2 hover-lift"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#e5e7eb] absolute w-full px-4 py-4 shadow-lg flex flex-col gap-2 animate-slide-in-down" style={{ animationFillMode: 'both' }}>
            {['About', 'Treatments', 'Success Stories', 'Contact'].map((item, idx) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-[#1f2937] py-3 px-2 border-b border-[#e5e7eb] hover:bg-[#d1fae5] rounded transition-smooth hover-lift"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>





      {/* --- ABOUT SECTION --- */}
      <section id="about" className="pt-32 pb-20 px-4 max-w-5xl mx-auto gradient-uniform">
        <div 
          id="about-card"
          data-animate
          className={`bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-smooth glow-card ${
            animatedElements.has('about-card') ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationFillMode: 'both' }}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#d1fae5] via-[#10b981] to-[#059669] rounded-full shrink-0 border-4 border-[#10b981] overflow-hidden flex items-center justify-center card-hover animate-soft-glow">
             {/* REPLACE THIS WITH: <Image src="/doctor.jpg" width={300} height={300} alt="Dr Richa" /> */}
             <span className="text-white font-semibold text-center px-4">Dr. Richa Photo</span>
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">Meet Dr. Richa Singh</h2>
            <p className="text-[#6b7280] leading-relaxed mb-6 text-sm md:text-base">
              A dedicated practitioner with a passion for homeopathic healing. She specializes in 
              identifying the root cause of ailments and treating the patient as a whole.
              Her clinic in Lucknow is known for its compassionate environment and effective results.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-[#d1fae5] text-[#047857] px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover-lift transition-smooth">20+ Years Experience</span>
              <span className="bg-[#a7f3d0] text-[#047857] px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover-lift transition-smooth">Certified Homeopath</span>
            </div>
          </div>
        </div>
      </section>


      {/* --- PROOF OF WORK SLIDER (SUCCESS STORIES) --- */}
      <section id="proof" className="py-20 px-4 gradient-uniform">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="proof-title"
            data-animate
            className={`text-3xl md:text-4xl font-bold text-[#1f2937] mb-4 transition-smooth ${
              animatedElements.has('proof-title') ? 'animate-fade-in-down' : 'opacity-0'
            }`}
            style={{ animationFillMode: 'both' }}
          >
            Patient Transformations
          </h2>
          <p 
            id="proof-subtitle"
            data-animate
            className={`text-[#6b7280] mb-12 transition-smooth ${
              animatedElements.has('proof-subtitle') ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationFillMode: 'both' }}
          >
            Real results from our patients.
          </p>
          
          <div className="bg-white rounded-3xl overflow-hidden border border-[#e5e7eb] relative card-hover glow-card">
            <div className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#1f2937] mb-2">{cases[currentCase].title}</h3>
              <p className="text-[#6b7280] mb-8 italic text-sm md:text-base">"{cases[currentCase].description}"</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold tracking-wide">BEFORE</span>
                  <img src={cases[currentCase].before} alt="Before" className="w-full rounded-xl object-cover h-48 md:h-64 border-2 border-red-50" />
                </div>
                <div className="space-y-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold tracking-wide">AFTER</span>
                  <img src={cases[currentCase].after} alt="After" className="w-full rounded-xl object-cover h-48 md:h-64 border-2 border-green-50" />
                </div>
              </div>
            </div>

            <div className="bg-[#f3f4f6] p-4 flex justify-between items-center border-t border-[#e5e7eb] gap-2">
              <button 
                onClick={prevCase} 
                className="p-2 md:p-3 bg-[#d1fae5] rounded-full shadow-sm hover:shadow-md text-[#10b981] transition-smooth hover-lift"
                aria-label="Previous case"
              >
                <FaArrowLeft size={16} className="md:w-5 md:h-5" />
              </button>
              <div className="flex gap-2">
                {cases.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCase(idx)}
                    className={`h-2 w-2 rounded-full transition-smooth ${idx === currentCase ? 'bg-[#10b981] w-6' : 'bg-[#e5e7eb] hover:bg-[#d1fae5]'}`}
                    aria-label={`Go to case ${idx + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextCase} 
                className="p-2 md:p-3 bg-[#d1fae5] rounded-full shadow-sm hover:shadow-md text-[#10b981] transition-smooth hover-lift"
                aria-label="Next case"
              >
                <FaArrowRight size={16} className="md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* --- TREATMENTS GRID --- */}
      <section id="treatments" className="py-20 px-4 gradient-uniform">
        <h2 
          id="treatments-title"
          data-animate
          className={`text-3xl md:text-4xl font-bold text-center text-[#1f2937] mb-12 transition-smooth ${
            animatedElements.has('treatments-title') ? 'animate-fade-in-down' : 'opacity-0'
          }`}
          style={{ animationFillMode: 'both' }}
        >
          What We Treat
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto px-2">
          {['Skin Allergies', 'Hair Fall', 'PCOD / PCOS', 'Gastric Issues', 'Migraine', 'Arthritis', 'Child Immunity', 'Diabetes Mgmt'].map((item, idx) => (
            <div 
              key={item}
              id={`treatment-${idx}`}
              data-animate
              className={`bg-white p-4 md:p-6 rounded-2xl text-center border border-[#e5e7eb] flex flex-col items-center justify-center aspect-square transition-smooth glow-card ${
                animatedElements.has(`treatment-${idx}`) ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'both' }}
            >
              <FaLeaf className="text-[#10b981] mb-3 text-xl md:text-2xl" />
              <h3 className="font-bold text-[#1f2937] text-xs md:text-sm">{item}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* --- CONTACT SECTION (Updated for Online Consult) --- */}
      <section id="contact" className="py-20 px-4 gradient-primary rounded-t-[3rem] mt-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to feel better?</h2>
          <p className="text-white/95 text-lg">Choose how you want to consult with us.</p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            
            {/* OPTION 1: CLINIC VISIT */}
            <div className="bg-white p-8 md:p-10 rounded-3xl flex-1 card-hover transition-smooth">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#10b981] rounded-full mb-4">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1f2937] mb-4">
                Clinic Visit
              </h3>
              <p className="text-[#6b7280] mb-8 text-sm md:text-base leading-relaxed">
                Dr. Richa Singh's Clinic <br/>
                Lucknow, Uttar Pradesh <br/>
                <span className="text-[#9ca3af]">(Professional Clinic)</span>
              </p>
              
              <a 
                href="https://maps.app.goo.gl/SYtexKEosRbSgAuw8" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contrast px-8 py-4 rounded-full inline-block w-full"
              >
                Get Directions
              </a>
            </div>

            {/* OPTION 2: ONLINE CONSULTATION (New) */}
            <div className="bg-white p-8 md:p-10 rounded-3xl flex-1 card-hover transition-smooth">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#059669] rounded-full mb-4">
                  <FaLaptopMedical className="text-white text-xl" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1f2937] mb-4">
                Online Consult
              </h3>
              <p className="text-[#6b7280] mb-8 text-sm md:text-base leading-relaxed">
                Consult from the comfort of your home <br/> via Video/Audio Call.
              </p>
              
              <a 
                href="https://wa.me/919450064628?text=Hello%20Dr.%20Richa,%20I%20am%20interested%20in%20an%20ONLINE%20consultation." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contrast-warm px-8 py-4 rounded-full inline-block w-full"
              >
                Chat for Online Consult
              </a>
            </div>

          </div>

          <div className="text-white/95 pt-8 border-t border-white/20 mt-8">
            <p className="text-sm">Call for appointment</p>
            <p className="text-2xl md:text-3xl font-bold text-white mt-2">+91 94500 64628</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1f2937] text-[#d1fae5] py-10 px-4 text-center text-sm">
        <p className="mb-4">© {new Date().getFullYear()} Dr. Richa Singh's Clinic. All rights reserved.</p>
        <p className="text-[#a7f3d0] text-xs">Trusted Homeopathy Care in Lucknow</p>
      </footer>

      {/* --- FLOATING BUTTONS --- */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50">
        {/* WhatsApp Button (General) */}
        <a
          href="https://wa.me/919450064628?text=Hello%20Dr.%20Richa,%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-smooth flex items-center justify-center hover-lift animate-pulse-light"
          aria-label="Chat on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={24} className="sm:w-7 sm:h-7" />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919450064628" 
          className="bg-[#10b981] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-smooth flex items-center justify-center hover-lift"
          aria-label="Call Doctor"
          title="Call Dr. Richa Singh"
        >
          <FaPhoneAlt size={20} className="sm:w-6 sm:h-6" />
        </a>
      </div>

    </main>
  );
}
