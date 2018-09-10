import React from 'react';
import ProjectContainerSmall from '../projectContainerSmall/ProjectContainerSmall';

import styles from '../../../styles/main/main.scss';
import ProjectsData from '../../constant/ProjectsData';

export default function Main() {
    const projectsArray = Array.from(ProjectsData);
    return (
        <main className={styles.main}>
            <h2 className={styles.projectsTitle}>Projects</h2>
            <div className={styles.projects}>
                {projectsArray.map(project => <ProjectContainerSmall key={project[1].id} project={project[1]} />)}
            </div>
        </main>
    );
}
