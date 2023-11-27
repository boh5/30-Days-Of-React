import React from 'react';
import ReactDOM from 'react-dom';

const headerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '20px',
    borderRadius: '7px'
}

const header = (
    <div style={headerStyles}>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and updates</p>
    </div>
)

const inputsStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '20px',
    borderRadius: '7px'
}

const inputContainerStyles = {
    display: 'flex',
    borderRadius: '10px',
    gap: '10px'
}

const inputStyles = {
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    fontSize: '1.2em'
}

const buttonStyles = {
    fontSize: '1.2em',
    padding: '10px 100px',
    borderRadius: '10px',
    backgroundColor: '#F37474',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
}

const inputs = (
    <div style={inputsStyles}>
        <div style={inputContainerStyles}>
            <input style={inputStyles} type='text' placeholder='First Name'/>
            <input style={inputStyles} type='text' placeholder='Last Name'/>
            <input style={inputStyles} type='email' placeholder='Email'/>
        </div>
        <button style={buttonStyles}>Subscribe</button>
    </div>
)

const appStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#C2E6F4',
    borderRadius: '7px',
    margin: '20px'
}

const app = (
    <div style={appStyles}>
        {header}
        {inputs}
    </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement)

