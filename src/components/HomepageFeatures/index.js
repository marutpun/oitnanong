import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'โรงเรียนคุณภาพประจำตำบล',
    Svg: require('../../../static/img/undraw_education_f8ru.svg').default,
    description: (
      <>พัฒนาคุณภาพด้านการศึกษาให้กับประเทศที่เริ่มจากท้องถิ่นระดับตำบล</>
    ),
  },
  {
    title: 'การเรียนการสอนยุคโควิด19',
    Svg: require('../../../static/img/undraw_connection_b38q.svg').default,
    description: (
      <>ประยุกต์ใช้เทคโนโลยีที่ทันสมัยในยุควิถีชีวิตใหม่ (New normal)</>
    ),
  },
  {
    title: 'บุคลากรที่มีคุณภาพ',
    Svg: require('../../../static/img/undraw_certification_aif8.svg').default,
    description: (
      <>เพียบพร้อมไปด้วยผู้เชี่ยวชาญที่หลากหลายสาขาและมากด้วยประสบการณ์</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className="cell">
      <div className={styles.features__item}>
        <Svg className={styles.features__svg} alt={title} />
        <div className="">
          <h3 className={styles.features__title}>{title}</h3>
          <p className={styles.features__description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="grid-container">
        <div className="grid-x grid-padding-x small-up-1 medium-up-3">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
