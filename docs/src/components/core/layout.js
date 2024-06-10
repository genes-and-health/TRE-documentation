import React from 'react';

/**
 * Layout component for front page
 * 
 * @param {Object} props - The component props.
 * @param {string} props.children - The children elements.
 * @param {string} props.className - The class name for the layout.
 * @param {string} props.title - The title of the page.
 * @param {string} props.href - The href of the page.
 * @param {string} props.description - The description of the page.
 */
export default function Layout({ children, className, title, description }) {
  return (
    <div className={`min-h-screen ${className}`} >
        <title>{title}</title>
        <meta name="description" content={description} />
      {children}
    </div>
  );
}