import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../../../styles/header/header.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                M
            </Link>

            <nav className={styles.navHeader}>
                <Link to="/about" className={styles.navCat}>
                    About
                </Link>
                <Link to="/projects" className={`${styles.navCat} ${styles.middleCat}`}>
                    Projects
                </Link>
                <Link to="/contact" className={styles.navCat}>
                    Contact
                </Link>
            </nav>
        </header>
    );
}
