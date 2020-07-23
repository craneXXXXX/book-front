import React, { Component } from 'react'
import RouterView from './router/AppRouter'
import {HashRouter as Router,Link} from 'react-router-dom'
import './assets/css/app.css'

export default class App extends Component {
    render() {
        return (
          <div>
            <Router>
              <div className="app-nav">
                <Link to="/">首页</Link>
                <Link to="/classify">分类</Link>
                <Link to="/worthbuying">值得买</Link>
                <Link to="/buyingcar">购物车</Link>
                <Link to="/mine">我的</Link>
              </div>
              <div className='app-content'>
                <RouterView></RouterView>
              </div>
            </Router>
          </div>
        );
    }
}
