import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProjectContainerSmall from '../projectContainerSmall/ProjectContainerSmall';

import styles from '../../../styles/main/main.scss';
import arrowDown from '../../../images/arrowDown.png';
import ProjectsData from '../../constant/ProjectsData';

export default class Main extends Component {
    static scrollToProjects() {
        document.getElementById('projectsContainer').scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    render() {
        const projectsArray = Array.from(ProjectsData);
        return (
            <main className={styles.main}>
                <div className={styles.backgroundImg}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.homepageTitle}>Michele - Web developer for all your projects</h1>
                        <Link to="/contact" className={styles.freeQuote}>
                            Free quote
                        </Link>
                    </div>
                    <button className={styles.checkContainer} onClick={Main.scrollToProjects} type="button">
                        <p className={styles.checkWork}>Check my work</p>
                        <img src={arrowDown} alt="Check my work" className={styles.downArrow} />
                    </button>
                </div>

                <div className={styles.projects} id="projectsContainer">
                    {projectsArray.map(project => <ProjectContainerSmall key={project[1].id} project={project[1]} />)}
                </div>
            </main>
        );
    }
}
