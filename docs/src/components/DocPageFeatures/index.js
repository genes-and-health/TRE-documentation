import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const CustomLayout = ({ children }) => {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div>
            <header style={{backgroundColor: 'red', padding: '10px'}}>
                <div>
                    <Link to="/">
                        <img src={siteConfig.customFields.logoUrl} alt="Logo" />
                    </Link>
                </div>
                <nav>
                    <Link to="/docs/intro">Docs</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>© {new Date().getFullYear()} {siteConfig.title}</p>
            </footer>
        </div>
    );
};

export default CustomLayout;
