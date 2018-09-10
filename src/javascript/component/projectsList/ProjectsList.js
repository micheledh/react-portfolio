import React from 'react';
import {Link} from 'react-router-dom';
import ProjectsData from '../../constant/ProjectsData';
import styles from '../../../styles/projectsList/projectsList.scss';

export default function ProjectsList() {
    const projects = Array.from(ProjectsData);
    return (
        <div className={styles.projectsListBody}>
            <h1 className={styles.projectsListTitle}>Projects done</h1>
            <ul className={styles.projectsList}>
                {projects.map(project => (
                    <li key={project[1].id} className={styles.projectsListItem}>
                        <Link to={`/${project[1].id}`} className={styles.linkToProjectPage}>
                            {project[1].title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
