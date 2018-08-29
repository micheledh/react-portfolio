/* eslint-disable */

import React, {Component} from 'react';
import PageContainer from '../pageContainer/PageContainer';

import styles from '../../../styles/main/main.scss';
import placeholder150 from '../../../images/150.jpg';
import arrowDown from '../../../images/arrowDown.png';
import texts from '../../constant/texts';

export default class Main extends Component {
    scrollToProjects() {
        document.getElementById("projectsContainer").scrollIntoView({behavior: "smooth", block: "start"});
    }

    render() {
        return (
            <PageContainer>
            <main className={styles.main}>
                <div className={styles.backgroundImg}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.homepageTitle}>Michele - Web developer for all your projects</h1>
                        <p className={styles.freeQuote}>Free quote</p>
                    </div>
                    <div className={styles.checkContainer} onClick={this.scrollToProjects}>
                        <p className={styles.checkWork}>
                            Check my work
                        </p>
                        <img src={arrowDown} alt="Check my work" className={styles.downArrow} />
                    </div>
                </div>

                <div className={styles.projects} id="projectsContainer">
                    <div className={styles.project}>
                        <img src={placeholder150} alt={texts.project1.title} className={styles.projectImg} />
                        <h2 className={styles.projectTitle}>{texts.project1.title}</h2>
                        <p className={styles.projectDescription}>{texts.project1.description}</p>
                    </div>
                    <div className={styles.project}>
                        <img src={placeholder150} alt={texts.project2.title} className={styles.projectImg} />
                        <h2 className={styles.projectTitle}>{texts.project2.title}</h2>
                        <p className={styles.projectDescription}>{texts.project2.description}</p>
                    </div>
                    <div className={styles.project}>
                        <img src={placeholder150} alt={texts.project3.title} className={styles.projectImg} />
                        <h2 className={styles.projectTitle}>{texts.project3.title}</h2>
                        <p className={styles.projectDescription}>{texts.project3.description}</p>
                    </div>
                </div>
            </main>
            </PageContainer>
        );
    }
}
