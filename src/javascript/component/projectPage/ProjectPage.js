/* eslint-disable */

import React, {Component} from 'react';
import ProjectsData from '../../constant/ProjectsData';
import styles from '../../../styles/projectPage/projectPage.scss';

export default class ProjectPage extends Component {
    render() {
        const project = ProjectsData.get(this.props.match.params.id);
        return (
            <div className={styles.projectPageBody}>
                <h1 className={styles.projectTitle}>{project.title}</h1>
                <h3 className={styles.titleCat}>Description of project</h3>
                <p className={styles.projectDescription}>{project.descriptionDetailed}</p>
                <h3 className={styles.titleCat}>Skills / knowledge used</h3>
                <ul className={styles.skillsList}>{project.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkToWebsite}>
                    Check it !
                </a>
            </div>
        );
    }
}
