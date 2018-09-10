import React from 'react';
import PropTypes from 'prop-types';
import ProjectsData from '../../constant/ProjectsData';
import styles from '../../../styles/projectPage/projectPage.scss';

export default function ProjectPage(props) {
    const {match} = props;
    const data = ProjectsData.get(match.params.id);
    return (
        <div className={styles.projectPageBody}>
            <h1 className={styles.projectTitle}>{data.title}</h1>
            <h3 className={styles.titleCat}>Description of project</h3>
            <p className={styles.projectDescription}>{data.descriptionDetailed}</p>
            <h3 className={styles.titleCat}>Skills / knowledge used</h3>
            <ul className={styles.skillsList}>{data.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
            {data.link.map(link => (
                <a
                    key={link[0]}
                    href={link[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkToWebsite}
                >
                    Check {link[0]} !
                </a>
            ))}
        </div>
    );
}

ProjectPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.node
        }).isRequired
    }).isRequired
};
