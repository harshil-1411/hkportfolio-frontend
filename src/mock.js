// Mock data for Harshil Kharbanda's Portfolio
export const mockData = {
  personal: {
    name: "Harshil Kharbanda",
    role: "Full-Stack Web Developer",
    location: "Ludhiana, Punjab, India",
    education:
      "MCA - Gujranwala Guru Nanak Institute of Management & Technology",
    headshot:
      "./images/avatar.png",
    bio: "I’m a full-stack developer who’s genuinely passionate about building things that make life just a little bit easier—and more enjoyable—for others. Whether I’m designing a slick front-end or working behind the scenes on complex logic, I’m happiest when I can blend creativity with problem-solving. I love exploring new technologies, turning big ideas into real web experiences, and helping people bring their visions to life online. Every project is a chance to learn, grow, and connect through code.",
    email: "harshilkharbanda14@gmail.com",
    phone: "+91-9780031966",
    linkedin: "https://linkedin.com/in/harshilkharbanda",
    github: "https://github.com/harshilkharbanda",
    portfolio: "harshilkharbanda.netlify.app",
    resumeUrl: "#",
  },

  skills: {
    frontend: [
      { name: "HTML5", icon: "Code", experience: "3+ years" },
      { name: "CSS3", icon: "Palette", experience: "3+ years" },
      { name: "JavaScript", icon: "Code2", experience: "2+ years" },
      { name: "React.js", icon: "Component", experience: "2+ years" },
      { name: "Next.js", icon: "Zap", experience: "1+ year" },
      { name: "Tailwind CSS", icon: "Paintbrush", experience: "2+ years" },
      { name: "Bootstrap", icon: "Layout", experience: "2+ years" },
    ],
    backend: [
      { name: "Node.js", icon: "Server", experience: "1+ year" },
      { name: "Express.js", icon: "Database", experience: "1+ year" },
      { name: "RESTful APIs", icon: "Globe", experience: "1+ year" },
    ],
    database: [
      { name: "MongoDB", icon: "Database", experience: "1+ year" },
      { name: "SQL", icon: "HardDrive", experience: "1+ year" },
    ],
    tools: [
      { name: "Git", icon: "GitBranch", experience: "2+ years" },
      { name: "GitHub", icon: "Github", experience: "2+ years" },
      { name: "VS Code", icon: "Code", experience: "3+ years" },
    ],
  },

  experience: [
    {
      id: 1,
      position: "Full Stack Web Developer Intern",
      company: "Labmentix",
      duration: "June 2025 - Present",
      location: "Remote",
      responsibilities: [
        "Developing responsive web applications using React.js and Node.js",
        "Implementing RESTful APIs and database integration with MongoDB",
        "Collaborating with cross-functional teams on feature development",
        "Optimizing application performance and user experience",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Tailwind CSS",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Odit Solutions",
      description:
        "ODIT Solutions Inc. offers expert IT and low-voltage services across Canada, including AV installations, network setups, security systems, and 24/7 tech support. Known for their integrity and flexibility, they help both businesses and homeowners modernize and secure their technology environments",
      image: "/images/odit.jpg",
      technologies: ["React.js", "Tailwind CSS", "Web Hosting"],
      liveDemo: "https://oditsolutions.ca",
      githubRepo: "",
      category: "Frontend",
      featured: true,
    },
    {
      id: 2,
      title: "Signy",
      description:
        "Signy is a document signing app built with the MERN stack, enabling users to securely sign and manage documents online.",
      image: "/images/signsy.png",
      technologies: [
        "ReactJS",
        "NodeJs",
        "Express",
        "MongoDB Atlas",
        "Full-stack web hosting ",
      ],
      liveDemo: "https://signsy.vercel.app",
      githubRepo: "",
      category: "Full-Stack",
      featured: true,
    },
    {
      id: 3,
      title: "Corte Salon",
      description:
        "A premium salon website offering seamless appointment booking, services showcase, and modern UI for an upscale experience.",
      image: "/images/main-logo.png",
      technologies: ["React.js", "Bootstrap", "Web Hosting"],
      liveDemo: "https://corteindia.com",
      githubRepo: "",
      category: "Frontend",
      featured: true,
    },
  ],

  stats: {
    projectsCompleted: 4,
    yearsExperience: 1,
    clientsSatisfied: 4,
  },

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Project Manager at TechCorp",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100",
      content:
        "Harshil delivered exceptional work on our web application project. His attention to detail and technical expertise made the collaboration seamless.",
    },
    {
      id: 2,
      name: "Mike Chen",
      position: "Senior Developer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      content:
        "Working with Harshil was a great experience. He brings fresh ideas and implements them with clean, maintainable code.",
    },
  ],
};

// Form submission handlers (mock)
export const mockAPI = {
  submitContactForm: async (formData) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Contact form submitted:", formData);
        resolve({ success: true, message: "Message sent successfully!" });
      }, 1000);
    });
  },

  downloadResume: () => {
    // Simulate resume download
    console.log("Resume download initiated");
    return { success: true, message: "Resume download started" };
  },
};
