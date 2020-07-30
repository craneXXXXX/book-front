import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Classify from "../views/Classify";
import WorthBuying from "../views/WorthBuying";
import Mine from "../views/Mine";
import shoppingcar from "../views/ShoppingCar";
import Login from "../views/mine/Login";
import Register from "../views/mine/Register";
import Detail from "../views/worthbuying/Detail";
import Logistics from "../views/mine/Logistics";
import InputLogistics from "../views/mine/InputLogistics";
import UpdateLogistics from "../views/mine/UpdateLogistics";
import Pay from "../views/mine/Pay";
import Order from "../views/mine/Order";

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
        exact: true,
      },
      ,
      {
        path: "/shoppingcar",
        component: shoppingcar,
      },
      {
        path: "/mine",
        component: Mine,
        exact: true,
      },
      {
        path: "/mine/login",
        component: Login,
      },
      {
        path: "/mine/register",
        component: Register,
      },
      {
        path: "/mine/logistics",
        component: Logistics,
      },
      {
        path: "/mine/inputlogistics",
        component: InputLogistics,
      },
      {
        path: "/mine/updatelogistics",
        component: UpdateLogistics,
      },
      {
        path: "/mine/pay/:id",
        component: Pay,
      },
      {
        path: "/mine/order",
        component: Order,
      },
      {
        path: "/worthbuying/detail",
        component: Detail,
      }
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
