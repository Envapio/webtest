import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from './Button';
import { personalInfo, ctaButtons } from '../data';

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullRole = personalInfo.role;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullRole.length) {
        setRoleText(fullRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-slate-950 to-purple-500/10" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-blue-400 text-lg md:text-xl mb-4 font-medium"
        >
          {personalInfo.tagline}
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-['Space_Grotesk']">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <div className="text-3xl md:text-5xl font-bold mb-8 h-16 md:h-20 flex items-center justify-center font-['Space_Grotesk']">
          <span className="text-slate-300">
            {roleText}
            {showCursor && <span className="text-blue-400">|</span>}
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {personalInfo.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {ctaButtons.map((button) => (
            <Button
              key={button.id}
              text={button.text}
              type={button.type as 'primary' | 'secondary'}
              href={button.href}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
