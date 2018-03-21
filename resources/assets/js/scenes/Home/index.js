import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Home</div>

                            <div className="card-body">
                                <a href="/arin">아린</a>
                            </div>
                            <div className="card-body">
                                <a href="/text">텍스트</a>
                            </div>
                            <div className="card-body">
                                <a href="/editor">에디터</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
