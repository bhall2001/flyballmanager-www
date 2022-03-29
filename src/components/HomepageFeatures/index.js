import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/home/doggie-chair.svg').default,
    description: (
      <>
        Flyball Manager was designed from the ground up to make scoring
        tournaments as easy as we could think.
      </>
    ),
  },
  {
    title: 'Go Ahead, Have Fun',
    Svg: require('@site/static/img/home/puppy-love.svg').default,
    description: (
      <>
        Scoring becomes less of a burden. Take time to enjoy running your dog.
        Junior Handlers make great scorekeepers!
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

function Features() {
  return (
    <>
      <div className={clsx('col col--2')}></div>
      <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
          <div className="text--left padding-top--xl">
            <ul>
              <li>Creates seed chart</li>
              <li>Schedule generation</li>
              <li>Intuitive scoring interface</li>
              <li>Online "On Deck" schedule updates</li>
              <li>Flexible tournament placement points</li>
              <li>Ringside judges display</li>
              <li>Labels with accumulated points</li>
              <li>Generates NAFA scoring file</li>
              <li>Runs on Macs and Windows</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={clsx('col col--4')}>
        <div className="text--center ">
          <img
            // alt={translate({ message: 'Docusaurus with Keytar' })}
            // className={styles.heroLogo}
            src={useBaseUrl('/img/home/screens.svg')}
            width="400"
            height="400"
          />
        </div>
      </div>
    </>
  );
}

function Attribution() {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center padding-horiz--md">
        <p style={{ fontSize: '10px' }}>
          <a href="https://www.freepik.com/vectors/people">
            People vector created by pikisuperstar - www.freepik.com
          </a>
        </p>
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
            <Why key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <Features />
        </div>
        <div className="row">
          <Attribution />
        </div>
      </div>
    </section>
  );
}
