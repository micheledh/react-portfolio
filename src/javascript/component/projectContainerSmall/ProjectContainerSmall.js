/* eslint-disable */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/projectContainerSmall/projectContainerSmall.scss';
import placeholder150 from '../../../images/150.jpg';

class ProjectContainerSmall extends Component {
    /*static propTypes = {
        key: PropTypes.number,
        project: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        })
    };*/

    render() {
        return (
            <div className={styles.project}>
                <img src={placeholder150} alt={this.props.project.title} className={styles.projectImg} />
                <h2 className={styles.projectTitle}>{this.props.project.title}</h2>
                <p className={styles.projectDescription}>{this.props.project.description}</p>
            </div>
        );
    }
}

export default ProjectContainerSmall;
