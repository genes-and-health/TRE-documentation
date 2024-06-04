import React, { useState } from 'react';
import Link from '@docusaurus/Link';

export default function Footer() {
  const [logoStyles, setLogoStyles] = useState({
    opacity: 0.5, // Initial opacity
    transition: 'opacity 0.3s ease', // Smooth transition on opacity change
  });

  const handleMouseEnter = () => {
    // Adjust opacity to full when mouse enters
    setLogoStyles({ ...logoStyles, opacity: 1 });
  };

  const handleMouseLeave = () => {
    // Reset opacity to default when mouse leaves
    setLogoStyles({ ...logoStyles, opacity: 0.7 });
  };

  return (
    <footer className="bg-purple text-white">
      <div className="container mx-auto px-5 py-8"> {/* Decreased py-12 to py-8 for smaller padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-3 pl-4">Docs</h5> {/* Changed text-xl to text-lg */}
            <ul className="list-none pl-4">
              <li><Link className="text-gray-300 hover:text-white text-lg" to="/docs/introduction/intro">Getting Started</Link></li> {/* Changed text-base to text-lg */}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3 pl-4">Community</h5> {/* Changed text-xl to text-lg */}
            <ul className="list-none pl-4">
              <li><Link className="text-gray-300 hover:text-white text-lg" to="https://github.com/genes-and-health/new-docs/issues">Issues</Link></li> {/* Changed text-base to text-lg */}
              <li><Link className="text-gray-300 hover:text-white text-lg" to="https://twitter.com/GenesHealth">Twitter</Link></li> {/* Changed text-base to text-lg */}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3 pl-4">More</h5> {/* Changed text-xl to text-lg */}
            <ul className="list-none pl-4">
              <li><Link className="text-gray-300 hover:text-white text-lg" to="https://genesandhealth.org">Website</Link></li> {/* Changed text-base to text-lg */}
              <li><Link className="text-gray-300 hover:text-white text-lg" to="https://github.com/genes-and-health">GitHub</Link></li> {/* Changed text-base to text-lg */}
              {/* <li><Link className="text-gray-300 hover:text-white text-base" to="https://github.com/genes-and-health/tre-tools">TRE Tools GitHub</Link></li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-purple text-white text-center py-4">
        <div className="container mx-auto flex justify-center items-center mb-4">
          <a href="https://www.genesandhealth.org/" target="_blank" rel="noopener noreferrer"
             onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
             style={logoStyles}>
            <img src="/img/Genes_Health.png" alt="Your Image" style={{ height: 'auto', width: 'auto', maxHeight: '120px' }} className="h-20 mr-3" /> {/* Doubled height to h-40 */}
          </a>
        </div>
      </div>
      <div className="bg-purple text-white text-center py-4">
        <p className="text-base">Copyright © {new Date().getFullYear()} Genes and Health Documentation.</p>
      </div>
    </footer>
  );
};
