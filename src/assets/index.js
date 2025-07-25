import project1 from "./project-1.png";
import library from "./library.png";
import project3 from "./project-3.jpg";
import project4 from "./project-4.jpg";
import food from './food del.jpeg';
import bosch from './bosch.png';
import portfolio from './portfolio.png';
import extion from './extion.png'

export const HERO_CONTENT = `At 19, I'm all about tech – it's my playground and my passion. I'm a natural learner, so diving into new coding languages like C++, Python, and JavaScript is like cracking open a good mystery novel. My enthusiasm for technology drives me to explore various fields, from software engineering to cybersecurity. The challenge of crafting intuitive solutions and solving complex problems is super exciting, and my learning curve is practically vertical. Give me a coding problem, and I'll be itching to solve it with an innovative approach!"`;

export const ABOUT_TEXT = `I'm a highly motivated student with a strong foundation in C++ and a passion for exploring new technologies. In addition to C++, I've delved into C, Python, JavaScript, and Node.js, further expanding my programming skillset. I'm also eager to learn and excel in app development, actively pursuing Android development using Kotlin and Jetpack Compose. My passion for innovation extends beyond the classroom; participating in challenges like Walmart CodeHers 2025 (where I was a finalist) and the Adobe GenSolve Solution Challenge (achieving top 5%) has not only honed my leadership and teamwork skills but has also led me to win several competitions! My experience as a PR Executive for Asmita and Director Secretary General for IIITA MUN'24, alongside conducting TEDx events and winning debates, further highlights my dedication to leadership, communication, and effective teamwork.`;

export const EXPERIENCES = [
  {
    year: "May 2025 - July 2025",
    role: "SDE Intern at Bosch Global Software (BGSW)",
    description: `Developed a computer vision-based system to estimate driver heart rate using NIR camera and iPPG signals without physical contact. Leveraged image processing and physiological signal extraction techniques for real-time health monitoring, aiming to enhance driver safety by integrating non-invasive biometric analysis into intelligent transport systems.`,
    image: bosch,
    technologies: ["Computer Vision", "Physiological Signal Extraction", "Image Processing"],
  },
  {
    year: "Dec 2024 - Feb 2025",
    role: "Cyber Security Intern at Extion Infotech",
    description: `Identified system vulnerabilities and recommended effective mitigation strategies to enhance security posture. Collaborated with team members in group discussions to analyze threats and brainstorm solutions, developing strong communication and problem-solving skills through real-world cybersecurity scenarios.`,
    image: extion,
    technologies: ["Threat Analysis", "Mitigation Strategies", "System Vulnerability Identification"],
  },
];

export const PROJECTS = [
  {
    title: "Stocklift: Dead Stock & Rescue Bot AI",
    image: project1,
    description:
"This e-commerce platform boosts sales with an AI-powered discount and bundle system, a Shopkeeper Dashboard for managing inventory and campaigns, and dynamic cultural promotions. It optimizes festive commerce by integrating AI for image and product description enhancement.",
    technologies: ["Python", "TensorFlow", "OpenAI API", "SQLite", "CSS"],
  },
  {
    title: "FoodXtra: Food Donation",
    image: project4,
    description:
    "This web platform streamlines food donation from events to families in need, allowing detailed food specification and tracking. It uses user feedback for continuous improvement, effectively connecting surplus food with those facing hunger.",
    technologies: ["Next.js", "JavaScript", "MongoDB", "CSS"],
  },
  {
    title: "Library Managemnet System",
    image: library,
    description:
"This is an automated library system that streamlines book issuing, returns, and user searches. It features an account system for reservations and borrowing history, significantly reducing manual effort and errors.",
    technologies: ["PHP", "SQL", "Java"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
