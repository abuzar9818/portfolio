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