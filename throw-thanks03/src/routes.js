import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const RouterApp = () => (
  <Router>
    <div style={{margin: 20}}>
      <Route exact path='/' component={Home} />
      <Route path='/easy' component={EasyCourse} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h1>React Router Lesson</h1>
    <p>コースを選択してください。</p>
    <ul>
      <li><a href='easy'>Easy</a></li>
      <li><a href='normal'>Normal</a></li>
      <li><a href='hard'>Hard</a></li>
    </ul>
  </div>
)

const EasyCourse = () => (
  <div>
    <h1>Easy Course</h1>
    <p><a href="/">Back</a></p>
  </div>
)

const NormalCourse = () => (
  <div>
    <h1>Normal Course</h1>
    <p><a href="/">Back</a></p>
  </div>
)

const HardCourse = () => (
  <div>
    <h1>Hard Course</h1>
    <p><a href="/">Back</a></p>
  </div>
)

export default RouterApp