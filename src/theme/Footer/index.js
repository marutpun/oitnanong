import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './footer.module.css';

export default function Footer() {
  // Use setting from docusaurus.config.js
  const {
    siteConfig: {
      customFields: { fullTitle, address },
    },
  } = useDocusaurusContext();

  // Use setting from ThemeConfig
  const {
    footer: { copyright },
  } = useThemeConfig();

  return (
    <footer className={styles.footer}>
      <div className="grid-container">
        <h2 className={styles.footer__title}>{fullTitle}</h2>
        <address className={styles.footer__address}>{address}</address>
        <p
          className={styles.footer__copyright}
          dangerouslySetInnerHTML={{
            __html: copyright,
          }}
        />
      </div>
    </footer>
  );
}
