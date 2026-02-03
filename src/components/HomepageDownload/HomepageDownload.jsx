import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const CURRENT_VERSION = '7.6.0';
const RELEASE_DATE = '1 FEB 2026';

const downloads = [
  {
    platform: 'Windows',
    name: 'Flyball Manager for Windows',
    version: CURRENT_VERSION,
    filename: 'Flyball_Manager_Setup.exe',
    url: 'https://s3.us-east-2.amazonaws.com/downloads.flyballmanager.com/Flyball_Manager_Setup.exe',
    icon: '/img/downloads/windows.svg',
    date: RELEASE_DATE,
    requirements: 'Windows 11 (64bit)',
  },
  {
    platform: 'macOS',
    name: 'Flyball Manager for macOS (Apple Silicon)',
    version: CURRENT_VERSION,
    filename: 'Flyball_Manager-Apple.dmg',
    url: 'https://s3.us-east-2.amazonaws.com/downloads.flyballmanager.com/Flyball_Manager-Apple.dmg',
    icon: '/img/downloads/macos.svg',
    date: RELEASE_DATE,
    requirements: 'macOS 14 on Apple M1 or later required.',
  },
  {
    platform: 'macOS',
    name: 'Flyball Manager for macOS (Intel)',
    version: CURRENT_VERSION,
    filename: 'Flyball_Manager-Intel.dmg',
    url: 'https://s3.us-east-2.amazonaws.com/downloads.flyballmanager.com/Flyball_Manager-Intel.dmg',
    icon: '/img/downloads/macos.svg',
    date: RELEASE_DATE,
    requirements: 'macOS 14 or later on Intel (64bit) required.',
  },
];

export default function HomepageDownload() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__subtitle'>Download Flyball Manager</h1>

        <div className={styles.downloadCards}>
          {downloads.map((download, idx) => (
            <div key={idx} className={styles.downloadWrapper}>
              <a
                href={download.url}
                className={`${styles.downloadCard} ${
                  styles[`downloadCard${download.platform}`]
                }`}
                aria-label={`Download ${download.name}`}
              >
                <div className={styles.cardContent}>
                  <div className={styles.textContent}>
                    <div className={styles.platformNameRow}>
                      <svg
                        className={styles.downloadIcon}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M11 5v10.59l-3.29-3.3-1.42 1.42L12 19.42l5.71-5.71-1.42-1.42L13 15.59V5h-2z' />
                        <path d='M4 19h16v2H4z' />
                      </svg>
                      <span className={styles.platformName}>
                        {download.name}
                      </span>
                    </div>
                    <div className={styles.filename}>{download.filename}</div>
                  </div>
                </div>
                <img
                  src={download.icon}
                  alt={`${download.platform} logo`}
                  className={styles.platformIcon}
                  role='img'
                />
              </a>
              <div className={styles.downloadInfo}>
                <div className={styles.versionDate}>
                  <span className={styles.versionNumber}>
                    Version {download.version}
                  </span>
                  , <span className={styles.releaseDate}>{download.date}</span>
                </div>
                <div className={styles.requirements}>
                  {download.requirements}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.downloadDescription}>
          Give Flyball Manager a try by downloading the app! There's no charge
          to explore and test it out. A fee only applies if you decide to use it
          for scoring a tournament.
        </p>
      </div>
    </header>
  );
}
