// Footer.js

import React from 'react';
import { useDocusaurusContext } from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

const Footer = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-8">
            <h2 className="text-xl font-bold mb-4">Docs</h2>
            <ul>
              <li><Link to="/docs/introduction/intro" className="text-gray-300 hover:text-white">Getting Started</Link></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-8">
            <h2 className="text-xl font-bold mb-4">Community</h2>
            <ul>
              <li><Link to="https://github.com/genes-and-health/new-docs/issues" className="text-gray-300 hover:text-white">Issues</Link></li>
              <li><Link to="https://twitter.com/GenesHealth" className="text-gray-300 hover:text-white">Twitter</Link></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-8">
            <h2 className="text-xl font-bold mb-4">More</h2>
            <ul>
              <li><Link to="https://genesandhealth.org" className="text-gray-300 hover:text-white">Website</Link></li>
              <li><Link to="https://github.com/genes-and-health/new-docs" className="text-gray-300 hover:text-white">TRE Documentation GitHub</Link></li>
              <li><Link to="https://github.com/genes-and-health/tre-tools" className="text-gray-300 hover:text-white">TRE Tools GitHub</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-4 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.title}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
