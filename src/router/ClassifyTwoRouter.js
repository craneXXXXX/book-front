import {Route,Switch} from 'react-router-dom'
import React, { Component } from 'react'
import ChildrenBook from '../views/classify/ChildrenBook'
import OldBook from '../views/classify/OldBook';
import ElectronicBook from '../views/classify/ElectronicBook';
import Phone from '../views/classify/Phone';
import WomanDress from '../views/classify/WomanDress';
import TheBook from '../views/classify/TheBook';
import TwoShoe from '../views/classify/TwoShoe';
import Sport from '../views/classify/Sport';
import Food from '../views/classify/Food';
import OA from '../views/classify/OA';
import Pen from '../views/classify/Pen';


export default class ClassifyTwoRouter extends Component {
    render() {
        let routes = [
          {
            path: "/classify",
            component: TheBook,
            exact: true,
          },
          {
            path: "/classify/thebook",
            component: TheBook,
          },
          {
            path: "/classify/childrenbook",
            component: ChildrenBook,
          },
          {
            path: "/classify/oldbook",
            component: OldBook,
          },
          {
            path: "/classify/electronicbook",
            component: ElectronicBook,
          },
          {
            path: "/classify/phone",
            component: Phone,
          },
          {
            path: "/classify/womandress",
            component: WomanDress,
          },
          {
            path: "/classify/twoshoe",
            component: TwoShoe,
          },
          {
            path: "/classify/sport",
            component: Sport,
          },
          {
            path: "/classify/food",
            component: Food,
          },
          {
            path: "/classify/oa",
            component: OA,
          },
          {
            path: "/classify/pen",
            component: Pen,
          },
        ];
        let classifyTowRouter = routes.map((item,index)=>
        <Route path={item.path} component={item.component} exact={item.exact} key={index}></Route>
        )
        return (
          <div>
            <Switch>{classifyTowRouter}</Switch>
          </div>
        );
    }
}
