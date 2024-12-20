import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Projects', path: '/projects' },
    { name: 'Notebooks', path: '/notebooks' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 px-6 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-mono text-[#0A66C2] text-xl">
          ML.Engineer
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="text-[#333333] hover:text-[#0A66C2] transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-[#0A66C2]" /> : <Menu className="text-[#0A66C2]" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-sm md:hidden border-b border-gray-200">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-[#333333] hover:text-[#0A66C2] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};