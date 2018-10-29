import React from 'react';
import styles from '../../../styles/listCard/listCard.scss';

export default function ListCard(data) {
    return (
        <div className={styles.listCard}>
            <h3 className={styles.titleCat}>Toolbox</h3>
            <hr className={styles.listCardRule} />
            <ul className={styles.skillsList}>{data.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
    );
}
