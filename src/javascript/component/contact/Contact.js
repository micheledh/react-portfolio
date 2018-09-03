import React from 'react';

import styles from '../../../styles/contact/contact.scss';

export default function Contact() {
    return (
        <div className={styles.contactBody}>
            <h1 className={styles.contactTitle}>Contact me</h1>
            <h3 className={styles.name}>Michele Debris-Hue</h3>
            <p className={styles.email}>debrishue.michele@gmail.com</p>
            <a
                href="https://www.linkedin.com/in/mich%C3%A8le-debris-hue-1335b0152/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                LinkedIn
            </a>
            <a href="https://github.com/micheledh" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Github
            </a>
            <p className={styles.quote}>Free quote on demand !</p>
        </div>
    );
}
