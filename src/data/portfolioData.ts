import type {
  PersonalInfo,
  ProfessionalPositioning,
  SocialLinks,
  StatItem,
  Skill,
  Project,
  ExperienceItem,
  EducationItem,
  Certification,
  Achievement,
  ServiceItem,
} from "../types/portfolio";
export const personalInfo: PersonalInfo = {
  name: "KISHOR S",
  displayName: "Kishor S",
  title: "ASPIRING IT PROFESSIONAL",
  tagline:
    "Building practical digital experiences through web design, software development, and technology.",
  location: "Karur, Tamil Nadu, India",
  email: "kishorsugam2006@gmail.com",
  phone: "9092904043",
  avatarUrl: "/assets/photos/kishor-profile.png",
  aboutImageUrl: "/assets/photos/kishor-about.png",
  resumeUrl: "/assets/resume/Kishor_S_Resume.pdf",
  availability: {
    status: "available",
    message: "Open for IT Internships, Web Development & Entry-Level Roles",
  },
};
export const professionalPositioning: ProfessionalPositioning = {
  primaryRole: "Aspiring IT Professional",
  secondaryRole: "Web Designer & Full Stack Developer",
  yearsOfExperience: "Entry Level",
  currentFocus:
    "Developing responsive web applications, mobile interfaces, and real-time cloud tracking engines.",
  careerGoal:
    "To apply web development, software engineering, and analytical skills to solve real-world problems in a collaborative technology ecosystem.",
};
export const socialLinks: SocialLinks = {
  github: "https://github.com/kishorsugam2006-coder",
  linkedin: "https://www.linkedin.com/in/kishor-s-5640b4290/",
  figma:
    "https://www.figma.com/files/team/1595693935184427790/user/1595693933161324891?fuid=1595693933161324891",
  leetcode: "https://leetcode.com/u/kishor_56/",
  hackerrank: "https://www.hackerrank.com/profile/kishorsugam2006",
};
export const stats: StatItem[] = [
  {
    label: "Featured Projects",
    value: "3",
    description: "IoT, Real-time Navigation & AI systems",
  },
  {
    label: "Industry Exposure",
    value: "Full Stack",
    description: "Internship at Movicloud Labs",
  },
  {
    label: "Technical Domains",
    value: "4+",
    description: "Web, Mobile, Databases & Data Analysis",
  },
  {
    label: "NPTEL Certification",
    value: "Silver",
    description: "Human Computer Interaction (IIT Kharagpur)",
  },
];
export const skills: Skill[] = [
  { name: 'Java', category: 'Programming', level: 'Core Skill' },
  { name: 'Python', category: 'Programming', level: 'Working Knowledge' },
  { name: 'HTML', category: 'Web', level: 'Core Skill' },
  { name: 'CSS', category: 'Web', level: 'Core Skill' },
  { name: 'JavaScript', category: 'Web', level: 'Core Skill' },
  { name: 'Firebase', category: 'Database', level: 'Core Skill' },
  { name: 'Figma', category: 'Tools & Platforms', level: 'Tool' },
  { name: 'Canva', category: 'Tools & Platforms', level: 'Tool' },
  { name: 'Antigravity', category: 'Tools & Platforms', level: 'Tool' },
];
export const softSkills = [
  "Positive Thinker",
  "Teamwork",
  "Willingness to Learn",
  "Adaptability",
];
export const projects: Project[] = [
  {
    id: "health-monitoring-wearable",
    title: "Continuous Health Monitoring Using Wearable Sensors",
    tagline:
      "Real-time patient vital tracking and 24/7 medical data analysis platform.",
    description:
      "Developed a continuous health monitoring system utilizing wearable sensors connected to Python and Dart backends to track patient vitals in real-time, enabling continuous data analysis for timely medical intervention.",
    category: "Mobile & IoT",
    technologies: [
      "Python",
      "Dart",
      "Wearable Sensors",
      "Real-Time Data",
      "Data Analysis",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    featuredImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
    date: "2026",
    role: "Developer & Data Analyst",
    featured: true,
    caseStudy: {
      overview:
        "A continuous health monitoring solution engineered with wearable hardware sensors, Python data analysis pipelines, and Dart interfaces for tracking patient vitals in real-time.",
      problem:
        "Traditional patient health monitoring often relies on manual, periodic checkups, leading to delays in detecting sudden vital irregularities or emergency health shifts.",
      solution:
        "Constructed an automated real-time telemetry pipeline that ingests sensor data continuously, processes vital metric trends in Python, and presents patient health indicators on a responsive Dart application.",
      challenges:
        "Ensuring seamless 24/7 sensor data transmission without signal packet drops while analyzing continuous streaming vital metrics.",
      outcome:
        "Enabled 24/7 continuous health tracking and automated data assessment, providing medical professionals with timely data insights for patient care.",
      keyFeatures: [
        "Real-time patient vital tracking (heart rate, temperature, activity)",
        "24/7 continuous health metric data analysis pipeline",
        "Timely medical insights & health status alert indicators",
        "Cross-platform mobile & web display built with Dart & Python",
      ],
    },
  },
  {
    id: "live-bus-tracking-system",
    title: "Live Bus Tracking System with Real Road Navigation",
    tagline:
      "Cloud-powered transit navigation, accurate location updates, and delay alerts.",
    description:
      "Engineered a comprehensive live transit navigation system featuring real road navigation, accurate location updates, route optimization, arrival notifications, delay alerts, and route-change warnings.",
    category: "Web Development",
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "GPS Navigation",
      "Cloud Alerts",
      "Route Optimization",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    featuredImage:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
    date: "2025",
    role: "Full Stack Web Developer",
    featured: true,
    caseStudy: {
      overview:
        "A smart public transit tracking application that provides commuters with real-time road navigation, accurate bus arrival estimates, and instant cloud-based route notifications.",
      problem:
        "Commuters frequently experience uncertainty due to unexpected traffic delays, unannounced route changes, and inaccurate bus arrival timings.",
      solution:
        "Developed an interactive web dashboard integrating real road GPS navigation, dynamic route optimization, and a cloud messaging service for instant delay and arrival alerts.",
      challenges:
        "Recalculating optimal detour routes in real time during live traffic disruptions.",
      outcome:
        "Delivered accurate location tracking, dynamic route guidance, and instant arrival alerts to streamline public commute experiences.",
      keyFeatures: [
        "Real-time road navigation & accurate GPS bus tracking",
        "Dynamic route optimization for transit efficiency",
        "Cloud-based instant arrival & delay notifications",
        "Automated route-change broadcast alerts",
      ],
    },
  },
  {
    id: "ai-career-guidance",
    title: "AI-Powered Career Guidance System",
    tagline:
      "Intelligent multi-model recommendation engine based on user preferences.",
    description:
      "Created an AI-driven career guidance platform that evaluates multiple recommendation models to provide intelligent career and skill pathways tailored to user input and preferences.",
    category: "AI / ML",
    technologies: [
      "Python",
      "AI Recommendation Models",
      "Data Analysis",
      "HTML/CSS",
      "JavaScript",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    featuredImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
    date: "2025",
    role: "AI Developer & Frontend Lead",
    featured: true,
    caseStudy: {
      overview:
        "An intelligent career advisement engine that analyzes student skills, interests, and academic background to suggest optimal career directions.",
      problem:
        "Students often lack structured insight into technical career choices aligned with their specific strengths and emerging IT job requirements.",
      solution:
        "Built an AI application comparing multiple predictive recommendation models against user profile inputs to output personalized career and skill roadmaps.",
      challenges:
        "Comparing disparate prediction model outputs to ensure accurate, balanced career guidance.",
      outcome:
        "Provided intelligent, data-driven career recommendations customized to individual user profiles.",
      keyFeatures: [
        "Multi-model AI recommendation comparison engine",
        "Interactive user preference & skill input questionnaire",
        "Intelligent career path & skill roadmap suggestions",
        "Clean, scannable recommendation dashboard",
      ],
    },
  },
];
export const experience: ExperienceItem[] = [
  {
    id: "exp-movicloud-labs",
    role: "Frontend Developer Intern",
    company: "MOVICLOUD LABS PVT. LTD.",
    project: "BOXWAY",
    internshipId: "INT10168",
    year: "IV Year",
    college: "M. Kumarasamy College of Engineering, Karur",
    location: "Dindigul, Tamil Nadu",
    period: "January–April & June 2026",
    type: "Internship",
    description: [
      "Completed an internship as a Frontend Developer Intern at MoviCloud Labs Pvt. Ltd., associated with the BOXWAY project and participating in assigned activities and learning sessions.",
      "Developed responsive, user-friendly frontend interfaces for web and mobile applications.",
      "Assisted in designing modular and reusable UI components across product modules.",
      "Focused on enhancing application performance, code maintainability, and clean UI standards.",
      "Gained hands-on full-stack development experience working with modern frontend workflows.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "UI Components",
      "Full Stack Development",
    ],
    achievements: [
      "Successfully completed the internship as a Frontend Developer Intern at MoviCloud Labs Pvt. Ltd.",
      "Associated with the BOXWAY project and participated in assigned activities and learning sessions.",
    ],
  },
];
export const education: EducationItem[] = [
  {
    id: "edu-btech",
    degree: "Bachelor of Technology in Information Technology",
    institution: "M. Kumarasamy College of Engineering",
    periodOrYear: "Currently Pursuing",
    scoreOrStatus: "CGPA: 6.9",
  },
  {
    id: "edu-hsc",
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Cheran Matric Higher Secondary School",
    periodOrYear: "2023",
    scoreOrStatus: "75.5%",
  },
  {
    id: "edu-sslc",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Cheran Matric Higher Secondary School",
    periodOrYear: "2021",
    scoreOrStatus: "Status: PASS",
  },
];
export const achievements: Achievement[] = [
  {
    id: "ach-nptel",
    title: "Silver Badge in Human Computer Interaction (in English)",
    organization: "NPTEL — IIT Kharagpur",
    details:
      "Demonstrated proficiency in user interface principles, accessibility design, and usability engineering.",
  },
];
export const internshipCertificate: Certification = {
  id: "cert-internship-boxway",
  title: "Internship Completion Certificate",
  role: "Frontend Developer Intern",
  issuer: "MoviCloud Labs Pvt. Ltd.",
  project: "BOXWAY",
  internshipId: "INT10168",
  period: "January–April & June 2026",
  file: "/assets/certificates/kishor-internship-certificate.pdf",
};
export const certifications: Certification[] = [
  {
    id: "cert-fortinet-nse4-2026",
    title: "Fortinet NSE 4 Certified in FortiOS",
    issuer: "Fortinet Training Institute",
    recipient: "Kishor S",
    period: "July 25, 2026",
    validUntil: "July 25, 2028",
    certificateNumber: "7313183518KS",
    verificationUrl:
      "https://training.fortinet.com/admin/tool/certificate/index.php",
    file: "/assets/certificates/fortinet-nse-4-certified-fortios.pdf",
  },
  {
    id: "cert-iot-2025",
    title: "Introduction To Internet Of Things",
    issuer: "NPTEL",
    period: "Jan–Apr 2025",
    courseDuration: "12 week course",
    score: "54%",
    certificateNumber: "NPTEL25CS44S449000180",
    file: "/assets/certificates/intro-iot.pdf",
  },
  {
    id: "cert-industry-4-iot-2025",
    title: "Introduction to Industry 4.0 and Industrial Internet of Things",
    issuer: "NPTEL",
    period: "Jul–Oct 2025",
    courseDuration: "12 week course",
    score: "65%",
    certificateNumber: "NPTEL25CS146S1060200546",
    file: "/assets/certificates/industry4-iot.pdf",
  },
  {
    id: "cert-hci-2026",
    title: "Human Computer Interaction (In English)",
    issuer: "NPTEL",
    period: "Jan–Apr 2026",
    courseDuration: "12 week course",
    achievement: "Elite",
    score: "81%",
    credits: "4 credits recommended",
    certificateNumber: "NPTEL26CS70S258100279",
    file: "/assets/certificates/human-computer-interaction.pdf",
  },
  {
    id: "cert-cloud-computing-2025",
    title: "Cloud Computing",
    issuer: "NPTEL",
    period: "Jul–Oct 2025",
    courseDuration: "12 week course",
    score: "55%",
    certificateNumber: "NPTEL25CS107S360200420",
    file: "/assets/certificates/cloud-computing.pdf",
  },
];
export const services: ServiceItem[] = [
  {
    id: "service-web-dev",
    title: "Web Application Development",
    shortDesc:
      "Designing and developing responsive, user-friendly websites using modern HTML, CSS, JavaScript, PHP, and SQL.",
    deliverables: [
      "Responsive Web Pages",
      "Semantic HTML5/CSS3 Interfaces",
      "Database Integration with MySQL",
      "Clean Code Practices",
    ],
    icon: "Code",
  },
  {
    id: "service-ui-design",
    title: "UI Component & Web Design",
    shortDesc:
      "Creating clean user interface wireframes and reusable components in Figma and Canva.",
    deliverables: [
      "Figma UI Prototypes",
      "Reusable Component Layouts",
      "Mobile-First Responsive Designs",
      "Visual Consistency Audit",
    ],
    icon: "Layout",
  },
  {
    id: "service-data-tech",
    title: "Data & Technical Solutions",
    shortDesc:
      "Assisting in basic data analysis, real-time tracking integration, and structured SQL data queries.",
    deliverables: [
      "SQL Queries & Relational Setup",
      "IoT / Wearable Sensor Data Analysis",
      "AI Recommendation Workflows",
      "Performance Maintenance",
    ],
    icon: "Zap",
  },
];
