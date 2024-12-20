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
    <div className="bg-navy border border-slate/20 rounded-lg p-6 card-hover">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-mono">{title}</h3>
        <div className="flex space-x-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
             className="text-slate hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
               className="text-slate hover:text-accent transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="text-slate/80 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-accent text-sm font-mono px-2 py-1 bg-accent/10 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};