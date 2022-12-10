import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageDownload() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__subtitle">Download Flyball Manager</h1>
        <p>v21.2.2</p>
        <div className="buttons_src-components-HomepageDownload-styles-module">
          <a
            href={
              'https://s3.us-east-2.amazonaws.com/downloads.flyballmanager.com/Flyball_Manager.dmg'
            }
            className="button button--secondary button--lg"
          >
            macOS
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href={
              'https://s3.us-east-2.amazonaws.com/downloads.flyballmanager.com/FBM_Windows.zip'
            }
            className="button button--secondary button--lg"
          >
            Windows
          </a>
        </div>
      </div>
    </header>
  );
}
