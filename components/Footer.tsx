"use client";

import { ScrollFade } from "./ScrollFade";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollFade>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Manik.dev
              </h3>
              <p className="text-gray-600">AI Engineer • 3D Game & Web Developer</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 mb-1">
                © {new Date().getFullYear()} Manik Sehrawat. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </footer>
  );
};

export default Footer;

