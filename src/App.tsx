import { 
  Code2, 
  Search, 
  ShoppingCart, 
  Globe, 
  CreditCard, 
  Megaphone, 
  Cpu,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const services = [
  {
    title: "Web App Development",
    description: "Custom, scalable web applications built with modern frameworks for optimal performance and user experience.",
    icon: Code2,
    color: "text-blue-400"
  },
  {
    title: "SEO & Optimization",
    description: "Boost your search engine rankings and drive organic traffic with our data-driven optimization strategies.",
    icon: Search,
    color: "text-emerald-400"
  },
  {
    title: "E-commerce Solutions",
    description: "Robust online stores with seamless checkout experiences, inventory management, and secure payments.",
    icon: ShoppingCart,
    color: "text-purple-400"
  },
  {
    title: "Domain & Hosting",
    description: "Reliable, high-speed hosting and domain management to keep your business online 24/7.",
    icon: Globe,
    color: "text-orange-400"
  },
  {
    title: "Payment Integration",
    description: "Secure and flexible payment gateway integrations for global transactions and local preferences.",
    icon: CreditCard,
    color: "text-pink-400"
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive marketing campaigns across social media, search, and email to grow your brand.",
    icon: Megaphone,
    color: "text-yellow-400"
  },
  {
    title: "AI Automation",
    description: "Streamline your workflows and enhance productivity with custom AI-powered automation tools.",
    icon: Cpu,
    color: "text-cyan-400"
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight">NextLoop<span className="text-blue-400">IT</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t-0 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Services', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-slate-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-semibold">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold tracking-wider uppercase text-blue-400 mb-6">
            Launching Today • April 6, 2026
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
            Empowering Your Digital <br />
            <span className="text-gradient">Future with NextLoop IT</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We deliver cutting-edge technology solutions to help your business thrive in the digital age. From custom apps to AI automation, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              View Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Our Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive IT services tailored to your business needs. We combine innovation with reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Why NextLoop IT?</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Founded on April 6, 2026, NextLoop IT is a forward-thinking technology partner dedicated to bridging the gap between complex challenges and elegant digital solutions.
              </p>
              <div className="space-y-4">
                {[
                  "Client-centric approach to every project",
                  "Expert team with deep industry knowledge",
                  "Cutting-edge tech stack for all solutions",
                  "Reliable support and maintenance"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="aspect-square rounded-3xl glass p-4 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/tech-office/800/800" 
                  alt="Tech Office" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl z-20 animate-bounce-slow">
                <div className="text-3xl font-bold text-blue-400">100%</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Commitment</div>
              </div>
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-blue-600 p-12 text-white">
            <h2 className="text-3xl font-display font-bold mb-6">Let's Talk</h2>
            <p className="text-blue-100 mb-10">
              Ready to start your next project? Reach out to us and let's build something amazing together.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>hello@nextloopit.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Silicon Valley, CA</span>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Full Name</label>
                <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Email Address</label>
                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-400">Service Interested In</label>
                <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option>Web App Development</option>
                  <option>SEO & Optimization</option>
                  <option>AI Automation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="md:col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded flex items-center justify-center">
              <Code2 className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">NextLoop<span className="text-blue-400">IT</span></span>
          </div>
          
          <div className="flex items-center gap-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-slate-500 text-sm">
            © 2026 NextLoop IT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
