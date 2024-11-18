import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageDownload() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__subtitle">Download Flyball Manager</h1>
        <p>v6.1.3</p>
        <div className="buttons_src-components-HomepageDownload-styles-module">
          <a
            href={
              'https://s3.us-east-2.amazonaws.com/downloads.flyballmanager.com/Flyball_Manager_Setup.exe'
            }
            className="button button--secondary button--lg"
          >
            Windows
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
              'https://s3.us-east-2.amazonaws.com/downloads.flyballmanager.com/Flyball_Manager-Intel.dmg'
            }
            className="button button--secondary button--lg"
          >
            macOS Intel
          </a>
        </div>
      </div>
    </header>
  );
}
