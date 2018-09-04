import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

export default function AppRouter() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    );
}
