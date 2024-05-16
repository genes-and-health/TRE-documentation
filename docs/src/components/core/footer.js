import React from 'react';
import Link from '@docusaurus/Link';

export default function Footer() {
  return (
    <footer className="bg-purple text-white">
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h5 className="text-xl font-semibold mb-4">Docs</h5>
            <ul>
              <li><Link className="text-gray-300 hover:text-white" to="/docs/intro">Getting Started</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Community</h5>
            <ul>
              <li><Link className="text-gray-300 hover:text-white" to="https://github.com/genes-and-health/new-docs/issues">Issues</Link></li>
              <li><Link className="text-gray-300 hover:text-white" to="https://twitter.com/GenesHealth">Twitter</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">More</h5>
            <ul>
              <li><Link className="text-gray-300 hover:text-white" to="https://genesandhealth.org">Website</Link></li>
              <li><Link className="text-gray-300 hover:text-white" to="https://github.com/genes-and-health">GitHub</Link></li>
              <li><Link className="text-gray-300 hover:text-white" to="https://github.com/genes-and-health/tre-tools">TRE Tools</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

