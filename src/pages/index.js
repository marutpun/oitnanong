import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles/index.module.css';
import { HomepageFeatures, Banner } from '../components/';

export default function Indexpage() {
  const {
    siteConfig: {
      customFields: { fullTitle, bannerImg },
      organizationName,
    },
  } = useDocusaurusContext();
  return (
    <Layout title="หน้าแรก" description={`${fullTitle} ${organizationName}`}>
      <HomepageHeader />
      <HomepageFeatures />
      <Banner
        imgSrc={bannerImg}
        title="โรงเรียนวัดนาหนองเป็นส่วนหนึ่งของชุมชนบวร"
        subTitle="ชุมชนบ้านนาหนอง | วัดนาหนอง | โรงเรียนวัดนาหนอง"
        filter
      />
    </Layout>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.hero)}>
      <div className="grid-container">
        <h1 className={styles.hero__title}>{siteConfig.title}</h1>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}
