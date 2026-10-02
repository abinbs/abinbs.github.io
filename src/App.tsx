import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Cpu,
  Briefcase,
  User,
  Send,
  ToggleLeft,
  LayoutTemplate,
  Search,
  Check,
  Copy,
  MapPin,
  Calendar,
  GraduationCap,
  ArrowUpRight,
  ShieldCheck,
  X,
  Activity,
  CheckCircle2
} from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  isLatest?: boolean;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  badgeBgDark: string;
  badgeTextDark: string;
  badgeBorderDark: string;
  points: string[];
  tech: string[];
}

interface Project {
  title: string;
  category: string;
  desc: string;
  points: string[];
  tags: string[];
  githubUrl?: string;
  metrics?: string;
  accentBorder: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  badgeBgDark: string;
  badgeTextDark: string;
  badgeBorderDark: string;
}

const experiencesData: Experience[] = [
  {
    role: "Software Developer in Test Intern",
    company: "Intelcom Dragonfly",
    period: "May 2026 – Aug 2026",
    location: "Montreal, Canada",
    isLatest: true,
    accentColor: "border-t-emerald-600",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800",
    badgeBorder: "border-emerald-200",
    badgeBgDark: "bg-emerald-950/60",
    badgeTextDark: "text-emerald-300",
    badgeBorderDark: "border-emerald-800/60",
    points: [
      "Engineered a distributed test scheduler in C# and .NET using Quartz.NET, supporting code first scheduling, job reconciliation, and automated test execution across multiple environments.",
      "Developed a suite-level reporting pipeline with configurable notifications and enhanced the test orchestration framework with definition-level and runtime test skipping."
    ],
    tech: ["C#", ".NET", "Quartz.NET", "Distributed Systems", "Test Orchestration", "Job Reconciliation", "Automated Testing"]
  },
  {
    role: "Software Engineer",
    company: "Solera Holdings LLC",
    period: "Aug 2022 – Dec 2024",
    location: "Bangalore, India",
    accentColor: "border-t-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-800",
    badgeBorder: "border-blue-200",
    badgeBgDark: "bg-blue-950/60",
    badgeTextDark: "text-blue-300",
    badgeBorderDark: "border-blue-800/60",
    points: [
      "Streamlined CI/CD workflows for release management, resulting in a 25% increase in deployment frequency and improved system stability across production environments.",
      "Refactored 10+ microservices to improve code modularity, slashing SonarQube reported bugs and technical debt by 50%.",
      "Championed Test-Driven Development (TDD) practices across the development team, increasing unit test coverage from 15% to 90% using NUnit.",
      "Resolved critical data dependency bottlenecks on high-traffic landing pages, boosting page load speeds by 50% and directly contributing to a measurable increase in user retention and revenue."
    ],
    tech: ["C#", ".NET Core", "Microservices", "TDD", "NUnit", "SonarQube", "CI/CD", "MS SQL"]
  },
  {
    role: "Software Developer Intern",
    company: "Innovation Incubator",
    period: "Jun 2022 – Jul 2022",
    location: "Remote / Hybrid",
    accentColor: "border-t-amber-600",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-800",
    badgeBorder: "border-amber-200",
    badgeBgDark: "bg-amber-950/60",
    badgeTextDark: "text-amber-300",
    badgeBorderDark: "border-amber-800/60",
    points: [
      "Conducted in-depth compatibility testing and gap analysis for Low-Code/No-Code (LCNC) integrations, ensuring 100% alignment with complex client requirements and strict engineering constraints.",
      "Evaluated and implemented Low-Code architectures to accelerate prototype delivery, while maintaining adherence to technical engineering standards."
    ],
    tech: ["Java", "System Integration", "LCNC Architecture", "MySQL", "Compatibility Testing"]
  }
];

const projectsData: Project[] = [
  {
    title: "Automated Malware Analysis",
    category: "Multimodal Deep Learning & Security",
    desc: "Robust hybrid security framework combining static visual representation with dynamic behavioral analysis to detect, classify, and mitigate obfuscated zero-day malware.",
    points: [
      "Developed a multimodal deep learning framework to detect obfuscated malware by converting raw binary files into grayscale images for visual pattern recognition.",
      "Implemented an ensemble of ResNet50 and EfficientNet-B0 architectures using Transfer Learning on a dataset of 14,000+ samples, achieving a 0.95 Macro-F1 score.",
      "Engineered a confidence-aware fusion layer that combines static image probabilities with dynamic behavioral analysis (Random Forest), effectively resolving inter-model disagreements and reducing false positives.",
      "Developed an interactive Streamlit dashboard integrated with a local SQLite database to persist real-time inference logs, creating a complete feedback loop for monitoring detection history and model performance."
    ],
    tags: ["Python", "PyTorch", "Streamlit", "SQLite", "ResNet50", "EfficientNet-B0", "Random Forest"],
    githubUrl: "https://github.com/abinbs",
    metrics: "0.95 Macro-F1 • 14,000+ Samples",
    accentBorder: "border-t-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-800",
    badgeBorder: "border-blue-200",
    badgeBgDark: "bg-blue-950/60",
    badgeTextDark: "text-blue-300",
    badgeBorderDark: "border-blue-800/60"
  },
  {
    title: "Colorectal Cancer Classification",
    category: "Histopathology & Medical Computer Vision",
    desc: "Automated deep learning diagnostic pipeline leveraging convolutional encoders and domain adaptation for high-precision colorectal tissue classification and cross-domain oncology transfer.",
    points: [
      "Trained and evaluated deep convolutional neural networks (ResNet-50 and MobileNetV3 Large) using PyTorch for automated colorectal tissue classification, achieving an overall accuracy of 97% on the testing splits.",
      "Engineered domain adaptation strategies for histopathological data, utilizing ImageNet pretrained weights, selective layer freezing, and data augmentation to optimize model convergence and efficiency.",
      "Investigated cross-domain feature transferability by deploying a fine-tuned MobileNet encoder on unseen medical datasets, training a downstream Random Forest classifier on the frozen high-dimensional features.",
      "Achieved 96% accuracy in downstream transfer tasks on a distinct prostate cancer dataset by leveraging the generalized visual priors established during model fine-tuning."
    ],
    tags: ["PyTorch", "ResNet-50", "MobileNetV3", "Random Forest", "Domain Adaptation", "Transfer Learning"],
    githubUrl: "https://github.com/abinbs",
    metrics: "97% Accuracy • 96% Transfer",
    accentBorder: "border-t-rose-600",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-800",
    badgeBorder: "border-rose-200",
    badgeBgDark: "bg-rose-950/60",
    badgeTextDark: "text-rose-300",
    badgeBorderDark: "border-rose-800/60"
  },
  {
    title: "I Recon : An Alert App",
    category: "Assistive Healthcare & Computer Vision",
    desc: "Real-time caregiver alert platform providing hands-free communication for Locked-in Syndrome (LiS) patients via high-precision facial landmark telemetry and blink classification.",
    points: [
      "Engineered caregiver assistance for Locked-in Syndrome (LiS) patients by detection and classification of eye blinks with high precision.",
      "Optimized lightweight facial landmark detection delivering sub-100ms inference on standard webcams with real-time alerting."
    ],
    tags: ["MediaPipe", "Python", "Computer Vision", "Firebase", "Real-Time Telemetry"],
    githubUrl: "https://github.com/abinbs",
    metrics: "Sub-100ms Blink Inference",
    accentBorder: "border-t-emerald-600",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800",
    badgeBorder: "border-emerald-200",
    badgeBgDark: "bg-emerald-950/60",
    badgeTextDark: "text-emerald-300",
    badgeBorderDark: "border-emerald-800/60"
  },
  {
    title: "Home EI",
    category: "IoT Ecosystem & Ambient Intelligence",
    desc: "Distributed IoT-based home ecosystem integrating Emotional Intelligence (EI) principles and sensor telemetry to adapt ambient conditions for user comfort and well-being.",
    points: [
      "Design project based on IoT-based home ecosystem integrating principles of Emotional Intelligence (EI) to enhance user interaction and comfort.",
      "Implemented low-power LoRaWAN protocol for reliable cross-node sensor communication, edge feedback, and automated actuator response."
    ],
    tags: ["LoRaWAN", "Python", "TensorFlow", "IoT Telemetry", "Edge Computing"],
    githubUrl: "https://github.com/abinbs",
    metrics: "LoRaWAN Low-Power Mesh",
    accentBorder: "border-t-amber-600",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-800",
    badgeBorder: "border-amber-200",
    badgeBgDark: "bg-amber-950/60",
    badgeTextDark: "text-amber-300",
    badgeBorderDark: "border-amber-800/60"
  }
];

