import React, { Component } from "react";
import RouterView from "./router/AppRouter";
import { HashRouter as Router } from "react-router-dom";
import "./assets/css/app.css";
import {
  HomeOutlined,
  BarsOutlined,
  UserOutlined,
  InboxOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { UpdateFlag } from "./action/flagAction";

Date.prototype.format = function (str) {
  let year=this.getFullYear();
  let month=this.getMonth()+1;
  let day=this.getDate();
  let hour=this.getHours();
  let minutes=this.getMinutes();
  let seconds=this.getSeconds();
  str = str
    .replace("yyyy", year)
    .replace("MM", month)
    .replace("dd", day)
    .replace("HH", hour)
    .replace("mm", minutes)
    .replace("ss", minutes);
  return str;
};
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {this.props.flag ? (
            ""
          ) : (
            <div className="app-nav">
              <a
                href="#/"
                
              >
                <HomeOutlined />
                首页
              </a>
              <a
                href="#/classify"
                
              >
                <BarsOutlined />
                分类
              </a>
              <a
                href="#/worthbuying"
                
              >
                <InboxOutlined />
                值得买
              </a>
              <a
                href="#/shoppingcar"
                
              >
                <ShoppingCartOutlined />
                购物车
              </a>
              <a
                href="#/mine"
                
              >
                <UserOutlined />
                我的
              </a>
            </div>
          )}
          <div className="app-content">
            <RouterView></RouterView>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  flag: state.flagObj.flag,
});

const mapDispatchToProps = {
  UpdateFlag,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
