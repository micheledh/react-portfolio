import React from 'react';

import styles from './styles/App.scss';

import Routes from './routes';
import Header from './javascript/component/header/Header';
import Footer from './javascript/component/footer/Footer';

export default function App() {
    return (
        <div className={styles.container}>
            <Header />
            <Routes />
            <Footer />
        </div>
    );
}
