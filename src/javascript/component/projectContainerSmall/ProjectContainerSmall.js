import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../../styles/projectContainerSmall/projectContainerSmall.scss';

export default function ProjectContainerSmall(data) {
    const projectData = data.project;
    return (
        <Link to={`/${projectData.id}`} className={styles.linkToProjectPage}>
            <div className={styles.project}>
                <img src={projectData.image} alt={projectData.title} className={styles.projectImg} />
                <h2 className={styles.projectTitle}>{projectData.title}</h2>
                <p className={styles.projectDescription}>{projectData.description}</p>
            </div>
        </Link>
    );
}