const skillCategories = [
  {
    title: "Languages",
    description: "Core programming and database languages",
    accentLight: "text-blue-700 bg-blue-50 border-blue-200",
    accentDark: "text-blue-300 bg-blue-950/60 border-blue-800/60",
    skills: ["C#", "Java", "Python", "C/C++", "MS SQL", "JavaScript", "HTML/CSS", "R"]
  },
  {
    title: "Frameworks & Backend",
    description: "Enterprise application architectures and runtimes",
    accentLight: "text-indigo-700 bg-indigo-50 border-indigo-200",
    accentDark: "text-indigo-300 bg-indigo-950/60 border-indigo-800/60",
    skills: [".NET Framework / Core", "ASP.NET", "Quartz.NET", "AngularJS", "REST APIs", "ADO.NET", "NUnit", "Selenium"]
  },
  {
    title: "Architecture & DevOps",
    description: "Distributed infrastructure, reliability, and deployment",
    accentLight: "text-emerald-700 bg-emerald-50 border-emerald-200",
    accentDark: "text-emerald-300 bg-emerald-950/60 border-emerald-800/60",
    skills: ["Distributed Schedulers", "Microservices", "TDD", "CI/CD Pipelines", "Docker", "Serverless", "Jenkins", "TeamCity", "Octopus Deploy", "AWS"]
  },
  {
    title: "Libraries & Tooling",
    description: "SDKs, data access layers, and developer tools",
    accentLight: "text-amber-700 bg-amber-50 border-amber-200",
    accentDark: "text-amber-300 bg-amber-950/60 border-amber-800/60",
    skills: ["LINQ", "Entity Framework", "Dapper", "SignalR", "AutoMapper", "Redis", "OpenCV", "MediaPipe", "Git", "Postman", "Swagger"]
  }
];

const quickFilterKeywords = ["All", "Quartz.NET", "C#", ".NET", "PyTorch", "ResNet", "Distributed Systems", "TDD", "Microservices"];

