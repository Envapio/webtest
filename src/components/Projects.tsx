import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        title="Featured Projects"
        subtitle="A collection of work that showcases my passion for building exceptional digital experiences"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            github={project.github}
            demo={project.demo}
            size={project.size}
          />
        ))}
      </div>
    </section>
  );
}
