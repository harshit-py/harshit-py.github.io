import { Github, Linkedin, Mail, X } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-[#1A1F2C] mb-6">
          Harshit Saxena
        </h1>
        <p className="font-mono text-[#6B46C1] mb-4">ML Engineer & Data Scientist</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1F2C]/80 mb-6">
          Building with AI & Data
        </h2>
        <p className="text-lg text-[#1A1F2C]/80 mb-8 max-w-2xl">
          I'm a Machine Learning Engineer and Data Scientist pursuing my Master's degree. 
          I specialize in building intelligent systems and analyzing complex datasets.
        </p>
        
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="text-[#1A1F2C] hover:text-[#6B46C1] transition-colors">
            <Github size={24} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" 
             className="text-[#1A1F2C] hover:text-[#6B46C1] transition-colors">
            <X size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="text-[#1A1F2C] hover:text-[#6B46C1] transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com"
             className="text-[#1A1F2C] hover:text-[#6B46C1] transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};