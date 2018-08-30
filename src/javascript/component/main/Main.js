/* eslint-disable */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProjectContainerSmall from '../projectContainerSmall/ProjectContainerSmall';

import styles from '../../../styles/main/main.scss';
import arrowDown from '../../../images/arrowDown.png';
import Texts from '../../constant/texts';

export default class Main extends Component {
    scrollToProjects() {
        document.getElementById('projectsContainer').scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    render() {
      const projectsArray = Object.keys(Texts).map(key => Texts[key]);
        return (
            <main className={styles.main}>
                <div className={styles.backgroundImg}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.homepageTitle}>Michele - Web developer for all your projects</h1>
                        <Link to="/contact" className={styles.freeQuote}>Free quote</Link>
                    </div>
                    <div className={styles.checkContainer} onClick={this.scrollToProjects}>
                        <p className={styles.checkWork}>Check my work</p>
                        <img src={arrowDown} alt="Check my work" className={styles.downArrow} />
                    </div>
                </div>

              <div className={styles.projects} id="projectsContainer">
                {projectsArray.map(project => <ProjectContainerSmall key={project.title} project={project} />)}
              </div>

            </main>
        );
    }
}
