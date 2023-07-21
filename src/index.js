import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainP from './components/Header/Header';
import Body from './components/Body/Body'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='all'>
    <MainP />
    <Body/>
    </div>
);


reportWebVitals();
