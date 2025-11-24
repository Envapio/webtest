import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  size: 'small' | 'large';
}

export default function ProjectCard({ title, description, image, tech, github, demo, size }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`
        group relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-300
        ${size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
      `}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
      </div>

      <div className="p-6 relative z-20">
        <h3 className="text-2xl font-bold mb-3 text-white font-['Space_Grotesk']">
          {title}
        </h3>
        <p className="text-slate-400 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Github size={20} />
            <span className="text-sm font-medium">Code</span>
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors"
          >
            <ExternalLink size={20} />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
