import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Introduction',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Get up and running quickly with our easy-to-follow quick start guide.
  //       This aims to get you started without much explanation. 
  //     </>
  //   ),
  // },
  {
    title: 'Getting started',
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
    Svg: require('@site/static/img/reference.svg').default,
    description: (
      <>
        Useful reference material for the TRE. 
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className="flex flex-col items-center w-full md:w-1/2 p-4"> {/* Responsive: full width on small screens, half width on medium screens and up */}
      <div className="flex justify-center"> {/* Centers SVG horizontally */}
        <Svg className="w-24 h-24" role="img" /> {/* Control size of SVG */}
      </div>
      <div className="text-center px-4"> {/* Centers text and applies horizontal padding */}
        <h3 className="text-lg font-semibold text-black">{title}</h3> {/* Larger text for heading, semibold for emphasis */}
        <p className="text-black">{description}</p> {/* Description remains standard paragraph */}
      </div>
    </div>
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
