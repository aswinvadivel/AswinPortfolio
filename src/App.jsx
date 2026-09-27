import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Cloud,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  FileText,
  Terminal,
  Cpu,
  Globe,
  Database,
  ArrowUpRight,
  Award,
  Briefcase,
  GraduationCap,
  Layers,
  BookOpen,
  Network,
  CheckCircle2,
  Send,
  Loader2
} from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const icons = [
    { Icon: Code, color: "text-primary" },
    { Icon: Cloud, color: "text-accent" },
    { Icon: Database, color: "text-primary" },
    { Icon: Terminal, color: "text-accent" },
    { Icon: Cpu, color: "text-primary" },
    { Icon: Globe, color: "text-accent" }
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-site-bg overflow-hidden"
    >
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black text-white mb-4"
        >
          ASWIN <span className="text-primary">VADIVEL</span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-primary mx-auto"
          onAnimationComplete={onComplete}
        />
      </div>

      {/* Flying Background Icons */}
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            opacity: 0
          }}
          animate={{
            x: [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400],
            y: [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute ${item.color} pointer-events-none`}
        >
          <item.Icon className="w-12 h-12" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeCert, setActiveCert] = useState(null);
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false, message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch("https://formsubmit.co/ajax/vaswin1220@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();
      if (response.ok && data.success !== "false") {
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Your message has been sent directly to vaswin1220@gmail.com! Aswin will respond to your email shortly.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('API submission error');
      }
    } catch (err) {
      // Fallback: direct mailto trigger with pre-filled content
      window.location.href = `mailto:vaswin1220@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Your message has been routed to vaswin1220@gmail.com. Thank you!'
      });
      setFormData({ name: '', email: '', message: '' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const skillCategories = [
    {
      title: 'Backend & Core',
      skills: ['Java Programming', 'Spring Boot', 'REST APIs', 'Software Development Fundamentals'],
      icon: <Terminal className="w-6 h-6 text-primary" />
    },
    {
      title: 'Web & Front-End',
      skills: ['Full-Stack Development', 'HTML5', 'CSS3', 'JavaScript', 'React Basics'],
      icon: <Code className="w-6 h-6 text-accent" />
    },
    {
      title: 'Database & Cloud',
      skills: ['MySQL', 'MongoDB Basics', 'Basic Cloud / IT Concepts'],
      icon: <Database className="w-6 h-6 text-primary" />
    },
    {
      title: 'Networking & Systems',
      skills: ['Networking Fundamentals', 'IT Infrastructure Basics'],
      icon: <Network className="w-6 h-6 text-accent" />
    }
  ];

  const educationData = [
    {
      institution: 'Velammal Engineering College',
      degree: 'B.Tech – Information Technology',
      duration: '2022 – 2026',
      metricLabel: 'CGPA',
      metricValue: '7.77',
      description: 'Core focus on Software Engineering, Information Technology, Data Structures, Web Development, and Database Systems.',
      icon: <GraduationCap className="w-8 h-8 text-primary" />
    },
    {
      institution: 'AKT Matric Higher Secondary School',
      degree: 'Higher Secondary School',
      duration: 'Completed',
      metricLabel: 'Percentage',
      metricValue: '86.5%',
      description: 'Strong academic foundation with major emphasis on Mathematics, Physics, Chemistry and Biology.',
      icon: <BookOpen className="w-8 h-8 text-accent" />
    }
  ];

  const certificationsData = [
    {
      title: "PJT – Fresher GET Foundation Training",
      provider: 'HCLTech Onboarding',
      description: 'Official HCLTech Certificate of Completion (Certificate No. 727450) awarded to Aswin V for successfully completing the PJT Fresher GET Foundation Training.',
      link: 'pjet-certificate.pdf',
      badge: 'HCLTech Certified',
      color: 'border-primary/30 text-primary',
      isExternal: false
    },
    {
      title: 'NullClass Certification',
      provider: 'NullClass',
      description: 'Full-Stack Web Development certification focusing on hands-on project creation, backend integration, and interactive user interfaces.',
      link: 'nullclass-certificate.pdf',
      badge: 'Full-Stack Dev',
      color: 'border-accent/30 text-accent',
      isExternal: false
    },
    {
      title: 'AcmeGrade Certification',
      provider: 'AcmeGrade',
      description: 'Cloud Infrastructure & AWS fundamental concepts certification focusing on deployment, cloud services, and system architectures.',
      link: 'acmegrade-certificate.pdf',
      badge: 'Cloud Concepts',
      color: 'border-indigo-400/30 text-indigo-400',
      isExternal: false
    }
  ];

  const projects = [
    {
      title: 'BookStore',
      description: 'A premium e-commerce platform for book lovers, featuring a sleek UI, real-time search, and secure checkout integration.',
      image: 'bookstore.png',
      link: 'https://github.com/aswinvadivel/BookStore',
      tags: ['React', 'Spring Boot', 'Tailwind']
    },
    {
      title: 'Automatic SystemDesign Generator',
      description: 'An advanced tool that automatically generates complex system architecture diagrams and cloud infrastructure plans.',
      image: 'system_design.png',
      link: 'https://github.com/aswinvadivel/Automatic_SystemDesign_Generator',
      tags: ['Java', 'Cloud Arch', 'Automation']
    },
    {
      title: 'ASGO LINKS',
      description: 'Intelligent URL shortener using Spring Boot backend and MySQL database for high efficiency and analytics.',
      image: 'url_shortener.png',
      link: 'https://github.com/aswinvadivel/URL-SHORTNER',
      tags: ['Spring Boot', 'MySQL', 'Analytics']
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setTimeout(() => setLoading(false), 500)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-site-bg text-site-text selection:bg-primary/20 ${loading ? 'overflow-hidden' : ''}`}>
        {/* Navigation Bar */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <motion.a
              href="#home"
              className="text-2xl font-black text-site-text tracking-tighter"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              ASWIN <span className="text-primary">VADIVEL</span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-black uppercase tracking-widest text-site-text/70 hover:text-primary transition-all relative group py-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            <button className="lg:hidden text-site-text p-2 rounded-lg bg-white/5 border border-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Nav Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-site-bg/95 backdrop-blur-2xl border-b border-white/10"
              >
                <div className="flex flex-col p-8 space-y-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-black text-site-text uppercase tracking-widest hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-40 md:pt-48 pb-28 px-6 relative overflow-hidden">
          {/* Ambient Background Photo Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <img
              src="aswin_photo.png"
              alt=""
              className="absolute -right-20 top-0 w-full max-w-4xl h-full object-cover opacity-15 hero-bg-photo-ambient"
            />
          </div>

          {/* Ambient Lighting Background Blobs */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/15 blur-[130px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/15 blur-[130px] rounded-full animate-pulse delay-1000"></div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* Left Content */}
            <div className="lg:w-7/12 text-center lg:text-left">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-black text-xs uppercase tracking-[0.25em] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                Graduate Engineer Trainee @ HCLTech
              </motion.div>

              <motion.h1
                className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black text-site-text mb-6 leading-[1.05] tracking-tighter"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                ASWIN <span className="heading-gradient">VADIVEL</span>
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl font-bold text-accent mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                IT Fresher | Graduate Engineer Trainee at HCLTech | Java & Full-Stack Enthusiast
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-site-text/70 mb-10 max-w-2xl leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Joined HCLTech as a Graduate Engineer Trainee and currently building my skills across technology, software development, and IT.
                Passionate about Java programming, Spring Boot, REST APIs, and scalable web solutions.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-5 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="ASWIN_V.pdf"
                  className="btn-primary flex items-center gap-3 text-base font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-primary/20"
                  download
                >
                  <FileText className="w-5 h-5" /> Download Resume
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/aswin-vadivel-4758b5257"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 border border-white/10 text-site-text rounded-2xl hover:bg-primary hover:text-site-bg hover:border-transparent transition-all shadow-xl active:scale-95"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/aswinvadivel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 border border-white/10 text-site-text rounded-2xl hover:bg-accent hover:text-site-bg hover:border-transparent transition-all shadow-xl active:scale-95"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Photo Visual with Blended Background */}
            <motion.div
              className="lg:w-5/12 w-full max-w-md relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glow backdrop behind photo */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 to-accent/30 blur-[80px] rounded-full"></div>

              {/* Photo Card with Dark Vignette Blending */}
              <div className="relative z-10 p-3 sm:p-4 border border-white/15 rounded-[42px] bg-bg-card/40 backdrop-blur-2xl shadow-2xl overflow-hidden group">
                <div className="relative w-full h-[480px] sm:h-[530px] rounded-[34px] overflow-hidden hero-photo-container">
                  <img
                    src="aswin_photo.png"
                    alt="Aswin Vadivel - Graduate Engineer Trainee"
                    className="w-full h-full object-cover object-[center_28%] hero-photo-blend group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 hero-photo-overlay pointer-events-none"></div>
                </div>
              </div>

              {/* Floating Status Pill */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-accent text-site-bg px-6 py-3 rounded-2xl shadow-2xl font-black text-xs uppercase tracking-widest animate-float flex items-center gap-2 border border-white/20">
                <CheckCircle2 className="w-4 h-4" /> B.Tech IT | HCLTech GET
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-bg-card/20 relative border-y border-white/5">
          <div className="container mx-auto">
            <motion.div className="text-center mb-16" {...fadeIn}>
              <div className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3">Professional Milestones</div>
              <h2 className="text-4xl sm:text-5xl font-black text-site-text uppercase tracking-tighter">
                Career <span className="heading-gradient italic">Update</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                className="glass p-8 sm:p-12 rounded-[36px] relative overflow-hidden group border border-primary/20 hover:border-primary/40 transition-all shadow-2xl"
                {...fadeIn}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 text-primary group-hover:opacity-20 transition-opacity">
                  <Briefcase className="w-40 h-40" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <span className="px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-black rounded-full uppercase tracking-wider inline-block mb-3">
                        Professional Status: Joined HCLTech
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">HCLTech</h3>
                      <div className="text-xl font-bold text-accent mt-1">Graduate Engineer Trainee</div>
                    </div>
                    <div className="text-right">
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-site-text/70 inline-block">
                        Present
                      </span>
                    </div>
                  </div>

                  <p className="text-site-text/80 text-base sm:text-lg leading-relaxed font-medium max-w-2xl">
                    Joined HCLTech as a Graduate Engineer Trainee and currently building my skills across technology, software development, and IT. Learning and developing professionally within the organization.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-28 px-6 relative overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            {/* Visual Column with Suit Photo */}
            <motion.div className="lg:w-5/12 w-full relative" {...fadeIn}>
              {/* Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 blur-[70px] rounded-full pointer-events-none"></div>

              {/* Photo Frame Card */}
              <div className="relative z-10 p-3.5 sm:p-4 rounded-[42px] glass border border-white/15 shadow-2xl overflow-hidden group">
                <div className="relative w-full h-[520px] sm:h-[560px] rounded-[34px] overflow-hidden bg-bg-card/80">
                  <img
                    src="aswin_photo_suit_old.png"
                    alt="Aswin Vadivel - Formal Suit Portrait"
                    className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Bottom Vignette & Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-site-bg/95 via-site-bg/15 to-transparent pointer-events-none"></div>

                  {/* Bottom Info Overlay inside the Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-site-bg/90 backdrop-blur-md border border-white/15 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-black text-primary uppercase tracking-widest">Formal Profile</div>
                        <div className="text-base sm:text-lg font-black text-white">Aswin Vadivel</div>
                      </div>
                      <div className="px-3 py-1.5 bg-accent/15 border border-accent/30 rounded-xl text-accent font-bold text-xs flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4" /> B.Tech IT Graduate
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Pill */}
              <div className="absolute -top-3 -right-3 z-20 bg-primary text-site-bg px-5 py-2.5 rounded-2xl shadow-xl font-black text-xs uppercase tracking-wider animate-float flex items-center gap-2 border border-white/20">
                <CheckCircle2 className="w-4 h-4" /> Software Engineer
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div className="lg:w-7/12" {...fadeIn}>
              <div className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Background & Skillset</div>
              <h2 className="text-4xl sm:text-5xl font-black mb-8 text-site-text leading-tight tracking-tighter">
                Driven IT Graduate <br />
                <span className="heading-gradient">Continuous Learner.</span>
              </h2>
              <p className="text-base sm:text-lg text-site-text/70 leading-relaxed mb-10 font-medium">
                I am an Information Technology graduate who completed my B.Tech at Velammal Engineering College. Interested in software development, Java full-stack technologies, REST APIs, database management, networking fundamentals, and continuously learning new technologies to build efficient digital solutions.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      {cat.icon}
                      <h4 className="text-base font-bold text-white tracking-tight">{cat.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {cat.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="text-xs font-semibold text-site-text/70 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-28 px-6 bg-bg-card/20 relative border-t border-white/5">
          <div className="container mx-auto">
            <motion.div className="text-center mb-20" {...fadeIn}>
              <div className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3">Academic Foundations</div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6 text-site-text uppercase tracking-tighter">
                Education <span className="heading-gradient italic">Timeline</span>
              </h2>
              <p className="text-base text-site-text/60 max-w-xl mx-auto font-medium">
                Verified educational qualification and academic performance metrics.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {educationData.map((edu, i) => (
                <motion.div
                  key={i}
                  className="glass p-8 sm:p-10 rounded-[36px] flex flex-col md:flex-row gap-8 items-start md:items-center justify-between border border-white/10 hover:border-primary/30 transition-all"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-16 h-16 bg-primary/10 border border-primary/20 text-primary rounded-2xl flex items-center justify-center shrink-0">
                      {edu.icon}
                    </div>
                    <div>
                      <div className="text-xs font-black text-primary uppercase tracking-widest mb-1">{edu.duration}</div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{edu.institution}</h3>
                      <div className="text-lg font-bold text-accent mt-1 mb-3">{edu.degree}</div>
                      <p className="text-site-text/60 text-sm font-medium leading-relaxed max-w-xl">{edu.description}</p>
                    </div>
                  </div>

                  <div className="shrink-0 p-5 bg-white/5 border border-white/10 rounded-2xl text-center min-w-[140px] w-full md:w-auto">
                    <div className="text-xs font-bold text-site-text/50 uppercase tracking-wider">{edu.metricLabel}</div>
                    <div className="text-3xl font-black text-primary mt-1">{edu.metricValue}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section (Directly after Education) */}
        <section id="certifications" className="py-28 px-6 relative">
          <div className="container mx-auto">
            <motion.div className="text-center mb-20" {...fadeIn}>
              <div className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3">Professional Credentials</div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6 text-site-text uppercase tracking-tighter">
                Certifications & <span className="heading-gradient italic">Courses</span>
              </h2>
              <p className="text-base text-site-text/60 max-w-xl mx-auto font-medium">
                Verified training and certifications completed during academic and professional onboarding.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {certificationsData.map((cert, i) => (
                <motion.div
                  key={i}
                  className="glass p-8 rounded-[32px] flex flex-col justify-between border border-white/10 hover:border-primary/30 transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 bg-white/5 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                        <Award className="w-8 h-8" />
                      </div>
                      <span className={`px-3 py-1 bg-white/5 border rounded-full text-[11px] font-black uppercase tracking-wider ${cert.color}`}>
                        {cert.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white mb-2 tracking-tight">{cert.title}</h3>
                    <div className="text-xs font-bold text-accent mb-4 uppercase tracking-wider">{cert.provider}</div>
                    <p className="text-site-text/60 text-sm leading-relaxed mb-8 font-medium">
                      {cert.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (cert.isExternal) {
                        window.open(cert.link, '_blank', 'noopener,noreferrer');
                      } else {
                        setActiveCert(cert);
                      }
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-primary text-site-bg hover:bg-accent transition-all text-sm shadow-lg cursor-pointer active:scale-95"
                  >
                    View Certificate <ExternalLink className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="portfolio" className="py-28 px-6 bg-bg-card/20 border-t border-white/5">
          <div className="container mx-auto">
            <motion.div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6" {...fadeIn}>
              <div>
                <div className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3">College Projects</div>
                <h2 className="text-4xl sm:text-5xl font-black text-site-text uppercase tracking-tighter">
                  Featured <span className="heading-gradient italic">Repositories</span>
                </h2>
              </div>
              <a
                href="https://github.com/aswinvadivel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:text-accent transition-colors"
              >
                GitHub Profile <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  className="group glass rounded-[36px] overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between"
                  variants={fadeIn}
                >
                  <div>
                    {/* Image Container */}
                    <div className="h-60 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-site-bg via-site-bg/20 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{project.title}</h3>
                      <p className="text-site-text/70 text-sm leading-relaxed mb-6 font-medium">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/5 text-primary text-[10px] font-black rounded-lg uppercase tracking-wider border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-8 pb-8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 py-3.5 bg-white/5 border border-white/10 hover:bg-primary hover:text-site-bg hover:border-transparent text-white rounded-xl font-bold transition-all text-sm shadow-md"
                    >
                      <Github className="w-4 h-4" /> View on GitHub
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <motion.div className="lg:w-5/12 w-full" {...fadeIn}>
                <div className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Get In Touch</div>
                <h2 className="text-5xl font-black mb-8 text-site-text leading-tight tracking-tighter">
                  Let's <span className="heading-gradient">Connect.</span>
                </h2>
                <p className="text-site-text/70 text-base leading-relaxed mb-10 font-medium">
                  Feel free to reach out for professional inquiries, technology discussions, or networking opportunities.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-2xl shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-site-text/40 uppercase tracking-wider">Email Address</div>
                      <a href="mailto:vaswin1220@gmail.com" className="text-lg font-bold text-white hover:text-primary transition-colors">
                        vaswin1220@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-accent/10 border border-accent/20 text-accent flex items-center justify-center rounded-2xl shrink-0">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-site-text/40 uppercase tracking-wider">LinkedIn Profile</div>
                      <a href="https://www.linkedin.com/in/aswin-vadivel-4758b5257" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-accent transition-colors">
                        aswin-vadivel-4758b5257
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-2xl shrink-0">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-site-text/40 uppercase tracking-wider">GitHub Profile</div>
                      <a href="https://github.com/aswinvadivel" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-primary transition-colors">
                        github.com/aswinvadivel
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Form Container */}
              <motion.div className="lg:w-7/12 w-full glass p-8 sm:p-12 rounded-[40px] relative border border-white/10" {...fadeIn}>
                {formStatus.success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 sm:p-10 rounded-3xl bg-primary/10 border border-primary/30 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white">Message Sent!</h3>
                    <p className="text-site-text/80 text-sm leading-relaxed max-w-md mx-auto font-medium">
                      {formStatus.message}
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormStatus({ loading: false, success: false, error: false, message: '' })}
                      className="mt-4 px-6 py-3 bg-primary text-site-bg rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-accent transition-all cursor-pointer shadow-lg active:scale-95"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-site-text/60 uppercase tracking-wider ml-1">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          required
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-site-text placeholder:text-site-text/30 focus:border-primary outline-none font-medium transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-site-text/60 uppercase tracking-wider ml-1">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-site-text placeholder:text-site-text/30 focus:border-accent outline-none font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-site-text/60 uppercase tracking-wider ml-1">Message</label>
                      <textarea
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-site-text placeholder:text-site-text/30 focus:border-primary outline-none font-medium transition-all resize-none"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={formStatus.loading}
                      className="w-full bg-primary text-site-bg text-base font-black py-4 rounded-2xl uppercase tracking-widest shadow-xl hover:bg-accent transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {formStatus.loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> Sending to vaswin1220@gmail.com...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-site-bg border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h2 className="text-3xl font-black tracking-tighter text-white">
                  ASWIN <span className="text-primary">VADIVEL</span>
                </h2>
                <p className="text-xs font-semibold text-site-text/50 mt-2">
                  IT Fresher | Graduate Engineer Trainee at HCLTech
                </p>
              </div>

              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/aswin-vadivel-4758b5257" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-primary hover:text-site-bg transition-all text-site-text">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/aswinvadivel" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-accent hover:text-site-bg transition-all text-site-text">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:vaswin1220@gmail.com" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-primary hover:text-site-bg transition-all text-site-text">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center text-xs text-site-text/40 font-medium mt-12 pt-8 border-t border-white/5">
              © {new Date().getFullYear()} Aswin Vadivel. All rights reserved.
            </div>
          </div>
        </footer>
      </div>

      {/* Interactive Certificate Viewer Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[88vh] bg-site-bg border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{activeCert.title}</h3>
                    <p className="text-xs text-site-text/60 font-medium">{activeCert.provider}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={activeCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-site-text hover:text-white hover:bg-primary/20 transition-all"
                  >
                    Open in New Tab <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-site-text hover:text-white transition-all cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content - In-Page PDF Viewer */}
              <div className="flex-1 w-full h-full bg-[#0F1C2E] p-2 sm:p-4">
                <iframe
                  src={`${activeCert.link}#toolbar=1&navpanes=0`}
                  title={activeCert.title}
                  className="w-full h-full rounded-2xl border border-white/10 bg-white"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
