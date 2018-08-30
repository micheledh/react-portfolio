import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../../../styles/footer/footer.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>© Copyright {new Date().getFullYear()} - All rights reserved</p>
            <p className={styles.contactLinks}>
                <Link to="/contact" className={styles.link}>
                    Contact -{' '}
                </Link>
                <a
                    href="https://github.com/micheledh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    Github -{' '}
                </a>
                <a
                    href="https://www.linkedin.com/in/mich%C3%A8le-debris-hue-1335b0152/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}
