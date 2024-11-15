import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageScheduleEnhance() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__subtitle">
          NEW Scheduling Engine based on NAFA's official scheduler by Dale Smith
        </h1>
        <p>Flow, rest or balanced? You decide what is best!</p>
        {/* <div className="buttons_src-components-HomepageDownload-styles-module">
          <a
            href={
              'https://s3.us-east-2.amazonaws.com/downloads.flyballmanager.com/Flyball_Manager-Intel.dmg'
            }
            className="button button--secondary button--lg"
          >
            macOS Intel
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href={
              'https://s3.us-east-2.amazonaws.com/downloads.flyballmanager.com/Flyball_Manager-Apple.dmg'
            }
            className="button button--secondary button--lg"
          >
            macOS Apple Silicon
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href={
              'https://s3.us-east-2.amazonaws.com/downloads.flyballmanager.com/Flyball_Manager_Setup.exe'
            }
            className="button button--secondary button--lg"
          >
            Windows
          </a>
        </div> */}
      </div>
    </header>
  );
}
