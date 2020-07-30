import React, { Component } from "react";
import {  Route } from "react-router-dom";
import Login from "../views/mine/Login";
import Register from "../views/mine/Register";

export default class MineRouter extends Component {
  render() {
    return (
      <>
        <Route path="/mine/login" component={Login}></Route>
        <Route path="/mine/register" component={Register}></Route>
      </>
    );
  }
}
