import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting started',
    href: 'docs/getting-started/prerequisites',
    Svg: require('@site/static/img/getting-started.svg').default,
    description: (
      <>
        Step-by-step guides to help you implement specific tasks, such as 
        installing new software or moving data around. 
      </>
    ),
  },

  {
    title: 'How to guides',
    href: '/docs/how_to_guides/new_software',
    Svg: require('@site/static/img/how-to-guides.svg').default,
    description: (
      <>
        Step-by-step guides to help you implement specific tasks, such as 
        installing new software or moving data around. 
      </>
    ),
  },

  {
    title: 'Explainers',
    href: '/docs/explainers/tre',
    Svg: require('@site/static/img/explainer-videos.svg').default,
    description: (
      <>
        Deep dives into the why and how of the TRE, and why certain procedures
        are the way they are. 
      </>
    ),
  },
  {
    title: 'Reference',
    href: '/docs/references/code_of_conduct',
    Svg: require('@site/static/img/reference.svg').default,
    description: (
      <>
        Useful reference material for the TRE. 
      </>
    ),
  },
];

function Feature({ Svg, title, description, href }) {
  return (
        <a className="flex flex-col items-center w-full md:w-1/2 p-4" href={href}> {/* Responsive: full width on small screens, half width on medium screens and up */}
        <div className="flex justify-center"> {/* Centers SVG horizontally */}
          <Svg className="w-24 h-24" role="img" /> {/* Control size of SVG */}
        </div>
        <div className="text-center px-4"> {/* Centers text and applies horizontal padding */}
          <h3 className="text-lg font-semibold text-black">{title}</h3> {/* Larger text for heading, semibold for emphasis */}
          <p className="text-black">{description}</p> {/* Description remains standard paragraph */}
        </div>
      </a>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
