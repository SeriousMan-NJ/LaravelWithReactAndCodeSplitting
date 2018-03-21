import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loadable from 'react-loadable'
// import { kendo } from '@progress/kendo-ui'
// import { Editor } from '@progress/kendo-editor-react-wrapper'
import '@progress/kendo-theme-default'

const Loading = () => <div>Loading editor...</div>

const Editor = Loadable.Map({
  loader: {
    kendo: () => import(/* webpackChunkName: "vendor/kendo-ui" */ '@progress/kendo-ui'),
    Editor: () => import(/* webpackChunkName: "vendor/kendo-editor-react-wrapper" */ '@progress/kendo-editor-react-wrapper')
  },
  loading: Loading,
  render(loaded, props) {
    const { kendo } = loaded.kendo
    const { Editor } = loaded.Editor
    return <Editor />
  }
})

export default class KendoRichEditor extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Kendo Rich Editor</div>

                            <div className="card-body">
                              <Editor />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
