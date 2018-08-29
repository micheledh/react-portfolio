import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

export default component => (
    <div>
        <Header />
        {component}
        <Footer />
    </div>
);
