import React from 'react';
import ReactDOM from 'react-dom';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import reactLogo from './images/react_logo.png';


const image = (
    <div style={{width: '100%', display: 'flex'}}>
        <img src={htmlLogo} alt='html logo' style={{flex: '1', maxWidth: '33%'}}/>
        <img src={cssLogo} alt='css logo' style={{flex: '1', maxWidth: '33%'}}/>
        <img src={reactLogo} alt='react logo' style={{flex: '1', maxWidth: '33%'}}/>
    </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(image, rootElement)
