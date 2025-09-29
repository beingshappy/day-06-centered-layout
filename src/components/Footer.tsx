import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-300">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Alex Johnson
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;