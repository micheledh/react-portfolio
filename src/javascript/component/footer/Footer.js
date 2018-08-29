import React from 'react';

import styles from '../../../styles/footer/footer.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>© Copyright {new Date().getFullYear()} - All rights reserved</p>
            <p className={styles.contactLinks}>
                <span className={styles.link}>Contact - </span>
                <span className={styles.link}>Github - </span>
                <span className={styles.link}>LinkedIn</span>
            </p>
        </footer>
    );
}
