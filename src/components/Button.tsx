import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary';
  href: string;
}

export default function Button({ text, type, href }: ButtonProps) {
  const isPrimary = type === 'primary';

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-8 py-4 rounded-full font-semibold text-lg inline-block transition-all duration-300
        ${isPrimary
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60'
          : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:border-purple-400 hover:text-purple-400'
        }
      `}
    >
      {text}
    </motion.a>
  );
}
