import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Text from './test.txt'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Text</div>

                            <div className="card-body">
                                {Text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
