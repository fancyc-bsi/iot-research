'use client';

// src/components/Navigation.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Info, Github, Terminal } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-mantle border-b border-surface0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and primary nav */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Terminal className="h-8 w-8 text-blue mr-2" />
              <span className="text-text font-bold text-lg">IoT Security Research</span>
            </Link>
            
            {/* Desktop navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-subtext0 hover:bg-surface0 hover:text-text px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-subtext0 hover:bg-surface0 hover:text-text px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <Info className="h-4 w-4 mr-2" />
                  About
                </Link>
                <a
                  href="https://github.com/fancyc-bsi/iot-research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-subtext0 hover:bg-surface0 hover:text-text px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-overlay0 hover:text-text hover:bg-surface0 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-subtext0 hover:bg-surface0 hover:text-text block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link
              href="/about"
              className="text-subtext0 hover:bg-surface0 hover:text-text block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Info className="h-4 w-4 mr-2" />
              About
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtext0 hover:bg-surface0 hover:text-text block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;