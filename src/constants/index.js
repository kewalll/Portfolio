import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a strong foundation in both front-end and back-end technologies. With hands-on experience in web development, I have built scalable and efficient web applications that solve real-world problems. My expertise lies in technologies like React, Node.js, MongoDB, and PostgreSQL, and I strive to continuously learn and adapt to new challenges. I am driven to create innovative solutions with a focus on user experience and business growth.`; 

export const ABOUT_TEXT = `I am a dedicated full stack developer with a background in building high-quality web applications. Currently pursuing a B.Tech in Computer Science and Engineering, I have gained experience in technologies like React, Node.js, and MongoDB through multiple projects. My ability to tackle complex problems, collaborate with teams, and deliver solutions has been key in my journey. Beyond web development, I enjoy working on projects that involve emerging technologies such as blockchain and AI. I'm always eager to learn and contribute to open-source communities.`; 

export const EXPERIENCES = [
  
  {
    year: "March 2024 - Present",
    role: "Treasurer",
    company: "ACM SIT Pune",
    description: `Managing finances for the ACM Chapter. Successfully organized workshops and an International Project competition with 400+ participants.`,
    technologies: ["Financial Management", "Documentation"],
  },
  {
    year: "September 2022 - Present",
    role: "Co-Head Finance",
    company: "Wrench Wielders Racing",
    description: `Collaborated with the team to manage the budget for a Formula Student racing team. Secured AIR-1 in Business Presentation at SAE Supra 2023 at BIC, Noida.`,
    technologies: ["Budget Management", "Cost Optimization","Finance Management","Financial Modelling"],
  },
  {
    year: "June 2024 - November 2024",
    role: "Community Work Facilitator",
    company: "ISKCON NVCC Pune",
    description: `Developing an E-Learning Application for ISKCON’s spiritual education, targeting over 100,000 devotees globally using MERN stack and Zoom API integration.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Zoom API"],
  },
  {
    year: "July 2019 - January 2020",
    role: "Team Leader",
    company: "Robotics Team, Nirma Vidyavihar",
    description: `Led the team in designing and building a robot for Nirma National Robocup, securing AIR 3.`,
    technologies: ["Arduino", "C++", "Robot Design"],
  },
];

export const PROJECTS = [
  {
    title: "Blog Nest",
    image: project6,
    description: `Developed a Blog Application with Gemini Integration to automate content generation based on user-provided prompts, enhancing user engagement and streamlining the creation process..`,
    technologies: ["React.js","Node.js", "Express", "Render","MongoDB","Firebase","Gemini AI Integration"],
    githubLink:'https://github.com/kewalll/Blog-Nest',
    liveLink:'https://blog-nest-5d37.onrender.com/'
  },
  {
    title: "UNI-DRIVE",
    image: project2,
    description: `A sustainable transportation solution for student commuting challenges, deployed with Node.js and Express on Render.`,
    technologies: ["Node.js", "Express", "Render","MongoDB"],
    githubLink:'https://github.com/kewalll/UniDrive',
    liveLink:'https://mhfinal.onrender.com/'
  },
  {
    title: "Digital Twin",
    image: project3,
    description: `A decentralized application for secure document management using blockchain and IPFS, ensuring data security and authenticity.`,
    technologies: ["Blockchain", "IPFS", "Smart Contracts"],
    githubLink:'https://github.com/kewalll/Digital-Twin',
    liveLink:'https://dplat.zbyte.io/app/digital-twin-final-final/home-page-copy-6637dbdb6643ad3a17517322'
  },
  {
    title: "Face Recognition Door Access Control System",
    image: project4,
    description: `A door access control system using facial recognition with OpenCV and Telegram bot integration to authorize access.`,
    technologies: ["Python", "OpenCV", "Arduino", "Telegram API"],
    githubLink:'https://github.com/kewalll/Face-Recognition-Door-Access-Control-System'
  },
  {
    title: "Cafe Order Management System",
    image: project5,
    description: `A Java-based cafe order management system streamlining order processing, tracking, and inventory management for efficient cafe operations.`,
    technologies: ["MySQL", "Java"],
    githubLink:'https://github.com/kewalll/Cafe-Order-Management-System'
  },
  {
    title: "E-Learning APP",
    image: project1,
    description: `A web application developed for ISKCON NVCC using the MERN stack and Zoom API to deliver spiritual knowledge to a global audience.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Zoom API"],
    githubLink:'https://github.com/priyankag12/service-learning-project'
  },
];

export const CONTACT = {
  phoneNo: "+91 9081811653",
  email: "kewal210504@gmail.com",
};
