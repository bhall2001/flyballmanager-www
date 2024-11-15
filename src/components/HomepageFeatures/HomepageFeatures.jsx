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
                  <li>
                    Easily import tournament entries using NAFA's CanAm format
                  </li>
                  <li>Seed chart generation</li>
                  <li>
                    Schedule generation based on <b>Dale Smith's</b> NAFA
                    scheduling algorithms
                  </li>
                  <li>Scoring screens designed for simplicity</li>
                  <li>
                    Integrated on deck race status automatically updates as you
                    score, no need for Flyball Geek
                  </li>
                  <li>
                    On deck includes <b>realtime</b> heat lamps
                  </li>
                  <li>
                    Web based results and accumulated points at ondeckmanger.com
                    -- NO NEED TO PRINT LABELS ANY LONGER
                  </li>
                  <li>Flexible tournament placement points</li>
                  <li>Integrated ringside judges display</li>
                  <li>
                    Labels with accumulated points -- if you still want to print
                    labels
                  </li>
                  <li>End of tournament placement reports</li>
                  <li>Generate PDF versions of completed C2 forms</li>
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
