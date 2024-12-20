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
    <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-mono text-accent text-xl">
          ML.Engineer
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="nav-link">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-accent" /> : <Menu className="text-accent" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-navy/95 backdrop-blur-sm md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="nav-link"
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