// Pure CSS Light/Dark Mode Switcher Component (Dribbble/Jon Kantner animation)
const ThemeToggle: React.FC<{ isDark: boolean; onToggle: () => void; idPrefix?: string }> = ({
  isDark,
  onToggle,
  idPrefix = "switch"
}) => {
  return (
    <label
      htmlFor={`${idPrefix}-input`}
      className="switch"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <input
        id={`${idPrefix}-input`}
        className="switch__input"
        type="checkbox"
        role="switch"
        checked={isDark}
        onChange={onToggle}
        aria-label="Toggle light and dark mode"
      />
      <span className="switch__icon">
        <span className="switch__icon-part switch__icon-part--1"></span>
        <span className="switch__icon-part switch__icon-part--2"></span>
        <span className="switch__icon-part switch__icon-part--3"></span>
        <span className="switch__icon-part switch__icon-part--4"></span>
        <span className="switch__icon-part switch__icon-part--5"></span>
        <span className="switch__icon-part switch__icon-part--6"></span>
        <span className="switch__icon-part switch__icon-part--7"></span>
        <span className="switch__icon-part switch__icon-part--8"></span>
        <span className="switch__icon-part switch__icon-part--9"></span>
        <span className="switch__icon-part switch__icon-part--10"></span>
        <span className="switch__icon-part switch__icon-part--11"></span>
      </span>
      <span className="switch__sr">Toggle Dark Mode</span>
    </label>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMinimal, setIsMinimal] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // default light mode
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedKeyword, setSelectedKeyword] = useState<string>('All');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  // Sync dark class on html and body for smooth global styling
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find((section: string) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -120 && rect.top <= 250;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('abinbinusam@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  // Filter experiences and projects based on search query or selected keyword
  const effectiveFilter = searchQuery.trim() || (selectedKeyword !== 'All' ? selectedKeyword : '');

  const filteredExperiences = experiencesData.filter((job) => {
    if (!effectiveFilter) return true;
    const term = effectiveFilter.toLowerCase();
    const inRole = job.role.toLowerCase().includes(term);
    const inCompany = job.company.toLowerCase().includes(term);
    const inPoints = job.points.some((p) => p.toLowerCase().includes(term));
    const inTech = job.tech.some((t) => t.toLowerCase().includes(term));
    return inRole || inCompany || inPoints || inTech;
  });

  const filteredProjects = projectsData.filter((project) => {
    if (!effectiveFilter) return true;
    const term = effectiveFilter.toLowerCase();
    const inTitle = project.title.toLowerCase().includes(term);
    const inCategory = project.category.toLowerCase().includes(term);
    const inDesc = project.desc.toLowerCase().includes(term);
    const inPoints = project.points.some((p) => p.toLowerCase().includes(term));
    const inTags = project.tags.some((t) => t.toLowerCase().includes(term));
    return inTitle || inCategory || inDesc || inPoints || inTags;
  });

  // --- MINIMAL VIEW COMPONENT ---
  if (isMinimal) {
    return (
      <div className={`min-h-screen font-mono transition-colors duration-400 ${
        isDarkMode
          ? 'bg-[#111113] text-[#E4E4E7] selection:bg-stone-800'
          : 'bg-stone-50 text-stone-900 selection:bg-stone-200'
      }`}>
        {/* Sticky Minimal Header (Locked to top when scrolling) */}
        <header className={`sticky top-0 z-50 backdrop-blur-sm border-b-2 px-6 py-4 transition-colors duration-400 ${
          isDarkMode
            ? 'bg-[#111113]/95 border-stone-300 text-stone-100'
            : 'bg-stone-50/95 border-stone-900 text-stone-900'
        }`}>
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="font-bold text-xl tracking-tighter">ABS</div>
            <div className="flex items-center gap-4">
              <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} idPrefix="minimal-toggle" />
              <button
                onClick={() => setIsMinimal(false)}
                className={`flex items-center gap-2 text-sm hover:underline underline-offset-4 cursor-pointer transition-colors ${
                  isDarkMode ? 'decoration-stone-500 text-stone-300 hover:text-white' : 'decoration-stone-400 text-stone-900 hover:text-black'
                }`}
              >
                <LayoutTemplate size={16} />
                Switch to Interactive
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 pt-10 pb-16">
          <header className="mb-20">
            <h1 className={`text-5xl font-bold mb-4 tracking-tight ${isDarkMode ? 'text-white' : 'text-stone-950'}`}>Abin Binu Sam</h1>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>Full Stack Engineer & Systems Developer</p>
            <div className={`flex flex-col sm:flex-row gap-4 text-sm ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>
              <a href="mailto:abinbinusam@gmail.com" className={`hover:underline underline-offset-4 ${isDarkMode ? 'hover:text-white' : 'hover:text-stone-900'}`}>abinbinusam@gmail.com</a>
              <span className="hidden sm:inline">/</span>
              <a href="https://github.com/abinbs" target="_blank" rel="noopener noreferrer" className={`hover:underline underline-offset-4 ${isDarkMode ? 'hover:text-white' : 'hover:text-stone-900'}`}>github.com/abinbs</a>
              <span className="hidden sm:inline">/</span>
              <a href="https://linkedin.com/in/abinbinusam" target="_blank" rel="noopener noreferrer" className={`hover:underline underline-offset-4 ${isDarkMode ? 'hover:text-white' : 'hover:text-stone-900'}`}>linkedin.com/in/abinbinusam</a>
            </div>
          </header>

          <main className="space-y-16">
            <section>
              <h2 className={`text-sm font-bold uppercase tracking-widest mb-6 ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>01. Experience</h2>
              <div className="space-y-10">
                {experiencesData.map((job, i) => (
                  <div key={i} className="group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className="font-bold text-lg">
                        <span className={isDarkMode ? 'text-white' : 'text-stone-950'}>{job.role}</span>{' '}
                        <span className={`font-normal ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>at {job.company}</span>
                      </h3>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>{job.period}</span>
                    </div>
                    <p className={`text-xs mb-2 ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>{job.location}</p>
                    <ul className={`list-disc list-inside space-y-1 text-sm leading-relaxed ${isDarkMode ? 'text-stone-300 marker:text-stone-600' : 'text-stone-700 marker:text-stone-400'}`}>
                      {job.points.map((pt, j) => <li key={j}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={`text-sm font-bold uppercase tracking-widest mb-6 ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>02. Projects</h2>
              <div className="space-y-10">
                {projectsData.map((p, i) => (
                  <div key={i} className={`border p-6 transition-colors ${
                    isDarkMode
                      ? 'border-stone-800 bg-[#161619] hover:border-stone-500'
                      : 'border-stone-200 bg-transparent hover:border-stone-900'
                  }`}>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-stone-950'}`}>{p.title}</h3>
                      {p.metrics && <span className={`text-xs font-mono ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>{p.metrics}</span>}
                    </div>
                    <p className={`text-xs font-mono mb-4 ${isDarkMode ? 'text-stone-400' : 'text-stone-400'}`}>{p.tags.join(" • ")}</p>
                    <ul className={`list-disc list-inside space-y-1 text-sm leading-relaxed ${isDarkMode ? 'text-stone-300 marker:text-stone-600' : 'text-stone-700 marker:text-stone-400'}`}>
                      {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={`text-sm font-bold uppercase tracking-widest mb-6 ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>03. Skills</h2>
              <div className={`text-sm leading-loose ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>Frameworks:</span> .NET Framework / Core, ASP.NET, Quartz.NET, AngularJS, REST, NUnit, Selenium, WordPress, Bubble <br />
                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>Languages:</span> C#, Java, Python, C/C++, MS SQL, JavaScript, HTML/CSS, R <br />
                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>Developer Tools:</span> Git, Postman, Swagger, Jenkins, Octopus, TeamCity, Redis, AWS, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse <br />
                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>Libraries:</span> LINQ, AWS SDK, AutoMapper, Dapper, Entity Framework, SignalR, NSubstitute, OpenCV, MediaPipe <br />
                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>Package Managers:</span> Nuget, Bower, Yarn
              </div>
            </section>
          </main>

          <footer className={`mt-24 pt-8 border-t text-xs flex justify-between ${isDarkMode ? 'border-stone-800 text-stone-500' : 'border-stone-200 text-stone-400'}`}>
            <p>© 2026 ABS</p>
            <p>Designed with Minimalism</p>
          </footer>
        </div>
      </div>
    );
  }

  // --- REDESIGNED TECH UI (Inspired by America.gov & Modern Tech Products) ---
  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-400 ${
      isDarkMode
        ? 'dark bg-[#0E0E10] text-[#F4F4F5] selection:bg-[#1E293B] selection:text-[#F8FAFC]'
        : 'bg-[#FBFBF9] text-[#18181B] selection:bg-[#E2E8F0] selection:text-[#0F172A]'
    }`}>
      
      {/* STICKY HEADER (Top Banner + Main Navigation remain fixed in place when scrolling) */}
      <header className="sticky top-0 z-50 w-full shadow-2xs">
        {/* Top Banner / Federal & Tech Style Status Bar with Subtle Accents */}
        <div className={`border-b px-4 py-2 text-xs transition-colors duration-400 ${
          isDarkMode
            ? 'border-[#232328] bg-[#141416]/95 text-[#94A3B8]'
            : 'border-[#E8E7E1] bg-[#F5F4EE]/95 text-[#52525B]'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-semibold text-[11px] whitespace-nowrap shrink-0 border ${
                isDarkMode
                  ? 'bg-emerald-950/70 text-emerald-300 border-emerald-800/70'
                  : 'bg-emerald-100/80 text-emerald-800 border-emerald-300/60'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Open to Opportunities
              </span>
              <span className={`font-medium whitespace-nowrap ${isDarkMode ? 'text-[#E2E8F0]' : 'text-[#27272A]'}`}>
                Available for Full-Time Software Engineering Roles
              </span>
              <span className={isDarkMode ? 'text-[#475569]' : 'text-[#C4C4CA]'}>•</span>
              <span className={`hidden md:inline-flex items-center gap-1 whitespace-nowrap shrink-0 ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#71717A]'}`}>
                <MapPin size={12} className="text-blue-500 shrink-0" />
                <span>Canada</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono shrink-0">
              <span className={`font-medium whitespace-nowrap ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}`}>
                Concordia University M.Comp.Sc
              </span>
              <span className={isDarkMode ? 'text-[#334155]' : 'text-[#C4C4CA]'}>|</span>
              <button
                onClick={() => setIsMinimal(true)}
                className={`flex items-center gap-1.5 font-medium transition-colors whitespace-nowrap ${
                  isDarkMode ? 'text-[#94A3B8] hover:text-white' : 'text-[#52525B] hover:text-[#18181B]'
                }`}
                title="Switch to Simple Text UI"
              >
                <ToggleLeft size={15} />
                <span>Simple UI</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`transition-all duration-200 ${
          isScrolled
            ? isDarkMode
              ? 'bg-[#0E0E10]/95 backdrop-blur-md border-b border-[#232328] shadow-[0_2px_12px_rgba(0,0,0,0.2)] py-3'
              : 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E2E0D8] shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-3'
            : isDarkMode
              ? 'bg-[#0E0E10]/95 backdrop-blur-md border-b border-[#232328] py-3.5'
              : 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#ECEAE3] py-3.5'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div 
              onClick={() => scrollTo('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className={`w-9 h-9 rounded-xl font-bold flex items-center justify-center text-sm tracking-tight shadow-xs group-hover:scale-105 transition-transform border ${
                isDarkMode
                  ? 'bg-gradient-to-br from-[#27272A] to-[#18181B] text-white border-white/10'
                  : 'bg-gradient-to-br from-[#18181B] to-[#27272A] text-[#FBFBF9] border-black/10'
              }`}>
                ABS
              </div>
              <div>
                <span className={`font-semibold text-base tracking-tight block ${isDarkMode ? 'text-white' : 'text-[#18181B]'}`}>
                  Abin Binu Sam
                </span>
                <span className={`text-[11px] font-medium block ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                  Full Stack Engineer & Systems Developer
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <div className={`hidden md:flex items-center space-x-1 text-sm font-medium ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#52525B]'}`}>
              {[
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Tech Stack' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3.5 py-1.5 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? isDarkMode
                        ? 'text-blue-300 bg-blue-950/80 border border-blue-800/60 font-semibold'
                        : 'text-blue-900 bg-blue-50/80 border border-blue-200/60 font-semibold'
                      : isDarkMode
                        ? 'hover:text-white hover:bg-[#1A1A1E]'
                        : 'hover:text-[#18181B] hover:bg-[#F2F1EA]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Nav Right Controls */}
            <div className="flex items-center gap-3">
              <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} idPrefix="main-nav-toggle" />

              <button
                onClick={() => setIsMinimal(true)}
                className={`flex md:hidden items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium shadow-2xs ${
                  isDarkMode
                    ? 'border-[#2E2E36] bg-[#161619] text-[#CBD5E1] hover:text-white'
                    : 'border-[#E2E0D8] bg-white text-[#52525B] hover:text-[#18181B]'
                }`}
              >
                <ToggleLeft size={16} />
                <span>Simple</span>
              </button>

              <a
                href="mailto:abinbinusam@gmail.com"
                className={`px-4 py-2 rounded-xl text-xs font-semibold active:scale-[0.98] transition-all shadow-xs flex items-center gap-1.5 ${
                  isDarkMode
                    ? 'bg-white text-black hover:bg-slate-200'
                    : 'bg-[#18181B] text-white hover:bg-blue-950'
                }`}
              >
                <Mail size={14} className={isDarkMode ? 'text-blue-600' : 'text-blue-300'} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className={`pt-12 pb-16 md:pt-16 md:pb-20 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-400 ${
        isDarkMode
          ? 'border-[#232328] bg-gradient-to-b from-[#0E0E10] via-[#121215] to-[#141418]'
          : 'border-[#ECEAE3] bg-gradient-to-b from-[#FBFBF9] via-[#FAF9F4] to-[#F7F6F0]'
      }`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Columns: Core Identity & Search Concierge */}
            <div className="lg:col-span-7">
              {/* Eyebrow Pill */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5 shadow-2xs border ${
                isDarkMode
                  ? 'bg-blue-950/60 border-blue-800/60 text-blue-300'
                  : 'bg-blue-50 border-blue-200/70 text-blue-900'
              }`}>
                <GraduationCap size={14} className={isDarkMode ? 'text-blue-400' : 'text-blue-700'} />
                <span>Master of Computer Science Candidate • Concordia University</span>
              </div>

              {/* Main Headline */}
              <h1 className={`text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight mb-5 leading-[1.12] ${
                isDarkMode ? 'text-white' : 'text-[#09090B]'
              }`}>
                Engineering reliable, distributed software architectures.
              </h1>

              {/* Eye-catchy broader Full-Stack statement */}
              <p className={`text-base sm:text-lg leading-relaxed mb-7 max-w-2xl ${
                isDarkMode ? 'text-[#94A3B8]' : 'text-[#52525B]'
              }`}>
                Full-Stack Developer passionate about engineering responsible, high-impact software and taking on ambitious technical challenges. Whether designing scalable distributed systems or building responsive user interfaces, I bring curiosity, rigorous craftsmanship, and a problem-solving mindset to every product I touch.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <button
                  onClick={() => scrollTo('experience')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold active:scale-[0.98] transition-all shadow-sm flex items-center gap-2 ${
                    isDarkMode
                      ? 'bg-white text-black hover:bg-slate-200'
                      : 'bg-[#18181B] text-white hover:bg-blue-950'
                  }`}
                >
                  <Briefcase size={15} className={isDarkMode ? 'text-blue-700' : 'text-blue-300'} />
                  <span>View Experience</span>
                </button>

                <button
                  onClick={() => scrollTo('projects')}
                  className={`px-5 py-2.5 rounded-xl border text-sm font-semibold active:scale-[0.98] transition-all shadow-2xs flex items-center gap-2 ${
                    isDarkMode
                      ? 'bg-[#161619] border-[#2E2E36] text-[#E2E8F0] hover:bg-[#202026]'
                      : 'bg-white border-[#D5D4CC] text-[#27272A] hover:bg-[#F2F1EA]'
                  }`}
                >
                  <Terminal size={15} className="text-blue-500" />
                  <span>Featured Projects</span>
                </button>

                <button
                  onClick={copyEmailToClipboard}
                  className={`px-4 py-2.5 rounded-xl border text-sm font-medium active:scale-[0.98] transition-all shadow-2xs flex items-center gap-2 ${
                    isDarkMode
                      ? 'bg-[#161619] border-[#2E2E36] text-[#94A3B8] hover:text-white hover:bg-[#202026]'
                      : 'bg-white border-[#D5D4CC] text-[#52525B] hover:text-[#18181B] hover:bg-[#F2F1EA]'
                  }`}
                  title="Click to copy email address"
                >
                  {copiedEmail ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} className="text-[#64748B]" />}
                  <span className={copiedEmail ? 'text-emerald-400 font-semibold' : ''}>
                    {copiedEmail ? 'Email Copied!' : 'abinbinusam@gmail.com'}
                  </span>
                </button>
              </div>

              {/* AMERICA.GOV SIGNATURE INTERACTION: Intelligent Search & Filter Concierge */}
              <div className={`border rounded-2xl p-4 sm:p-5 relative overflow-hidden transition-colors ${
                isDarkMode
                  ? 'bg-[#161619] border-[#2A2A30] shadow-[0_2px_14px_rgba(0,0,0,0.3)]'
                  : 'bg-white border-[#E0DED5] shadow-[0_2px_14px_rgba(0,0,0,0.03)]'
              }`}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-rose-500"></div>
                
                <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                  <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? 'text-blue-300' : 'text-blue-950'
                  }`}>
                    <Search size={14} className="text-blue-500" />
                    <span>Search & Filter Portfolio</span>
                  </div>
                  {effectiveFilter && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedKeyword('All');
                      }}
                      className="flex items-center gap-1 text-xs text-rose-500 hover:text-rose-400 font-medium underline"
                    >
                      <X size={12} />
                      <span>Clear filter</span>
                    </button>
                  )}
                </div>

                {/* Prompt Search Input */}
                <div className="relative mb-3">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by tech or topic (e.g., Quartz.NET, PyTorch, C#, ResNet, TDD, Streamlit)..."
                    className={`w-full px-4 py-2.5 pl-10 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 ${
                      isDarkMode
                        ? 'bg-[#1E1E24] border border-[#33333C] text-white placeholder-[#64748B]'
                        : 'bg-[#F8F7F2] border border-[#D5D3CA] text-[#18181B] placeholder-[#8E8E93]'
                    }`}
                  />
                  <Search size={16} className={`absolute left-3.5 top-3 ${isDarkMode ? 'text-[#64748B]' : 'text-[#8E8E93]'}`} />
                </div>

                {/* Quick Topic Chips with Subtle Colors */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className={`text-xs mr-1 hidden sm:inline font-medium ${isDarkMode ? 'text-[#64748B]' : 'text-[#71717A]'}`}>
                    Quick filters:
                  </span>
                  {quickFilterKeywords.map((kw) => {
                    const isSelected = selectedKeyword === kw && !searchQuery;
                    return (
                      <button
                        key={kw}
                        onClick={() => {
                          setSelectedKeyword(kw);
                          setSearchQuery('');
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          isSelected
                            ? isDarkMode
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-blue-900 text-white shadow-xs'
                            : isDarkMode
                              ? 'bg-[#202026] text-[#94A3B8] hover:bg-blue-950/60 hover:text-blue-300 border border-[#2A2A32]'
                              : 'bg-[#F2F1EA] text-[#475569] hover:bg-blue-50 hover:text-blue-900 hover:border-blue-200 border border-transparent'
                        }`}
                      >
                        {kw}
                      </button>
                    );
                  })}
                </div>

                {/* Live Feedback */}
                {effectiveFilter && (
                  <div className={`mt-3 pt-3 border-t text-xs flex items-center justify-between ${
                    isDarkMode ? 'border-[#232328] text-[#94A3B8]' : 'border-[#F0EFE8] text-[#52525B]'
                  }`}>
                    <span>
                      Matching filter: <strong className={isDarkMode ? 'text-blue-300' : 'text-blue-900'}>"{effectiveFilter}"</strong>
                    </span>
                    <span className={`font-mono px-2 py-0.5 rounded border ${
                      isDarkMode
                        ? 'text-emerald-300 bg-emerald-950/60 border-emerald-800/60'
                        : 'text-emerald-800 bg-emerald-50 border-emerald-200'
                    }`}>
                      {filteredExperiences.length} role(s) • {filteredProjects.length} project(s)
                    </span>
                  </div>
                )}
              </div>

            </div>

            {/* Right 5 Columns: LATEST INTERNSHIP FEATURE CARD (Hero Spotlight) */}
            <div className="lg:col-span-5">
              <div className={`border rounded-2xl p-6 sm:p-7 border-t-4 border-t-emerald-500 relative transition-colors ${
                isDarkMode
                  ? 'bg-[#161619] border-[#2A2A30] shadow-[0_3px_18px_rgba(0,0,0,0.3)]'
                  : 'bg-white border-[#E2E0D8] shadow-[0_3px_18px_rgba(0,0,0,0.04)]'
              }`}>
                
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                    isDarkMode
                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200/80'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Latest Internship • Summer 2026
                  </span>
                  <span className={`text-xs font-mono flex items-center gap-1 ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                    <Calendar size={13} className="text-blue-500" />
                    May – Aug 2026
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className={`text-xl font-bold tracking-tight mb-1 ${isDarkMode ? 'text-white' : 'text-[#09090B]'}`}>
                  Software Developer in Test Intern
                </h3>
                <div className={`text-sm font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}`}>
                  <span>Intelcom Dragonfly</span>
                  <span className={isDarkMode ? 'text-[#334155]' : 'text-[#CBD5E1]'}>•</span>
                  <span className={`text-xs font-normal flex items-center gap-1 ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                    <MapPin size={12} className="text-blue-500" />
                    Montreal, Canada
                  </span>
                </div>

                {/* One Liner Summary */}
                <p className={`text-sm leading-relaxed mb-6 ${
                  isDarkMode ? 'text-[#CBD5E1]' : 'text-[#475569]'
                }`}>
                  Engineered distributed test schedulers in C# and .NET using Quartz.NET with code-first scheduling, job reconciliation, and automated test execution.
                </p>

                {/* Jump to full section */}
                <button
                  onClick={() => scrollTo('experience')}
                  className={`w-full py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-2xs ${
                    isDarkMode
                      ? 'bg-[#202026] hover:bg-blue-950/60 text-blue-300 hover:text-white border-[#2A2A32]'
                      : 'bg-[#F5F4EE] hover:bg-blue-50 text-blue-900 hover:text-blue-950 border-[#E0DED5]'
                  }`}
                >
                  <span>View in full work history</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-400 ${
        isDarkMode ? 'border-[#232328]' : 'border-[#ECEAE3]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-900'
          }`}>
            <User size={14} className="text-blue-500" />
            <span>Profile & Background</span>
          </div>
          <h2 className={`text-3xl font-bold tracking-tight mb-8 ${isDarkMode ? 'text-white' : 'text-[#09090B]'}`}>
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className={`lg:col-span-8 space-y-4 text-base leading-relaxed ${
              isDarkMode ? 'text-[#94A3B8]' : 'text-[#52525B]'
            }`}>
              <p>
                I am a Master’s of Computer Science candidate at <strong className={isDarkMode ? 'text-white font-semibold' : 'text-[#09090B] font-semibold'}>Concordia University</strong> in Montreal, driven by a deep technical interest in scalable distributed systems, resilient backend architectures, and machine learning pipelines.
              </p>
              <p>
                Prior to graduate studies, I worked professionally as a Software Engineer at <strong className={isDarkMode ? 'text-white font-semibold' : 'text-[#09090B] font-semibold'}>Solera Holdings</strong>, where I refactored 10+ microservices to slash technical debt by 50%, elevated unit test coverage from 15% to 90% via Test-Driven Development (TDD), and resolved bottlenecks on high-traffic pages to double load speeds.
              </p>
              <p>
                In the summer of 2026, I completed my internship as a <strong className={isDarkMode ? 'text-white font-semibold' : 'text-[#09090B] font-semibold'}>Software Developer in Test Intern at Intelcom Dragonfly</strong>, engineering a distributed test scheduler in C# and .NET utilizing Quartz.NET with code-first scheduling, job reconciliation, and runtime test skipping.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className={`border rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] border-l-4 border-l-blue-600 transition-colors ${
                isDarkMode ? 'bg-[#161619] border-[#2A2A30]' : 'bg-white border-[#E2E0D8]'
              }`}>
                <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-950'
                }`}>
                  <GraduationCap size={15} className="text-blue-500" />
                  <span>Academic Degree</span>
                </h3>
                <div className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-[#09090B]'}`}>Concordia University</div>
                <div className={`text-xs mt-0.5 ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#52525B]'}`}>Master of Computer Science (M.Comp.Sc)</div>
                <div className={`text-xs font-mono mt-1 ${isDarkMode ? 'text-[#64748B]' : 'text-[#64748B]'}`}>Montreal, Canada</div>
              </div>

              <div className={`border rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] border-l-4 border-l-emerald-600 transition-colors ${
                isDarkMode ? 'bg-[#161619] border-[#2A2A30]' : 'bg-white border-[#E2E0D8]'
              }`}>
                <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2 ${
                  isDarkMode ? 'text-emerald-300' : 'text-emerald-950'
                }`}>
                  <ShieldCheck size={15} className="text-emerald-500" />
                  <span>Primary Competencies</span>
                </h3>
                <div className={`space-y-2 text-xs ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#52525B]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>Distributed Schedulers (.NET, Quartz.NET)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Deep Learning & Medical Vision (PyTorch)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>Test Automation & CI/CD Pipelines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-400 ${
        isDarkMode ? 'border-[#232328]' : 'border-[#ECEAE3]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-1 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-900'
              }`}>
                <Briefcase size={14} className="text-blue-500" />
                <span>Work History</span>
              </div>
              <h2 className={`text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#09090B]'}`}>
                Professional Experience
              </h2>
            </div>
            {effectiveFilter && (
              <span className={`text-xs font-mono px-2.5 py-1 rounded border ${
                isDarkMode
                  ? 'text-blue-300 bg-blue-950/60 border-blue-800/60'
                  : 'text-blue-800 bg-blue-50 border-blue-200'
              }`}>
                {filteredExperiences.length} of {experiencesData.length} shown
              </span>
            )}
          </div>

          {filteredExperiences.length === 0 ? (
            <div className={`border rounded-2xl p-8 text-center ${
              isDarkMode ? 'bg-[#161619] border-[#2A2A30] text-[#94A3B8]' : 'bg-white border-[#E2E0D8] text-[#71717A]'
            }`}>
              <p className="text-sm">No experience matching "{effectiveFilter}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedKeyword('All');
                }}
                className="mt-3 text-xs font-semibold text-blue-500 hover:underline"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredExperiences.map((job, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl p-6 md:p-8 transition-all ${job.accentColor} border-t-4 ${
                    isDarkMode
                      ? job.isLatest
                        ? 'bg-[#161619] border-[#2E2E36] shadow-[0_3px_16px_rgba(0,0,0,0.3)] ring-1 ring-emerald-500/30'
                        : 'bg-[#161619] border-[#2A2A30] hover:border-[#383842]'
                      : job.isLatest
                        ? 'bg-white border-[#D5D3CA] shadow-[0_3px_16px_rgba(0,0,0,0.04)] ring-1 ring-emerald-500/20'
                        : 'bg-white border-[#E2E0D8] hover:border-[#D5D3CA] shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#09090B]'}`}>
                          {job.role}
                        </h3>
                        {job.isLatest && (
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border flex items-center gap-1.5 ${
                            isDarkMode
                              ? `${job.badgeBgDark} ${job.badgeTextDark} ${job.badgeBorderDark}`
                              : `${job.badgeBg} ${job.badgeText} ${job.badgeBorder}`
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Latest Internship
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-medium mt-0.5 flex items-center gap-2 flex-wrap">
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#09090B]'}`}>{job.company}</span>
                        <span className={isDarkMode ? 'text-[#334155]' : 'text-[#CBD5E1]'}>•</span>
                        <span className={`flex items-center gap-1 ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                          <MapPin size={13} className="text-blue-500" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-mono self-start sm:self-auto ${
                      isDarkMode
                        ? 'bg-[#202026] border-[#2A2A32] text-[#94A3B8]'
                        : 'bg-[#F5F4EE] border-[#E5E4DD] text-[#52525B]'
                    }`}>
                      <Calendar size={13} className="text-blue-500" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className={`space-y-2.5 mb-6 text-sm leading-relaxed ${
                    isDarkMode ? 'text-[#CBD5E1]' : 'text-[#334155]'
                  }`}>
                    {job.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="mt-0.5 text-blue-500 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack chips */}
                  <div className={`pt-4 border-t flex flex-wrap gap-1.5 items-center ${
                    isDarkMode ? 'border-[#232328]' : 'border-[#F0EFE8]'
                  }`}>
                    <span className={`text-xs font-medium mr-1 ${isDarkMode ? 'text-[#64748B]' : 'text-[#64748B]'}`}>
                      Technologies:
                    </span>
                    {job.tech.map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setSearchQuery(t);
                          setSelectedKeyword('');
                        }}
                        className={`text-xs px-2.5 py-1 rounded-md transition-colors border ${
                          effectiveFilter && t.toLowerCase().includes(effectiveFilter.toLowerCase())
                            ? 'bg-blue-600 text-white font-medium border-blue-600'
                            : isDarkMode
                              ? 'bg-[#202026] text-[#94A3B8] border-[#2A2A32] hover:bg-blue-950/60 hover:text-blue-300'
                              : 'bg-[#F4F3ED] text-[#475569] border-transparent hover:bg-blue-50 hover:text-blue-900 hover:border-blue-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Key Engineering Benchmarks Section (Impact & Empirical Results) */}
      <section className={`py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-400 ${
        isDarkMode ? 'border-[#232328] bg-[#111114]' : 'border-[#ECEAE3] bg-[#F7F6F0]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-1 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-900'
              }`}>
                <Activity size={14} className="text-blue-500" />
                <span>Empirical Impact</span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#09090B]'}`}>
                Key Engineering Benchmarks
              </h2>
            </div>
            <span className={`text-xs font-mono px-3 py-1 rounded-full border font-semibold self-start sm:self-auto ${
              isDarkMode
                ? 'text-blue-300 bg-blue-950/60 border-blue-800/60'
                : 'text-blue-800 bg-blue-50 border-blue-200'
            }`}>
              Empirically Validated Across Projects & Roles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className={`border rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] border-t-4 border-t-blue-600 transition-colors ${
              isDarkMode ? 'bg-[#161619] border-[#2A2A30]' : 'bg-white border-[#E2E0D8]'
            }`}>
              <div className={`text-3xl font-bold tracking-tight font-mono ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}`}>0.95</div>
              <div className={`text-sm font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-[#1E293B]'}`}>Macro-F1 Score</div>
              <div className={`text-xs mt-0.5 leading-relaxed ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                Multimodal deep learning malware detection on 14,000+ samples
              </div>
            </div>

            <div className={`border rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] border-t-4 border-t-rose-600 transition-colors ${
              isDarkMode ? 'bg-[#161619] border-[#2A2A30]' : 'bg-white border-[#E2E0D8]'
            }`}>
              <div className={`text-3xl font-bold tracking-tight font-mono ${isDarkMode ? 'text-rose-400' : 'text-rose-900'}`}>97%</div>
              <div className={`text-sm font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-[#1E293B]'}`}>Classification Accuracy</div>
              <div className={`text-xs mt-0.5 leading-relaxed ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                Automated histopathology tissue CNN (ResNet-50 & MobileNet)
              </div>
            </div>

            <div className={`border rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] border-t-4 border-t-emerald-600 transition-colors ${
              isDarkMode ? 'bg-[#161619] border-[#2A2A30]' : 'bg-white border-[#E2E0D8]'
            }`}>
              <div className={`text-3xl font-bold tracking-tight font-mono ${isDarkMode ? 'text-emerald-400' : 'text-emerald-900'}`}>90%</div>
              <div className={`text-sm font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-[#1E293B]'}`}>Unit Test Coverage</div>
              <div className={`text-xs mt-0.5 leading-relaxed ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                TDD adoption with NUnit & JUnit across microservices teams
              </div>
            </div>

            <div className={`border rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] border-t-4 border-t-amber-600 transition-colors ${
              isDarkMode ? 'bg-[#161619] border-[#2A2A30]' : 'bg-white border-[#E2E0D8]'
            }`}>
              <div className={`text-3xl font-bold tracking-tight font-mono ${isDarkMode ? 'text-amber-400' : 'text-amber-900'}`}>50%</div>
              <div className={`text-sm font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-[#1E293B]'}`}>Debt & Latency Slashed</div>
              <div className={`text-xs mt-0.5 leading-relaxed ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                Microservice modularity refactoring & landing page optimization
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-400 ${
        isDarkMode
          ? 'border-[#232328] bg-gradient-to-b from-[#0E0E10] to-[#121215]'
          : 'border-[#ECEAE3] bg-gradient-to-b from-[#FBFBF9] to-[#F8F7F2]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-1 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-900'
              }`}>
                <Terminal size={14} className="text-blue-500" />
                <span>Selected Works</span>
              </div>
              <h2 className={`text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#09090B]'}`}>
                Featured Projects
              </h2>
            </div>
            {effectiveFilter && (
              <span className={`text-xs font-mono px-2.5 py-1 rounded border ${
                isDarkMode
                  ? 'text-blue-300 bg-blue-950/60 border-blue-800/60'
                  : 'text-blue-800 bg-blue-50 border-blue-200'
              }`}>
                {filteredProjects.length} of {projectsData.length} shown
              </span>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className={`border rounded-2xl p-8 text-center ${
              isDarkMode ? 'bg-[#161619] border-[#2A2A30] text-[#94A3B8]' : 'bg-white border-[#E2E0D8] text-[#71717A]'
            }`}>
              <p className="text-sm">No projects matching "{effectiveFilter}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedKeyword('All');
                }}
                className="mt-3 text-xs font-semibold text-blue-500 hover:underline"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className={`border ${project.accentBorder} border-t-4 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group ${
                    isDarkMode
                      ? 'bg-[#161619] border-[#2A2A30] hover:border-[#383842] shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
                      : 'bg-white border-[#E2E0D8] hover:border-[#D5D3CA] shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
                  }`}
                >
                  <div>
                    {/* Top Row: Category + Benchmark Badge + Links */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        isDarkMode
                          ? `${project.badgeBgDark} ${project.badgeTextDark} ${project.badgeBorderDark}`
                          : `${project.badgeBg} ${project.badgeText} ${project.badgeBorder}`
                      }`}>
                        {project.category}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        {project.metrics && (
                          <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded border ${
                            isDarkMode
                              ? 'bg-[#202026] text-[#CBD5E1] border-[#2A2A32]'
                              : 'bg-[#F4F3ED] text-[#334155] border-[#E5E4DD]'
                          }`}>
                            {project.metrics}
                          </span>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-1 transition-colors ${
                              isDarkMode ? 'text-[#94A3B8] hover:text-white' : 'text-[#64748B] hover:text-[#09090B]'
                            }`}
                            title="View Repository"
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold tracking-tight mb-2 flex items-center justify-between transition-colors ${
                      isDarkMode ? 'text-white group-hover:text-blue-300' : 'text-[#09090B] group-hover:text-blue-950'
                    }`}>
                      <span>{project.title}</span>
                      <ArrowUpRight size={17} className={`transition-colors shrink-0 ${
                        isDarkMode ? 'text-[#64748B] group-hover:text-blue-400' : 'text-[#94A3B8] group-hover:text-blue-600'
                      }`} />
                    </h3>

                    {/* High-level Description */}
                    <p className={`text-sm leading-relaxed mb-4 ${
                      isDarkMode ? 'text-[#94A3B8]' : 'text-[#475569]'
                    }`}>
                      {project.desc}
                    </p>

                    {/* Project Bullet Points from Resume */}
                    <ul className={`space-y-2 mb-6 text-xs sm:text-sm leading-relaxed p-3.5 rounded-xl border ${
                      isDarkMode
                        ? 'bg-[#1D1D24] border-[#2A2A34] text-[#CBD5E1]'
                        : 'bg-[#FAF9F5] border-[#EDEBE3] text-[#334155]'
                    }`}>
                      {project.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className={`pt-3 border-t flex flex-wrap gap-1.5 ${
                    isDarkMode ? 'border-[#232328]' : 'border-[#F0EFE8]'
                  }`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        onClick={() => {
                          setSearchQuery(tag);
                          setSelectedKeyword('');
                        }}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded cursor-pointer transition-colors border ${
                          effectiveFilter && tag.toLowerCase().includes(effectiveFilter.toLowerCase())
                            ? 'bg-blue-600 text-white font-medium border-blue-600'
                            : isDarkMode
                              ? 'bg-[#202026] text-[#94A3B8] border-[#2A2A32] hover:bg-blue-950/60 hover:text-blue-300'
                              : 'bg-[#F2F1EA] text-[#475569] border-transparent hover:bg-blue-50 hover:text-blue-900'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack / Skills Section */}
      <section id="skills" className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-400 ${
        isDarkMode ? 'border-[#232328]' : 'border-[#ECEAE3]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-1 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-900'
          }`}>
            <Cpu size={14} className="text-blue-500" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl font-bold tracking-tight mb-8 ${isDarkMode ? 'text-white' : 'text-[#09090B]'}`}>
            Tech Stack & Tooling
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all flex flex-col justify-between ${
                  isDarkMode
                    ? 'bg-[#161619] border-[#2A2A30] hover:border-[#383842]'
                    : 'bg-white border-[#E2E0D8] hover:border-[#D5D3CA]'
                }`}
              >
                <div>
                  <div className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border mb-3 ${
                    isDarkMode ? cat.accentDark : cat.accentLight
                  }`}>
                    {cat.title}
                  </div>
                  <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>{cat.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => {
                          setSearchQuery(skill);
                          setSelectedKeyword('');
                          scrollTo('experience');
                        }}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors border ${
                          isDarkMode
                            ? 'bg-[#202026] hover:bg-blue-950/60 hover:text-blue-300 text-[#CBD5E1] border-[#2A2A32]'
                            : 'bg-[#F6F5F0] hover:bg-blue-50 hover:text-blue-900 hover:border-blue-200 text-[#334155] border-[#EAE8E0]'
                        }`}
                        title={`Filter portfolio for ${skill}`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`border rounded-3xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] text-center relative overflow-hidden transition-colors ${
            isDarkMode
              ? 'bg-[#161619] border-[#2A2A30]'
              : 'bg-white border-[#E0DED5]'
          }`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500"></div>

            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mx-auto mb-5 ${
              isDarkMode
                ? 'bg-blue-950/60 border-blue-800/60 text-blue-300'
                : 'bg-blue-50 border-blue-200/80 text-blue-700'
            }`}>
              <Mail size={22} />
            </div>

            <h2 className={`text-3xl font-bold tracking-tight mb-3 ${isDarkMode ? 'text-white' : 'text-[#09090B]'}`}>
              Let's Connect
            </h2>
            <p className={`text-base leading-relaxed max-w-xl mx-auto mb-8 ${
              isDarkMode ? 'text-[#94A3B8]' : 'text-[#52525B]'
            }`}>
              I am open to discussions regarding full-time software engineering roles, distributed systems architectures, and high-impact engineering opportunities.
            </p>

            {/* Direct Email Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href="mailto:abinbinusam@gmail.com"
                className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold active:scale-[0.98] transition-all shadow-sm flex items-center justify-center gap-2 ${
                  isDarkMode
                    ? 'bg-white text-black hover:bg-slate-200'
                    : 'bg-[#18181B] text-white hover:bg-blue-950'
                }`}
              >
                <Send size={16} className={isDarkMode ? 'text-blue-700' : 'text-blue-300'} />
                <span>Send Email directly</span>
              </a>

              <button
                onClick={copyEmailToClipboard}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-xl border text-sm font-medium active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${
                  isDarkMode
                    ? 'bg-[#202026] border-[#2A2A32] text-[#E2E8F0] hover:bg-[#282830]'
                    : 'bg-[#F8F7F2] border-[#D5D3CA] text-[#27272A] hover:bg-[#EFEFE8]'
                }`}
              >
                {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className={isDarkMode ? 'text-[#94A3B8]' : 'text-[#71717A]'} />}
                <span className={copiedEmail ? 'text-emerald-400 font-semibold' : ''}>
                  {copiedEmail ? 'Copied to Clipboard!' : 'Copy: abinbinusam@gmail.com'}
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className={`flex items-center justify-center gap-4 pt-6 border-t text-sm ${
              isDarkMode ? 'border-[#232328] text-[#94A3B8]' : 'border-[#F0EFE8] text-[#52525B]'
            }`}>
              <a
                href="https://github.com/abinbs"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 font-medium transition-colors ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-blue-900'
                }`}
              >
                <Github size={17} />
                <span>GitHub</span>
              </a>
              <span className={isDarkMode ? 'text-[#334155]' : 'text-[#CBD5E1]'}>•</span>
              <a
                href="https://linkedin.com/in/abinbinusam"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 font-medium transition-colors ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-blue-900'
                }`}
              >
                <Linkedin size={17} />
                <span>LinkedIn</span>
              </a>
              <span className={isDarkMode ? 'text-[#334155]' : 'text-[#CBD5E1]'}>•</span>
              <a
                href="mailto:abinbinusam@gmail.com"
                className={`flex items-center gap-1.5 font-medium transition-colors ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-blue-900'
                }`}
              >
                <Mail size={17} />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Footer */}
          <footer className={`mt-12 pt-6 border-t text-xs flex flex-col sm:flex-row items-center justify-between gap-3 ${
            isDarkMode ? 'border-[#232328] text-[#64748B]' : 'border-[#ECEAE3] text-[#71717A]'
          }`}>
            <div>
              © 2026 Abin Binu Sam. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Canada</span>
              <button
                onClick={() => setIsMinimal(true)}
                className={`underline font-medium ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-900'}`}
              >
                Switch to Simple UI
              </button>
            </div>
          </footer>
        </div>
      </section>

    </div>
  );
};

export default App;