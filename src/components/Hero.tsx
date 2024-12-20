import { GitHub, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl animate-fade-in">
        <p className="font-mono text-accent mb-4">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-slate mb-4">
          John Doe
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate/70 mb-6">
          I build with AI & Data
        </h2>
        <p className="text-lg text-slate/80 mb-8 max-w-2xl">
          I'm a Machine Learning Engineer and Data Scientist pursuing my Master's degree. 
          I specialize in building intelligent systems and analyzing complex datasets.
        </p>
        
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="text-slate hover:text-accent transition-colors">
            <GitHub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="text-slate hover:text-accent transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com"
             className="text-slate hover:text-accent transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};