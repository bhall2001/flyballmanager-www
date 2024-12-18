import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Features() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--1')}></div>
            <div className={clsx('col col--5')}>
              <div className="text--center padding-horiz--md">
                <div className="text--left padding-top--xl">
                  <ul>
                    <li>
                      Easily import tournament entries using NAFA's CanAm format
                    </li>
                    <li>Seed chart generation</li>
                    <li>
                      Schedule generation based on{' '}
                      <b>Dale Smith's NAFA scheduling algorithms</b>
                    </li>
                    <li>
                      <b>Single elimination brackets</b> with loser races
                    </li>
                    <li>
                      Scoring screens designed for <b>simplicity</b>
                    </li>
                    <li>
                      Integrated on deck race status{' '}
                      <b>automatically updates as you score</b>, no need for
                      Flyball Geek
                    </li>
                    <li>
                      On deck includes <b>realtime</b> heat lamps
                    </li>
                    <li>
                      Web based results and accumulated points at
                      ondeckmanger.com -- <b>NO NEED TO PRINT LABELS</b>
                    </li>
                    <li>Flexible tournament placement points</li>
                    <li>Integrated ringside judges display</li>
                    <li>
                      Labels with accumulated points -- if you print labels
                    </li>
                    <li>End of tournament placement reports</li>
                    <li>Generate PDF versions of completed C2 forms</li>
                    <li>Generates NAFA scoring file</li>
                    <li>
                      Internet connection not required
                      <superscript>*</superscript>
                    </li>
                    <li>New features added all the time!</li>
                    <li>macOS and Windows</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={clsx('col col--5')}>
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

      <section>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--2')}></div>
            <div
              style={{ marginTop: '-30px', marginBottom: '20px' }}
              className={clsx('col col--10')}
            >
              * any feature requiring communication with ondeckmanger.com will
              not function without an Internet connection
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
