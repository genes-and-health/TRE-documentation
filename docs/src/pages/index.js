import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '../components/core/layout';
import Footer from '../components/core/footer';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="bg-green">
      <div className="flex justify-center py-8">
        <img src="/img/genes-and-health-logo.svg" alt="Genes and Health Logo" className="block" />
      </div>
      <div className="container mx-auto text-center py-2">
        <h1 className="text-4xl font-bold text-white">{siteConfig.title}</h1>
        <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>
        <div className="py-10">
          <Link
            className="bg-white rounded-md text-black px-4 py-2"
            to="/docs/introduction/intro_to_docs"
          >
            Getting Started Guide
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout className="bg-white"
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <Footer />
    </Layout>
  );
}
