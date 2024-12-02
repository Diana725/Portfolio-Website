import ProjectDetails from './ProjectDetails';
import { projects } from '../data/projects.ts';

export default function Projects() {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
           <ProjectDetails
           key={index}
           title={project.title}
           description={project.description}
           features={project.features}
           technologies={project.technologies}
           image={project.images}
           githubLink={project.githubLink}
           demoLink={project.demoLink || ""}  // Default to empty string if undefined
           challenges={project.challenges || []}  // Default to empty array if undefined
           futureEnhancements={project.futureEnhancements || []}  // Default to empty array if undefined
           impact={project.impact || []}  // Default to empty array if undefined
           technicalDetails={{
            ...project.technicalDetails,
            authentication: project.technicalDetails.authentication || []  // Default to empty array if undefined
          }} // Ensure authentication is always an array
         />         
          ))}
        </div>
      </div>
    </section>
  );
}
