import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import BeforeLogin from '../views/mine/BeforeLogin'
import AfterLogin from '../views/mine/AfterLogin'
import MineRouter from '../router/MineRouter'

export default class Mine extends Component {
    constructor(props){
        super(props);
        this.state = {
          LoginRouter: window.localStorage.getItem("loginName") ? (
            <Route path="/mine" component={AfterLogin}></Route>
          ) : (
            <Route path="/mine" component={BeforeLogin}></Route>
          ),
        };
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {this.state.LoginRouter}
                        <MineRouter></MineRouter>
                    </Switch>
                </Router>
            </div>
        )
    }
}
