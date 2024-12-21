import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 px-6 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-mono text-[#6B46C1] text-xl hover:text-[#805AD5] transition-colors">
          John Doe
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
          {isOpen ? <X className="text-[#6B46C1]" /> : <Menu className="text-[#6B46C1]" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-sm md:hidden border-b border-gray-200">
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