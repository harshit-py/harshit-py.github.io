import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const ProjectCard = ({ title, description, tags, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="card-gradient rounded-lg p-6 shadow-md card-hover">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-mono text-[#1A1F2C]">{title}</h3>
        <div className="flex space-x-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
             className="text-[#1A1F2C] hover:text-[#6B46C1] transition-colors">
            <Github size={20} />
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
               className="text-[#1A1F2C] hover:text-[#6B46C1] transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="text-[#1A1F2C]/80 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-[#6B46C1] text-sm font-mono px-2 py-1 bg-[#E9D8FD] rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};