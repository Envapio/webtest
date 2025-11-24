import { motion } from 'framer-motion';
import { techStack } from '../data';

export default function TechMarquee() {
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <section className="py-16 border-y border-slate-800 overflow-hidden bg-slate-900/30">
      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
            >
              <span className="text-slate-300 font-semibold text-lg">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
