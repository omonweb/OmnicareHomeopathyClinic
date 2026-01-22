'use client';
import { useState } from 'react';
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
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Treatment",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Recovery",
  },
  {
    id: 2,
    title: "Hair Fall Treatment",
    description: "Significant regrowth and hair density improvement within 8 weeks.",
    before: "https://placehold.co/400x300/e2e8f0/475569?text=Before+Scalp",
    after: "https://placehold.co/400x300/dcfce7/166534?text=After+Regrowth",
  }
];

export default function Home() {
  const [currentCase, setCurrentCase] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextCase = () => setCurrentCase((prev) => (prev + 1) % cases.length);
  const prevCase = () => setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="min-h-screen bg-stone-50 text-gray-800 font-sans selection:bg-green-200">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-40 border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <FaLeaf className="text-green-600 text-xl" />
            <span className="font-bold text-xl text-green-900 tracking-tight">
              Dr. Richa Singh's Clinic
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-gray-600">
            <a href="#home" className="hover:text-green-600 transition">Home</a>
            <a href="#about" className="hover:text-green-600 transition">About</a>
            <a href="#treatments" className="hover:text-green-600 transition">Treatments</a>
            <a href="#proof" className="hover:text-green-600 transition">Success Stories</a>
            <a href="#contact" className="hover:text-green-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-green-800 p-2">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-green-100 absolute w-full px-4 py-6 shadow-lg flex flex-col gap-4">
            {['Home', 'About', 'Treatments', 'Proof', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-700 py-2 border-b border-gray-100"
              >
                {item === 'Proof' ? 'Success Stories' : item}
              </a>
            ))}
          </div>
        )}
      </nav>


      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-4 flex flex-col items-center text-center bg-linear-to-b from-green-50 to-stone-50">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-4">
            📍 Best Homeopathy in Lucknow
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
            Healing Naturally, <br/> Without Side Effects.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Trusted by families for over 20 years. <strong>Dr. Richa Singh</strong> provides holistic 
            treatments for chronic diseases, skin issues, and allergies with a personalized approach.
          </p>
          
          {/* BUTTONS: VISIT vs ONLINE */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a href="#contact" className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-green-700 transition w-full sm:w-auto">
              Book Clinic Visit
            </a>
            
            {/* NEW ONLINE CONSULT BUTTON */}
            <a 
              href="https://wa.me/919450064628?text=Hello%20Dr.%20Richa,%20I%20am%20interested%20in%20an%20ONLINE%20consultation."
              target="_blank"
              className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-teal-700 transition w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <FaLaptopMedical /> Consult Online
            </a>
          </div>
        </div>
      </section>


      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-50 flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-stone-200 rounded-full shrink-0 border-4 border-green-100 overflow-hidden flex items-center justify-center">
             {/* REPLACE THIS WITH: <Image src="/doctor.jpg" width={300} height={300} alt="Dr Richa" /> */}
             <span className="text-gray-400 font-semibold">Dr. Richa Photo</span>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Meet Dr. Richa Singh</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A dedicated practitioner with a passion for homeopathic healing. She specializes in 
              identifying the root cause of ailments and treating the patient as a whole.
              Her clinic in Lucknow is known for its compassionate environment and effective results.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">20+ Years Experience</span>
              <span className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">Certified Homeopath</span>
            </div>
          </div>
        </div>
      </section>


      {/* --- TREATMENTS GRID --- */}
      <section id="treatments" className="py-20 px-4 bg-green-50/50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
          What We Treat
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {['Skin Allergies', 'Hair Fall', 'PCOD / PCOS', 'Gastric Issues', 'Migraine', 'Arthritis', 'Child Immunity', 'Diabetes Mgmt'].map((item) => (
            <div key={item} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border border-green-100 flex flex-col items-center justify-center aspect-square">
              <FaLeaf className="text-green-300 mb-3 text-2xl" />
              <h3 className="font-bold text-gray-700">{item}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* --- PROOF OF WORK SLIDER --- */}
      <section id="proof" className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Patient Transformations</h2>
          <p className="text-gray-500 mb-12">Real results from our patients.</p>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
            <div className="p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{cases[currentCase].title}</h3>
              <p className="text-gray-500 mb-8 italic">"{cases[currentCase].description}"</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold tracking-wide">BEFORE</span>
                  <img src={cases[currentCase].before} alt="Before" className="w-full rounded-xl object-cover h-64 border-2 border-red-50" />
                </div>
                <div className="space-y-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold tracking-wide">AFTER</span>
                  <img src={cases[currentCase].after} alt="After" className="w-full rounded-xl object-cover h-64 border-2 border-green-50" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 flex justify-between items-center border-t border-gray-100">
              <button onClick={prevCase} className="p-3 bg-white rounded-full shadow hover:bg-green-50 text-green-700 transition">
                <FaArrowLeft />
              </button>
              <div className="flex gap-2">
                {cases.map((_, idx) => (
                  <div key={idx} className={`h-2 w-2 rounded-full ${idx === currentCase ? 'bg-green-600' : 'bg-gray-300'}`} />
                ))}
              </div>
              <button onClick={nextCase} className="p-3 bg-white rounded-full shadow hover:bg-green-50 text-green-700 transition">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* --- CONTACT SECTION (Updated for Online Consult) --- */}
      <section id="contact" className="py-20 px-4 bg-green-900 text-white rounded-t-[3rem] mt-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to feel better?</h2>
          <p className="text-green-100 text-lg">Choose how you want to consult with us.</p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            
            {/* OPTION 1: CLINIC VISIT */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 flex-1">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                <FaMapMarkerAlt /> Clinic Visit
              </h3>
              <p className="text-green-50 mb-6 text-sm">
                Dr. Richa Singh's Clinic <br/>
                Lucknow, Uttar Pradesh <br/>
                <span className="opacity-80">(Near Landmark)</span>
              </p>
              
              <a 
                /* 🔴 PASTE REAL MAP LINK HERE */
                href="https://www.google.com/maps/search/Dr.+Richa+Singh+Homeopathy+Lucknow/" 
                target="_blank"
                className="bg-white text-green-900 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition inline-block w-full"
              >
                Get Directions
              </a>
            </div>

            {/* OPTION 2: ONLINE CONSULTATION (New) */}
            <div className="bg-teal-900/40 backdrop-blur-sm p-8 rounded-3xl border border-teal-500/30 flex-1">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                <FaLaptopMedical /> Online Consult
              </h3>
              <p className="text-green-50 mb-6 text-sm">
                Consult from the comfort of your home <br/> via Video/Audio Call.
              </p>
              
              <a 
                href="https://wa.me/919450064628?text=Hello%20Dr.%20Richa,%20I%20am%20interested%20in%20an%20ONLINE%20consultation." 
                target="_blank"
                className="bg-teal-500 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-600 transition inline-block w-full"
              >
                Chat for Online Consult
              </a>
            </div>

          </div>

          <div className="text-green-200 pt-8 border-t border-green-800/50 mt-8">
            <p className="text-sm">Call for appointment</p>
            <p className="text-2xl font-bold text-white mt-2">+91 94500 64628</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-green-950 text-green-400 py-10 px-4 text-center text-sm">
        <p className="mb-4">© {new Date().getFullYear()} Dr. Richa Singh. All rights reserved.</p>
      </footer>

      {/* --- FLOATING BUTTONS --- */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp Button (General) */}
        <a
          href="https://wa.me/919450064628?text=Hello%20Dr.%20Richa,%20I%20would%20like%20to%20book%20an%20appointment." 
          target="_blank"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919450064628" 
          className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition flex items-center justify-center"
          aria-label="Call Doctor"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>

    </main>
  );
}