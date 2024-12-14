// src/components/Hero.tsx
'use client';

import React from 'react';
import { Terminal, Shield, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            IoT Security Research
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Exploring vulnerabilities in connected devices through reverse engineering and security analysis.
          </p>
          
          {/* Feature badges */}
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center justify-center space-x-2 text-blue-400">
              <Terminal className="h-5 w-5" />
              <span>Firmware Analysis</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <Shield className="h-5 w-5" />
              <span>Security Research</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-400">
              <Cpu className="h-5 w-5" />
              <span>Hardware Hacking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;