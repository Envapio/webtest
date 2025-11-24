import { Heart } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-400 flex items-center justify-center gap-2">
          <span>Built with</span>
          <Heart size={16} className="text-blue-400 fill-blue-400 animate-pulse" />
          <span>by {personalInfo.name}</span>
        </p>
        <p className="text-slate-600 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
