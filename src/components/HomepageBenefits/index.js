import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const BenefitList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/home/doggie-chair.svg').default,
    description: (
      <>
        Flyball Manager was designed from the ground up to make scoring
        tournaments as easy as we could imagine.
      </>
    ),
  },
  {
    title: 'Go Ahead, Have Fun',
    Svg: require('@site/static/img/home/puppy-love.svg').default,
    description: (
      <>
        Scoring becomes less of a burden. Take time to enjoy running your dog.
        PS. Junior Handlers make great scorekeepers!
      </>
    ),
  },
  {
    title: 'Online Integration',
    Svg: require('@site/static/img/home/wifi.svg').default,
    description: (
      <>
        Scoring integration with online site. Communicate race status to
        participants simply by scoring your tournament.
      </>
    ),
  },
];

function Why({ Svg, title, description }) {
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

export default function HomepageBenefits() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {BenefitList.map((props, idx) => (
            <Why key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
