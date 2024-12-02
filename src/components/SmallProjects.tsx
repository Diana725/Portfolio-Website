import { Code } from 'lucide-react';

interface SmallProject {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  image: string; // Added the image property to each project
}

const smallProjects: SmallProject[] = [
    {
        title: "E-Commerce Frontend",
        description: "A fully responsive e-commerce frontend built with React and styled-components.",
        technologies: ["React", "JavaScript", "CSS", "Bootstrap"],
        githubLink: "https://github.com/Diana725/ecomm-project/",
        image: "/src/assets/images/other projects2.png"
      },
  {
    title: "Mole Feeding Game",
    description: "An interactive game where players feed a hungry mole, demonstrating DOM manipulation and game logic.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/Diana725/Frontend-Projects/tree/main/Mole%20Game",
    image: "/src/assets/images/molegame.png" 
  },
  {
    title: "Coffee Site",
    description: "A simple coffee shop website showcasing responsive design and clean UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Diana725/Frontend-Projects/tree/main/Coffee%20site",
    image: "/src/assets/images/coffee-site.png"
  },
  
  {
    title: "Word Game",
    description: "A word puzzle game similar to Wordle, demonstrating React state management and word validation.",
    technologies: ["HTML", "JavaScript", "CSS"],
    githubLink: "https://github.com/Diana725/Frontend-Projects/tree/main/word%20game",
    image: "/src/assets/images/wordgame.png"
  }
];

export default function SmallProjects() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center mb-2">Other Projects</h3>
        <div className="container mb-9">
          <p className="text-gray-600 text-sm md:text-base font-normal mx-auto text-center">
            In addition to my core projects, I have actively worked on a variety of demo projects aimed at enhancing my web development skills. These projects, including but not limited to "Ecommerce-Frontend," "Coffee Site," "Mole Game," and "Word Game," allowed me to explore different aspects of web development. Each project was an opportunity to experiment with new technologies, improve my problem-solving abilities, and gain hands-on experience with various development tools.
          </p>
          <div className="text-center mt-4">
    <a href="https://github.com/Diana725/Frontend-Projects/" target="_blank" rel="noopener noreferrer"
       className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200">
      View My Other Projects
    </a>
  </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {smallProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              {/* Display the image on top of the card */}
              <img src={project.image} alt={project.title} className="w-full h-55 object-cover rounded-t-lg mb-4" />
              
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                   className="flex items-center text-gray-700 hover:text-blue-600">
                  <Code className="w-4 h-4 mr-1" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
