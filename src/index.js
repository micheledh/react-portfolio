import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './AppRouter';

const Index = () => (
    <div>
        <AppRouter />
    </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
