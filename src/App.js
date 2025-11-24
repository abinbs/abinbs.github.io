import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Globe, 
  ChevronDown,
  Briefcase,
  User,
  Send,
  FileText,
  ToggleLeft,
  LayoutTemplate
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMinimal, setIsMinimal] = useState(false);

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // --- MINIMAL VIEW COMPONENT ---
  if (isMinimal) {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-900 font-mono selection:bg-stone-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Minimal Header */}
          <nav className="flex justify-between items-center mb-16 pb-4 border-b-2 border-stone-900">
            <div className="font-bold text-xl tracking-tighter">ABS</div>
            <button 
              onClick={() => setIsMinimal(false)}
              className="flex items-center gap-2 text-sm hover:underline decoration-stone-400 underline-offset-4"
            >
              <LayoutTemplate size={16} />
              Switch to Interactive
            </button>
          </nav>

          <header className="mb-20">
            <h1 className="text-5xl font-bold mb-4 tracking-tight text-stone-950">Abin Binu Sam</h1>
            <p className="text-xl text-stone-600 mb-8">Full Stack Engineer & Product Developer</p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-stone-500">
              <a href="mailto:abinbinusam@gmail.com" className="hover:text-stone-900 underline underline-offset-4">abinbinusam@gmail.com</a>
              <span className="hidden sm:inline">/</span>
              <a href="https://github.com/abinbs" className="hover:text-stone-900 underline underline-offset-4">github.com/abinbs</a>
              <span className="hidden sm:inline">/</span>
              <a href="https://linkedin.com/in/abinbinusam" className="hover:text-stone-900 underline underline-offset-4">linkedin.com/in/abinbinusam</a>
            </div>
          </header>

          <main className="space-y-16">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-400">01. Experience</h2>
              <div className="space-y-10">
                {[
                  {
                    role: "Software Engineer",
                    company: "Solera Holdings LLC",
                    date: "Aug 2022 - Dec 2024",
                    points: [
                      "Engineered a high-performance Canvas-based grid handling 10M+ records.",
                      "Optimized backend APIs with DuckDB reducing latency by 40%."
                    ]
                  },
                  {
                    role: "Software Developer Intern",
                    company: "Innovation Incubator",
                    date: "Jun 2022 - Jul 2022",
                    points: [
                      "Developed e-commerce solutions using Java and MySQL.",
                      "Designed dynamic interfaces in Figma and translated to frontend."
                    ]
                  }
                ].map((job, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-bold text-lg">{job.role} <span className="font-normal text-stone-500">at {job.company}</span></h3>
                      <span className="text-sm text-stone-500 font-medium">{job.date}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-stone-700 text-sm leading-relaxed marker:text-stone-400">
                      {job.points.map((pt, j) => <li key={j}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-400">02. Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                   { title: "NeuroGen Name", desc: "Generative AI using PyTorch to generate unique names via neural networks." },
                   { title: "Canvas Data Grid", desc: "High-performance enterprise data grid capable of rendering 1M+ rows." },
                   { title: "Doubtcool", desc: "Educational blogging platform with custom search engine." }
                ].map((p, i) => (
                  <div key={i} className="border border-stone-200 p-6 hover:border-stone-900 transition-colors">
                    <h3 className="font-bold mb-2">{p.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-400">03. Skills</h2>
              <div className="text-sm leading-loose text-stone-700">
                <span className="font-bold text-stone-900">Frontend:</span> React, Next.js, Tailwind, TypeScript, Framer Motion <br/>
                <span className="font-bold text-stone-900">Backend:</span> Node.js, Postgres, Python, Redis, DuckDB <br/>
                <span className="font-bold text-stone-900">Design:</span> Figma, Adobe XD, Canvas API
              </div>
            </section>
          </main>

          <footer className="mt-24 pt-8 border-t border-stone-200 text-stone-400 text-xs flex justify-between">
            <p>© 2025 ABS</p>
            <p>Designed with Minimalism</p>
          </footer>
        </div>
      </div>
    );
  }

  // --- RICH / INTERACTIVE VIEW COMPONENT ---
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
            ABS
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`hover:text-cyan-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-cyan-400' : ''}`}
              >
                {item}
              </button>
            ))}
            
            <button 
              onClick={() => setIsMinimal(true)}
              className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-slate-800 transition-all text-slate-500 hover:text-cyan-400"
              title="Switch to Minimal View"
            >
              <ToggleLeft size={18} />
              <span className="text-xs">Minimal</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
             {/* Mobile Minimal Toggle */}
            <button 
              onClick={() => setIsMinimal(true)}
              className="md:hidden text-slate-400 hover:text-cyan-400"
            >
              <ToggleLeft size={20} />
            </button>

            <button 
              onClick={() => scrollTo('contact')}
              className="px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm hover:bg-cyan-500/10 transition-all"
            >
              Looking for Co-Op internships
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-medium tracking-wide">
            Hello I'm
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            Abin Binu Sam <br />
            
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm a Full Stack Engineer specializing in building exceptional digital products.
            Currently focused on building accessible, human-centered products at <span className="text-slate-200 font-semibold">TechCorp</span>.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollTo('projects')} className="px-8 py-3 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all w-full md:w-auto">
              View Projects
            </button>
            <button className="px-8 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium hover:border-slate-600 transition-all flex items-center gap-2 w-full md:w-auto justify-center">
              <FileText size={18} />
              Resume
            </button>
          </div>

          <div className="mt-20 animate-bounce text-slate-600">
            <ChevronDown className="mx-auto" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                <User className="text-cyan-500" />
                About Me
              </h2>
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  Hello! I'm Abin, a software engineer who enjoys bridging the gap between engineering and design. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of building software for an <span className="text-cyan-400">advertising agency</span>, a <span className="text-cyan-400">start-up</span>, and a <span className="text-cyan-400">huge corporation</span>.
                </p>
                <p>
                  My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
               <h3 className="text-xl font-bold text-slate-100 mb-6">Tech Stack</h3>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Code2 size={20} />, title: "Frontend", skills: "React, Next.js, Tailwind, TypeScript" },
                    { icon: <Database size={20} />, title: "Backend", skills: "Node.js, Postgres, Python, Redis" },
                    { icon: <Cpu size={20} />, title: "Architecture", skills: "Serverless, Microservices, Docker" },
                    { icon: <Globe size={20} />, title: "Web3", skills: "Solidity, Ethers.js, IPFS" }
                  ].map((stack, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all group">
                      <div className="text-cyan-500 mb-3 group-hover:scale-110 transition-transform duration-300">{stack.icon}</div>
                      <h4 className="font-bold text-slate-200 mb-1">{stack.title}</h4>
                      <p className="text-sm text-slate-500">{stack.skills}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
            <Briefcase className="text-cyan-500" />
            Experience
          </h2>
          
          <div className="space-y-12">
            {[
              {
                role: "Software Developer",
                company: "Solera Holdings LLC",
                period: "Aug 2022 - Dec 2024",
                description: "Engineered a high-performance Canvas-based grid handling 10M+ records. Optimized backend APIs with DuckDB reducing latency by 40%.",
                tech: ["React", "TypeScript", "DuckDB", "Canvas API"]
              },
              {
                role: "Software Developer Intern",
                company: "Innovation Incubator",
                period: "Jun 2022 - Jul 2022",
                description: "Developed e-commerce solutions using Java and MySQL. Designed dynamic interfaces in Figma and translated them to responsive frontend code.",
                tech: ["Java", "MySQL", "HTML/CSS", "Figma"]
              }
            ].map((job, idx) => (
              <div key={idx} className="relative pl-8 border-l border-slate-800 hover:border-cyan-500/50 transition-colors duration-300">
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-800 ring-4 ring-slate-950"></div>
                <h3 className="text-xl font-bold text-slate-100">{job.role} <span className="text-cyan-500">@ {job.company}</span></h3>
                <p className="text-sm text-slate-500 mb-4 font-mono">{job.period}</p>
                <p className="text-slate-400 mb-4 max-w-2xl">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
            <Terminal className="text-cyan-500" />
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "NeuroGen Name",
                desc: "A Generative AI project using PyTorch to generate unique names via neural networks. Trained on datasets of over 50k names.",
                tags: ["Python", "PyTorch", "AI/ML"],
                color: "from-purple-500/20 to-blue-500/20"
              },
              {
                title: "Canvas Data Grid",
                desc: "High-performance data grid capable of rendering 1 million rows without virtualization lag. Built for enterprise analytics.",
                tags: ["React", "Canvas API", "TypeScript"],
                color: "from-cyan-500/20 to-emerald-500/20"
              },
              {
                title: "Doubtcool",
                desc: "Educational blogging platform with networking features for students. Features a custom search engine and profile system.",
                tags: ["PHP", "MySQL", "jQuery"],
                color: "from-orange-500/20 to-red-500/20"
              }
            ].map((project, idx) => (
              <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                {/* Gradient Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                   <Code2 size={48} className="text-slate-100/50 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                    <div className="flex gap-3 text-slate-400">
                      <Github size={18} className="hover:text-cyan-400 cursor-pointer" />
                      <ExternalLink size={18} className="hover:text-cyan-400 cursor-pointer" />
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-cyan-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/abinbs" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/abinbinusam" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all">
              <Mail size={24} />
            </a>
          </div>

          <a 
            href="mailto:abinbinusam@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 rounded-lg font-bold hover:bg-cyan-500/10 transition-all"
          >
            <Send size={18} />
            Say Hello
          </a>
        </div>
        
        <footer className="text-center text-slate-600 mt-20 text-sm">
          <p>@2025 ABS. \nMerci!</p>
        </footer>
      </section>
    </div>
  );
};

export default App;