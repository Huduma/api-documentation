import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fast Intergration',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
         Seamlessly connect your systems and applications to unlock powerful SMS messaging capabilities.
      </>
    ),
  },
  {
    title: 'Clear documentation',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>       
    Our documentation ensures a seamless integration experience by providing clear guidelines, step-by-step tutorials, and sample<code> codes</code>. Simplifying the process. 
      </>
    ),
  },
  {
    title: 'Intergration Support',
    Svg: require('@site/static/img/support.svg').default,
    description: (
      <>
Our support team is ready to help you with any integration-related questions or issues. From troubleshooting to API configuration and best practices, we're here for you.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
