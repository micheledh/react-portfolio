import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../../../styles/header/header.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.headerTitleDiv}>
                <h1 className={styles.headerMainTitle}>Hi, I&apos;m Michele</h1>
                <h3 className={styles.headerSubTitle}>Web developer for all your projects</h3>
            </Link>
            <nav className={styles.nav}>
                <Link to="/about" className={styles.navCat}>
                    About
                </Link>
                <Link to="/projects" className={styles.navCat}>
                    Projects
                </Link>
                <Link to="/contact" className={styles.navCat}>
                    Contact
                </Link>
            </nav>
        </header>
    );
}
