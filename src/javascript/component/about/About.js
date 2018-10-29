import React from 'react';

import styles from '../../../styles/about/about.scss';

export default function About() {
    return (
        <div className={styles.aboutBody}>
            <h1 className={styles.mainTitle}>About Me</h1>
            <h3 className={styles.listTitle}>Work experience</h3>
            <h4 className={styles.subListTitle}>As front-end developer</h4>
            <ul className={styles.listDiv}>
                <li>IBM Client Innovation Centre UK (from August 2018)</li>
                <li>Freelance</li>
                <li>Wilko.com (6 months)</li>
            </ul>
            <h4 className={styles.subListTitle}>Experience in other fields</h4>
            <ul className={styles.listDiv}>
                <li>Tourism (tourist centre, hotel, restaurant)</li>
                <li>Customer service</li>
                <li>Biology, Math</li>
            </ul>

            <hr className={styles.hr} />
            <h3 className={styles.listTitle}>Skills</h3>
            <ul className={styles.listDiv}>
                <li>HTML5, CSS3, JavaScript ES6</li>
                <li>JQuery, Ajax/Fetch, React</li>
                <li>SASS, Webpack, Redux, Mobx, Intl, Flow, React-router</li>
                <li>Git, Github, Jira, Bitbucket, Slack, Gimp</li>
                <li>Automation (RPA UiPath)</li>
                <br />
                <li>Quick learning curve, willing to learn</li>
                <li>Working alone/team, working remotely</li>
                <li>Agile</li>
            </ul>
            <hr className={styles.hr} />
            <h3 className={styles.listTitle}>Education</h3>
            <ul className={styles.listDiv}>
                <li>Tutos done on W3Schools.com : HTML, CSS, JavaScript, AngularJS, SQL, PHP</li>
                <li>Courses done on Codecademy.com: React, Sass</li>
                <li>Nanodegree done on Udacity.com: Front End Web Developer</li>
                <li>Tourism Degree, CNED (remote, France)</li>
                <li>« Classe préparatoire » (intensive school preparing for engineering schools), Lille (France)</li>
                <li>Scientific British A-levels, Le Havre (France)</li>
            </ul>
            <hr className={styles.hr} />
            <h3 className={styles.listTitle}>About my work</h3>
            <ul className={styles.listDiv}>
                <li>
                    <strong>What I can offer</strong>: custom website (design, features, code, domain name), maintenance
                    of existing website, hosting, SEO (all inclusive price available)
                </li>
                <br />
                <li>
                    <strong>Why I love my work</strong>: helps local business (and bigger ones) to be seen, always
                    different, good life/work balance, lots to do and to know
                </li>
                <br />
                <li>
                    <strong>Ask for more</strong>: go to the contact page, ask for a free quote, give me your timeline.
                    I&apos;m open to learn new skills so I can offer you the best service ever!
                </li>
                <br />
            </ul>
        </div>
    );
}
