import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Arin from './아린.jpg'
import './index.css'

export default class Root extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                I'm an example component!
                            </div>
                            <div className="card-body">
                              <img src={Arin} style={{width: '100%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}