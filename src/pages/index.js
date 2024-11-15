import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageBenefits from '@site/src/components/HomepageBenefits';
import HomepageAttribution from '../components/HomepageAttribution';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepagePricing from '../components/HomepagePricing/HomepagePricing';
import HomepageDownload from '../components/HomepageDownload';
import HomepageScheduleEnhance from '../components/HomepageScheduleEnhance';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorial/info"
          >
            Flyball Manager Tutorial - 15min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Flyball planning, scoring and communication software."
    >
      <HomepageHeader />
      <main>
        <HomepageBenefits />
        <HomepageScheduleEnhance />
        <HomepageFeatures />
        <HomepagePricing />
        <HomepageDownload />
        <HomepageAttribution />
      </main>
    </Layout>
  );
}
