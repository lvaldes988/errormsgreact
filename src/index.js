import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ErrorWindow extends Component {

    render() {
        return (
            <div className='error-container'>
            <div className="error-subcontainer">
                <div className='error-icon'>
                    <ion-icon name="remove-circle"></ion-icon>
                </div>
                <div className='error-bold'>
                    <p className="error-error"> Error: </p>
                    <p className="error-message"> Internal server error </p>
                </div>
                <div className='error-close'>
                    <ion-icon name="close"></ion-icon>
                </div>
                </div>
        </div>

        )
    }
}


ReactDOM.render(<ErrorWindow />, document.getElementById('root'));

