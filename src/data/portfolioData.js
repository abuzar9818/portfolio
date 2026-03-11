export const portfolioData = {
  personalInfo: {
    name: "Abuzar Ahmad",
    tagline: "Full Stack Developer",
    email: "abuzarahmad678@gmail.com",

    location: "Bengaluru, India",
    linkedin: "https://www.linkedin.com/in/abuzar-ahmad-226a4a279/",
    github: "https://github.com/abuzar9818"
  },
  
  
  skills: {
    programmingLanguages: ["Java", "JavaScript", "TypeScript", "C", "C++", "Python"],
    webTechnologies: ["HTML", "CSS", "Tailwind CSS", "React.js", "EJS", "Node.js", "Express.js", "RESTful APIs", "MongoDB"],
    developerTools: ["Git", "GitHub", "Visual Studio", "Firebase", "Postman", "Vercel", "Render", "SQL"],
    libraries: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch", "React Router", "Redux"]
  },
  
  projects: [
    {
      id: 1,
      title: "Urban Elite",
      technologies: "EJS, Node.js, MongoDB",
      description: "Designed a fully functional e-commerce web platform using Node.js, Express, MongoDB, and EJS incorporating features such as product browsing, cart functionality, wishlist, and secure checkout.",
      features: [
        "Developed user authentication, order processing, coupon discounting, and purchase-verified product reviews",
        "Created an admin dashboard with improved inventory efficiency, coupon system, and low stock notifications"
      ],
      github: "https://github.com/abuzar9818/Urban_Elite",
      live:"https://urban-elite.vercel.app"
    },
    {
      id: 2,
      title: "Mega Blog",
      technologies: "React, Tailwind, Appwrite",
      description: "Engineered a modern and responsive blogging platform using React, Vite, and TailwindCSS, allowing users to create, manage, and publish blog posts in a seamless manner.",
      features: [
        "Integrated Appwrite backend functionality for authentication, database management, and file storage",
        "Built complex functionality such as rich text editing using TinyMCE, Redux Toolkit for state management"
      ],
      github: "https://github.com/abuzar9818/Mega_Blog",
      live:"https://mega-blog-five-nu.vercel.app"
    },
    {
      id: 3,
      title: "Grow Therapy",
      technologies: "Typescript, CSS3, JavaScript",
      description: "Grow Therapy is a professional therapy practice website based in Santa Monica, CA, specializing in anxiety, trauma, and burnout treatment. The site showcases the services of Dr. Maya Reynolds, PsyD, a licensed clinical psychologist who offers personalized therapy for adults struggling with mental health challenges.",
      features: [
        "Professional presentation of therapy services",
        "Detailed information about treatment specialties",
        "Responsive design optimized for all devices"
      ],
      github: "https://github.com/abuzar9818/Grow_Therapy",
      live:"https://grow-therapy-one.vercel.app/"
    },
    {
      id: 4,
      title: "KaroStartup",
      technologies: "HTML5, CSS3, JavaScript",
      description: "Karo Pitch is a premium, high-converting startup discovery and pitching platform designed to bridge the gap between early-stage founders and active investors (Angels, VCs, and Syndicates) across India.",
      features: [
        "The Latest Startup News block uses a zero-dependency Continuous Infinite Slider.",
        "The Startup Ecosystem Statistics area uses an IntersectionObserver paired with an animation frame loop to visually count-up values (25Cr+, 120+) directly upon entering the user's viewport, providing instant engagement."
      ],
      github: "https://github.com/abuzar9818/KaroStartup",
      live:"https://karo-startup-sand.vercel.app"
    },
    {
      id: 5,
      title: "Scroll Animation",
      technologies: "TypeScript, Tailwind CSS, Javascript",
      description: "A high-performance, premium scroll-driven hero section built with React, Next.js, Tailwind CSS, and GSAP ScrollTrigger.This project was engineered to replicate top-tier, cinematic horizontal scrolling experiences directly tied to vertical scroll progression. By parsing scroll distance into explicit multi-stage translation and scaling rules, it creates the illusion of a luxury sports car dynamically driving out of the viewport.",
      features: [
        "The core of the interaction lies within HeroSection.tsx, which pins a 100vh container and intercepts normal scrolling for 2500px (end: "+=2500"). The scrubbing is intentionally delayed (scrub: 1.5) for a heavy, luxurious weight.",
        "Created a user-friendly interface that allows searching for weather information"
      ],
      github: "https://github.com/abuzar9818/Scroll_Animation",
      live:"https://abuzar9818.github.io/Scroll_Animation/"
    },
    {
      id: 6,
      title: "Weather App",
      technologies: "HTML5, CSS3, JavaScript, RapidAPI",
      description: "Built a responsive weather app using HTML5, CSS3, JavaScript, and Bootstrap to show real-time global updates.",
      features: [
        "Integrated the RapidAPI Weather API to display weather information such as temperature, humidity, pressure, visibility",
        "Created a user-friendly interface that allows searching for weather information"
      ],
      github: "https://github.com/abuzar9818/Weather-app",
      live:"https://weather-app-mu-one-32.vercel.app"
    },
  ],
  
  education: [
    {
      id: 1,
      institution: "Dayananda Sagar College of Engineering (DSCE), Bengaluru",
      degree: "Bachelor of Engineering in Computer Science and Design Engineering",
      duration: "Sep 2023 – Sep 2027",
      cgpa: "9.09/10"
    },
    {
      id: 2,
      institution: "City Montessori School",
      degree: "Class XII (ISC Board)",
      duration: "Apr 2021 – Mar 2022",
      percentage: "94%"
    },
    {
      id: 3,
      institution: "Seventh Day Adventist Senior Secondary  School",
      degree: "Class X (ICSE Board)",
      duration: "Apr 2019 – Mar 2020",
      percentage: "82%"
    },

  ],
  
  achievements: [
    {
      id: 1,
      title: "Selected Project, Smart India Hackathon (2025)",
      description: "Transformer-based Web Application Firewall shortlisted in the internal round"
    },
    {
      id: 2,
      title: "Operations Team Member, Team Recursion",
      description: "Organized and managed activities for the Udaya Hackathon"
    },
    {
      id: 3,
      title: "OCI 2025 Certified Generative AI Professional",
      description: "Credentialed by Oracle in Generative AI systems"
    },
    {
      id: 4,
      title: "Infosys Certified MongoDB Professional",
      description: "Certified through Infosys Springboard in Database Systems"
    }
  ]
};