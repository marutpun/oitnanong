import React from 'react';
import clsx from 'clsx';

import styles from './banner.module.css';

export default function Banner({ imgSrc, title, subTitle, filter }) {
  return (
    <section className={styles.banner}>
      <img
        src={require('@site/static/img/' + imgSrc).default}
        className={clsx(styles.banner__img, {
          [`${styles.banner__imgFilter}`]: filter,
        })}
      />
      <div className="grid-container">
        <div className={styles.banner__meta}>
          <p className={styles.banner__title}>{title}</p>
          <p className={styles.banner__description}>{subTitle}</p>
        </div>
      </div>
    </section>
  );
}
