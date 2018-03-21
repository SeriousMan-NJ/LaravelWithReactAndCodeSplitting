import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>{/*Loading...*/}</div>

const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'scenes/home' */ '../../scenes/Home'),
  loading: Loading
})

const Arin = Loadable({
  loader: () => import(/* webpackChunkName: 'scenes/arin' */ '../../scenes/Arin'),
  loading: Loading
})
const Text = Loadable({
  loader: () => import(/* webpackChunkName: 'scenes/text' */ '../../scenes/Text'),
  loading: Loading
})
const KendoRichEditor = Loadable({
  loader: () => import(/* webpackChunkName: 'scenes/editor' */ '../../scenes/KendoRichEditor'),
  loading: Loading
})

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/arin' component={Arin} />
      <Route path='/text' component={Text} />
      <Route path='/editor' component={KendoRichEditor} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
