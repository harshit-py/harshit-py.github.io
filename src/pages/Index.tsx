import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import NetworkBackground from '@/components/NetworkBackground';

const projects = [
  {
    title: "ML Model Deployment Pipeline",
    description: "Automated ML model deployment pipeline using Docker and Kubernetes",
    tags: ["Python", "Docker", "Kubernetes", "MLOps"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Time Series Forecasting",
    description: "Advanced time series forecasting using deep learning models",
    tags: ["PyTorch", "Time Series", "Deep Learning"],
    githubUrl: "https://github.com"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets",
    tags: ["Python", "Plotly", "Dash", "Analytics"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <NetworkBackground />
      <Hero />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-mono mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;