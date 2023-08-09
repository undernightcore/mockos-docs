import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple yet complete way to mock JSON, XML, HTML and more!',
    Svg: require('@site/static/img/undraw_toy_car_-7-umw.svg').default,
    description: (
      <>
          Allow to edit responses with a simple and idiot proof editor. You also can upload files of up to 8MB (configurable)
      </>
    ),
  },
  {
    title: 'Truly reactive and collaborative functionality, no messy files involved',
    Svg: require('@site/static/img/undraw_pizza_sharing_wxop.svg').default,
    description: (
      <>
          There is not a need to share and maintain ugly config files anymore, stay agile even when it comes to mocking APIs
      </>
    ),
  },
  {
    title: 'Open Source + Self hosteable = ❤️',
    Svg: require('@site/static/img/undraw_powerful_re_frhr.svg').default,
    description: (
      <>
        No magic under the hood, only features made by the community and freedom. You got to decide what comes next!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
