import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
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
                  <li>macOS and Windows</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={clsx('col col--4')}>
            <div className="text--center ">
              <img
                alt={translate({ message: 'screens' })}
                src={useBaseUrl('/img/home/screens.svg')}
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
