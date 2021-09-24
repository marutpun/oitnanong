import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './styles/people.module.css';

const StaffList = [
  {
    name: 'นายธีระชัย ประพันธ์พจน์',
    img: require('../../static/img/staff/theerachai-prapunpot.jpg').default,
    title: 'ผู้อำนวยการโรงเรียนวัดนาหนอง',
  },
  {
    name: 'นางสาวโชตินา ขจิตสุวรรณ',
    img: require('../../static/img/staff/chotina-khajitsuwan.jpg').default,
    title: 'ครูประจำชั้นอนุบาล 2-3',
  },
  {
    name: 'นางสาวสิรีธร ยางเดิม',
    img: require('../../static/img/staff/sireethorn-yangderm.jpg').default,
    title: 'ครูประจำชั้นประถมศึกษาปีที่ 1',
  },
  {
    name: 'นางสาวปาลิตา สุขอนันต์',
    img: require('../../static/img/staff/palita-sukanan.jpg').default,
    title: 'ครูประจำชั้นประถมศึกษาปีที่ 2',
  },
  {
    name: 'นางสาวหงษ์นภา คงหนู',
    img: require('../../static/img/staff/hongnapa-kongnu.jpg').default,
    title: 'ครูประจำชั้นประถมศึกษาปีที่ 3',
  },
  {
    name: 'นางสาวนฤมล เปี่ยมพร้อม',
    img: require('../../static/img/staff/naruemon-piemprom.jpg').default,
    title: 'ครูประจำชั้นประถมศึกษาปีที่ 4',
  },
  {
    name: 'นางวาลิกา พงศ์ภัทรานนท์',
    img: require('../../static/img/staff/walika-pongpatranon.jpg').default,
    title: 'ครูประจำชั้นประถมศึกษาปีที่ 5',
  },
  {
    name: 'นายสิริวัตร สมใจ',
    img: require('../../static/img/staff/siriwat-somjai.jpg').default,
    title: 'ครูประจำชั้นประถมศึกษาปีที่ 6',
  },
  {
    name: 'นายมารุต พันธุ์สาคร',
    img: require('../../static/img/dummy.png').default,
    title: 'ครูสอนวิชาคอมพิวเตอร์',
  },
  {
    name: 'นางสาวพรรณภัทร ไผ่ทอง',
    img: require('../../static/img/staff/pannapat-paitong.jpg').default,
    title: 'เจ้าหน้าที่ธุรการ',
  },
  {
    name: 'นายสุภาพ ใจมุ่ง',
    img: require('../../static/img/dummy.png').default,
    title: 'นักการภารโรง',
  },
];

function PeopleItem({ img, name, title }) {
  return (
    <div className="cell">
      <div className={styles.people__card}>
        <div className={styles.people__image}>
          <img src={img} alt={name} />
        </div>
        <div className={styles.people__content}>
          <h3 className={styles.people__name}>{name}</h3>
          <p className={styles.people__description}>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default function People() {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();
  return (
    <Layout title="บุคลากร">
      <div className={styles.people}>
        <section className="grid-container">
          <h1 className={styles.people__title}>บุคลากร</h1>
          <p className={styles.people__caption}>
            การเรียนการสอนที่{title}นำโดยคณะครู
            และความร่วมมืออย่างดีจากผู้คนในชุมชน
          </p>
          <div className="grid-x grid-padding-x small-up-1 medium-up-3">
            {StaffList.map((props, idx) => (
              <PeopleItem key={idx} {...props} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
