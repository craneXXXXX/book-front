import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Classify from "../views/Classify";
import WorthBuying from "../views/WorthBuying";
import BuyingCar from "../views/BuyingCar";
import Mine from "../views/Mine";

export default class AppRouter extends Component {
  render() {
    let routes = [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/home",
        component: Home,
      },
      ,
      {
        path: "/classify",
        component: Classify,
      },
      ,
      {
        path: "/worthbuying",
        component: WorthBuying,
      },
      ,
      {
        path: "/buyingcar",
        component: BuyingCar,
      },
      {
        path: "/mine",
        component: Mine,
      },
    ];
    let appRouter = routes.map((item, index) => (
      <Route
        key={index}
        path={item.path}
        component={item.component}
        exact={item.exact}
      ></Route>
    ));
    return (
      <div>
        <Switch>{appRouter}</Switch>
      </div>
    );
  }
}
