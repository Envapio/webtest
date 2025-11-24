import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Send } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { socialLinks } from '../data';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto">
      <SectionHeader
        title="Let's Connect"
        subtitle="Have a project in mind? Let's build something amazing together"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-10"
      >
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-slate-300 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-slate-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-slate-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send Message
          </motion.button>
        </form>

        <div className="mt-10 pt-10 border-t border-slate-800">
          <p className="text-slate-400 text-center mb-6">
            Or connect with me on social media
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
