import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageDownload() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__subtitle">Download Flyball Manager</h1>
        <p>v21.1.0</p>
        <div className="buttons_src-components-HomepageDownload-styles-module">
          <a
            href={require('/docs/FBM_Mac_21.1.0.zip').default}
            className="button button--secondary button--lg"
            download="FBM_Mac_21.1.0.zip"
          >
            macOS
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href={require('/docs/FBM_Windows_21.1.0.zip').default}
            className="button button--secondary button--lg"
            download="FBM_Windows_21.1.0.zip"
          >
            Windows
          </a>
        </div>
      </div>
    </header>
  );
}
