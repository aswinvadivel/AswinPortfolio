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
  ArrowUpRight
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
          ASWIN <span className="text-accent">V</span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-accent mx-auto"
          onAnimationComplete={onComplete}
        />
      </div>

      {/* Flying Icons */}
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
            opacity: [0, 0.5, 0],
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
    { name: 'Education', href: '#education' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      title: 'Full Stack Development',
      description: 'I specialize in building Web applications using Spring Boot, Java, and modern front-end technologies like React, Tailwind, and JavaScript.',
      icon: <Code className="w-8 h-8 text-accent" />,
      cert: 'nullclass-certificate.pdf',
      color: 'accent'
    },
    {
      title: 'Cloud Services',
      description: 'Experience in cloud infrastructure management with AWS. Deployment, optimization, and resource management with a focus on high performance.',
      icon: <Cloud className="w-8 h-8 text-primary" />,
      cert: 'acmegrade-certificate.pdf',
      color: 'primary'
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
      image: 'Url shortner.png',
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

      <div className={`min-h-screen bg-site-bg selection:bg-primary/20 ${loading ? 'overflow-hidden' : ''}`}>
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <motion.a
              href="#"
              className="text-2xl font-black text-site-text tracking-tighter"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              ASWIN <span className="text-primary">V</span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-black uppercase tracking-widest text-site-text/60 hover:text-primary transition-all relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            <button className="md:hidden text-site-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-site-bg/95 backdrop-blur-xl border-b border-white/10"
              >
                <div className="flex flex-col p-8 space-y-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-xl font-black text-site-text uppercase tracking-widest hover:text-primary transition-colors"
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
        <section id="home" className="pt-48 pb-32 px-6 relative overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full animate-pulse delay-1000"></div>

          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="md:w-3/5 text-center md:text-left">
              <motion.div
                className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-black text-xs uppercase tracking-[0.3em] mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Tech Excellence & Innovation
              </motion.div>
              <motion.h1
                className="text-6xl md:text-[5.5rem] font-black text-site-text mb-8 leading-[0.9] tracking-tighter"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Building <br />
                <span className="heading-gradient italic">Next-Gen</span> <br />
                Software.
              </motion.h1>
              <motion.p
                className="text-xl text-site-text/50 mb-12 max-w-xl leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Full Stack Developer specialized in backend excellence and scalable cloud systems.
                Combining solid IT foundations with modern engineering practices.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-8 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a href="ASWIN_V.pdf" className="btn-primary flex items-center gap-4 text-lg px-10 py-5" download>
                  <FileText className="w-6 h-6" /> Resume
                </a>
                <div className="flex gap-4 items-center">
                  <a href="https://www.linkedin.com/in/aswin-vadivel-4758b5257" className="p-5 bg-white/5 border border-white/10 text-site-text rounded-[24px] hover:bg-primary hover:text-site-bg hover:border-transparent transition-all shadow-2xl active:scale-95">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/aswinvadivel" className="p-5 bg-white/5 border border-white/10 text-site-text rounded-[24px] hover:bg-accent hover:text-site-bg hover:border-transparent transition-all shadow-2xl active:scale-95">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="md:w-1/3 mt-24 md:mt-0 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10 p-4 border border-white/10 rounded-[48px] bg-white/5 backdrop-blur-3xl">
                <img
                  src="profile_1.png"
                  alt="Aswin"
                  className="rounded-[36px] hover:scale-105 transition-all duration-700 w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-20 bg-accent text-site-bg px-8 py-4 rounded-2xl shadow-2xl font-black text-sm uppercase tracking-widest animate-float">
                B.Tech IT
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 bg-bg-card/30 relative overflow-hidden">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-24 relative z-10">
            <motion.div
              className="md:w-1/2 relative p-4"
              {...fadeIn}
            >
              <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full animate-pulse"></div>
              <img src="profile_2.png" alt="About" className="relative z-10 rounded-[64px] shadow-2xl w-full max-w-md mx-auto border border-white/10 hover:rotate-2 transition-transform duration-500" />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              {...fadeIn}
            >
              <div className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6">Expertise Overview</div>
              <h2 className="text-6xl font-black mb-10 text-site-text leading-none tracking-tighter">Solving <br />Complexity with <br /><span className="text-primary">Clean Tech.</span></h2>
              <p className="text-lg text-site-text/50 leading-relaxed mb-12 font-medium">
                Final-year Information Technology student at Velammal Engineering College.
                I focus on architecting robust backends and efficient cloud environments.
                My approach combines analytical thinking with the latest tech stacks to build production-ready solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Terminal className="text-primary" />, label: 'Architecture', text: 'Spring Boot, Java' },
                  { icon: <Cpu className="text-accent" />, label: 'Interface', text: 'React, Tailwind' },
                  { icon: <Database className="text-primary" />, label: 'Storage', text: 'MySQL, MongoDB' },
                  { icon: <Cloud className="text-accent" />, label: 'Infrastructure', text: 'AWS, Deployment' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 bg-white border border-purple-50 rounded-[32px] hover:border-primary/20 transition-all group shadow-sm hover:shadow-md">
                    <div className="bg-white/5 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                      <div className="text-[10px] font-black text-site-text/30 uppercase tracking-[0.2em] mb-1">{item.label}</div>
                      <div className="text-lg font-bold text-site-text">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-32 px-6 relative">
          <div className="container mx-auto">
            <motion.div className="text-center mb-24" {...fadeIn}>
              <h2 className="text-6xl font-black mb-8 text-site-text uppercase tracking-tighter">Academic <span className="heading-gradient italic">Journey</span></h2>
              <p className="text-lg text-site-text/40 max-w-2xl mx-auto font-medium tracking-tight">Solid foundations from top institutions.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12">
              {[
                {
                  type: 'University',
                  institution: 'Velammal Engineering College',
                  degree: 'B.Tech Information Technology',
                  description: 'Core focus on Information Systems, Software Architecture, and Advanced Web Tech. 2021 - Present.',
                  icon: <Globe className="w-8 h-8 text-primary" />
                },
                {
                  type: 'Secondary',
                  institution: 'A.K.T Matric Higher Secondary School',
                  degree: 'High School Diploma',
                  description: 'Strong academic record with emphasis on Science and Mathematics.',
                  icon: <Cpu className="w-8 h-8 text-accent" />
                }
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  className="group relative flex flex-col md:flex-row gap-10 p-12 bg-white border border-purple-50 rounded-[48px] hover:bg-white/80 transition-all duration-700 hover:border-primary/20 shadow-sm"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-24 h-24 bg-primary text-site-bg rounded-[24px] flex items-center justify-center group-hover:rotate-12 transition-transform shadow-2xl">
                    {edu.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-4">{edu.type}</div>
                    <h3 className="text-4xl font-black text-primary mb-3 tracking-tighter">{edu.institution}</h3>
                    <div className="text-2xl font-bold text-accent mb-6">{edu.degree}</div>
                    <p className="text-site-text/40 leading-relaxed font-semibold text-lg">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6 bg-bg-card/20 relative">
          <div className="container mx-auto">
            <motion.div className="text-center mb-24" {...fadeIn}>
              <h2 className="text-6xl font-black mb-8 text-site-text uppercase tracking-tighter">Core <span className="text-primary underline decoration-primary decoration-8 underline-offset-10">Systems</span></h2>
              <p className="text-lg text-site-text/40 max-w-2xl mx-auto font-medium tracking-tight">Engineered for performance and reliability.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 p-16 rounded-[64px] shadow-2xl relative overflow-hidden group border border-white/5 hover:border-primary/20 transition-all duration-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 blur-[60px] rounded-full group-hover:bg-primary/10 transition-colors"></div>
                  <div className="mb-12 p-8 bg-white/5 border border-white/10 rounded-[32px] w-fit group-hover:rotate-12 transition-transform duration-500 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-4xl font-black text-site-text mb-8 tracking-tighter uppercase">{service.title}</h3>
                  <p className="text-site-text/40 text-xl font-medium mb-12 leading-relaxed">{service.description}</p>
                  <a href={service.cert} className="inline-flex items-center gap-4 px-10 py-5 rounded-3xl font-black bg-primary text-site-bg hover:bg-accent transition-all uppercase tracking-widest text-sm" download>
                    Verify Certification <ArrowUpRight className="w-6 h-6" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="portfolio" className="py-32 px-6">
          <div className="container mx-auto">
            <motion.div className="flex flex-col md:flex-row justify-between items-end mb-24" {...fadeIn}>
              <div className="text-left">
                <h2 className="text-6xl font-black mb-6 text-site-text uppercase tracking-tighter">Production <br /><span className="heading-gradient italic">Artifacts.</span></h2>
                <p className="text-lg text-site-text/30 font-black uppercase tracking-[0.4em]">Real-world applications</p>
              </div>
              <a href="https://github.com/aswinvadivel" className="mt-8 md:mt-0 flex items-center gap-4 text-primary font-black uppercase tracking-widest group text-sm">
                Open Source Pool <ChevronRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </a>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-3 gap-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  className="group bg-white rounded-[48px] overflow-hidden shadow-xl transition-all duration-700 border border-purple-100 hover:border-primary/50"
                  variants={fadeIn}
                >
                  <div className="h-[400px] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-site-bg/80 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center p-12 text-center">
                      <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        <h4 className="text-4xl font-black text-site-text mb-6 uppercase tracking-tighter">{project.title}</h4>
                        <p className="text-site-text/60 mb-8 max-w-sm mx-auto font-semibold leading-relaxed">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 p-6 bg-primary text-site-bg rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-accent transition-colors shadow-2xl">
                          Code Access <Github className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-black text-site-text uppercase tracking-tight">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/10 text-primary text-[10px] font-black rounded-lg uppercase tracking-widest border border-white/5">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <ArrowUpRight className="w-10 h-10 text-primary/20 group-hover:text-primary transition-colors" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 relative overflow-hidden">
          <div className="absolute -left-20 bottom-20 text-[180px] font-black text-white/5 select-none -z-10 uppercase -rotate-90">Protocol.</div>

          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-24 items-center relative z-10">
              <motion.div className="md:w-5/12" {...fadeIn}>
                <div className="text-primary font-black uppercase tracking-[0.5em] text-sm mb-8 italic">Initiate Connection</div>
                <h2 className="text-7xl font-black mb-12 text-site-text leading-[0.9] tracking-tighter">Let's <br />Deploy <br /><span className="heading-gradient underline decoration-8 underline-offset-[16px]">Impact.</span></h2>
                <div className="space-y-12">
                  <div className="flex items-center gap-8 group">
                    <div className="w-20 h-20 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-[24px] shadow-2xl group-hover:bg-primary group-hover:text-site-bg transition-all duration-500">
                      <Mail className="w-10 h-10" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-site-text/30 uppercase tracking-[0.3em] mb-1">Secure Channel</div>
                      <div className="text-2xl font-black text-site-text tracking-tighter group-hover:text-primary transition-colors italic">vaswin1220@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 group">
                    <div className="w-20 h-20 bg-accent/10 border border-accent/20 text-accent flex items-center justify-center rounded-[24px] shadow-2xl group-hover:bg-accent group-hover:text-site-bg transition-all duration-500">
                      <Linkedin className="w-10 h-10" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-site-text/30 uppercase tracking-[0.3em] mb-1">Professional Mesh</div>
                      <div className="text-2xl font-black text-site-text tracking-tighter group-hover:text-accent transition-colors italic">@aswinvadivel</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="md:w-7/12 w-full glass p-16 rounded-[64px] relative"
                {...fadeIn}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[80px] rounded-full animate-pulse"></div>
                <form action="https://formsubmit.co/vaswin1220@gmail.com" method="POST" className="space-y-10 relative z-10">
                  <input type="hidden" name="_subject" value="Protocol Initiated: New Portfolio Message" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-xs font-black text-site-text/40 uppercase tracking-widest ml-2 italic underline decoration-primary/50 underline-offset-4">Full Identity</label>
                      <input type="text" name="name" placeholder="Agent Name" required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-[28px] text-site-text placeholder:text-site-text/20 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-black" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-black text-site-text/40 uppercase tracking-widest ml-2 italic underline decoration-accent/50 underline-offset-4">Encrypted Mail</label>
                      <input type="email" name="email" placeholder="agent@org.com" required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-[28px] text-site-text placeholder:text-site-text/20 focus:ring-4 focus:ring-accent/20 focus:border-accent outline-none transition-all font-black" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-site-text/40 uppercase tracking-widest ml-2 italic underline decoration-primary/50 underline-offset-4">Mission Brief</label>
                    <textarea rows="4" name="message" placeholder="Describe the mission objective..." required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-[28px] text-site-text placeholder:text-site-text/20 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none font-black italic"></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-site-bg text-xl font-black py-8 rounded-[32px] uppercase tracking-[0.3em] shadow-[0_0_50px_rgba(20,184,166,0.2)] hover:shadow-[0_0_80px_rgba(20,184,166,0.4)] transition-all relative overflow-hidden group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="relative z-10">Transmit Message</span>
                    <div className="absolute inset-0 bg-accent translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 bg-site-bg border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-16">
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-black tracking-tighter mb-6 text-site-text">
                  ASWIN <span className="text-primary italic underline underline-offset-[12px]">V</span>
                </h2>
                <div className="flex gap-6 mt-10">
                  <a href="https://www.linkedin.com/in/aswin-vadivel-4758b5257" className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary transition-all text-site-text hover:text-site-bg shadow-xl"><Linkedin className="w-6 h-6" /></a>
                  <a href="https://github.com/aswinvadivel" className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-accent transition-all text-site-text hover:text-site-bg shadow-xl"><Github className="w-6 h-6" /></a>
                  <a href="mailto:vaswin1220@gmail.com" className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary transition-all text-site-text hover:text-site-bg shadow-xl"><Mail className="w-6 h-6" /></a>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-10">
                <nav className="flex flex-wrap gap-10 justify-center">
                  {navLinks.map(link => (
                    <a key={link.name} href={link.href} className="text-sm font-black uppercase tracking-[0.3em] text-site-text/40 hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary underline-offset-8">{link.name}</a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
