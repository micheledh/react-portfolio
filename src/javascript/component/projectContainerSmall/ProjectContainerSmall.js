/* eslint-disable */

import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import styles from '../../../styles/projectContainerSmall/projectContainerSmall.scss';
import placeholder150 from '../../../images/150.jpg';

class ProjectContainerSmall extends Component {
    /*static propTypes = {
        project: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        })
    };*/

    render() {
        return (
          <Link to={`/${this.props.project.id}`} className={styles.linkToProjectPage}>
            <div className={styles.project}>
                <img src={placeholder150} alt={this.props.project.title} className={styles.projectImg} />
                <h2 className={styles.projectTitle}>{this.props.project.title}</h2>
                <p className={styles.projectDescription}>{this.props.project.description}</p>
            </div>
          </Link>
        );
    }
}

export default ProjectContainerSmall;
;