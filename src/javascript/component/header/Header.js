/* eslint-disable */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from '../../../styles/header/header.scss';

export default class Header extends Component {
    scrollToProjects() {
        document.getElementById("projectsContainer").scrollIntoView({behavior: "smooth", block: "start"});
    }

    render() {
    return (
        <header className={styles.header}>

              <Link to="/" className={styles.logo}>M</Link>

            <nav className={styles.navHeader}>
                <Link to="/about" className={styles.navCat}>About</Link>
                <div className={styles.navCat} onClick={this.scrollToProjects}>Projects</div>

                  <Link to="/contact" className={styles.navCat}>Contact</Link>

            </nav>
        </header>
    );}
}
