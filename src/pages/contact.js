import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles/contact.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LogoFB from '@site/static/img/logo-fb.svg';
import LogoMessenger from '@site/static/img/logo-messenger.svg';
import { Banner } from '../components/';

export default function Contact() {
  const {
    siteConfig: {
      url,
      customFields: { fullTitle, address, fbId },
    },
  } = useDocusaurusContext();

  return (
    <Layout>
      <div className={styles.contact}>
        <section className="grid-container">
          <div className={styles.contact__container}>
            <h1 className={styles.contact__title}>ติดต่อ</h1>
            <p>{fullTitle} สำนักงานเขตพื้นที่การศึกษาประถมศึกษาราชบุรี เขต 1</p>
            <p>
              ติดต่อแจ้งเรื่องร้องเรียน แสดงความคิดเห็นได้ในเวลาทำการ วันจันทร์
              - วันศุกร์ เวลา 08:00 - 16:00 น.
            </p>
            <p>{address}</p>
            <p>
              เว็บไซต์ <Link to="/">{url}</Link>
            </p>
            <p>พิกัด GPS: 13.492997 N, 99.764039 E</p>
            <Link to={'https://www.fb.com/' + fbId}>
              <LogoFB title="facebook" className={styles.contact__social} />
            </Link>
            <Link to={'https://www.fb.com/messages/t/' + fbId}>
              <LogoMessenger
                title="facebook messenger"
                className={styles.contact__social}
              />
            </Link>
          </div>
          <Banner imgSrc="pupils-play-soccer.jpg" />
          <div className={styles.contact__container}>
            <p>พัฒนาเว็บไซต์โดยโรงเรียนวัดนาหนอง</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
