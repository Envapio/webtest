import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { experience } from '../data';

export default function Experience() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <SectionHeader
        title="Experience"
        subtitle="My professional journey building impactful solutions"
      />

      <div className="relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" />

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-20"
            >
              <div className="absolute left-0 md:left-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 -translate-x-[7px]" />

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                    {item.role}
                  </h3>
                  <span className="text-blue-400 font-semibold mt-1 md:mt-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-purple-400 font-semibold mb-3">
                  {item.company}
                </p>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
