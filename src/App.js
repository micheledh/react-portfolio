import React from 'react';

import Routes from './routes';
import Header from './javascript/component/header/Header';
import Footer from './javascript/component/footer/Footer';

export default function App() {
    return (
        <div>
            <Header />
            <Routes />
            <Footer />
        </div>
    );
}
