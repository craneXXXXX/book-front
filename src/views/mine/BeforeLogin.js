import React, { Component } from "react";
// import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import "../../assets/css//mine/beforelogin.css";
import { RightOutlined } from "@ant-design/icons";
import Preference from "../../component/common/Preference";
import { withRouter } from "react-router-dom";
// import Login from '../../views/mine/Login'
// import Register from '../../views/mine/Register'

class BeforeLogin extends Component {
  constructor(props) {
    super(props);
  }
  gotoLogin = () => {
    let backUrl = window.location.hash.substr(1);
    window.localStorage.setItem('backUrl',backUrl);
    this.props.history.push("/mine/login");
  };
  render() {
    return (
      <div>
        <div className="beforelogin-header">
          <button onClick={this.gotoLogin}>登录 / 注册</button>
        </div>
        <ul className="beforelogin-collection">
          <li>
            <p>0</p>
            <p>收藏的商品</p>
          </li>
          <li>
            <p>0</p>
            <p>关注的店铺</p>
          </li>
          <li>
            <p>0</p>
            <p>我的足迹</p>
          </li>
        </ul>
        <div className="beforelogin-order">
          <p className="beforelogin-order-p1">
            <img
              src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-1.png"
              alt="mine"
            />
            <span>我的订单</span>
          </p>
          <p className="beforelogin-order-p2">
            查看全部购买商品 <RightOutlined></RightOutlined>
          </p>
        </div>
        <ul className="beforelogin-pay">
          <li>
            <p className="beforelogin-pay-p1">
              <img
                src="http://img60.ddimg.cn/upload_img/00487/11111/fukuan-07.png"
                alt="mine"
              />
            </p>
            <p className="beforelogin-pay-p2">待付款</p>
          </li>
          <li>
            <p className="beforelogin-pay-p1">
              <img
                src="http://img63.ddimg.cn/upload_img/00487/11111/shouhuo-07.png"
                alt="mine"
              />
            </p>
            <p className="beforelogin-pay-p2">待收货</p>
          </li>
          <li>
            <p className="beforelogin-pay-p1">
              <img
                src="http://img61.ddimg.cn/upload_img/00555/touch/pd-return.png"
                alt="mine"
              />
            </p>
            <p className="beforelogin-pay-p2">退换货</p>
          </li>
        </ul>
        <ul>
          <li className="beforelogin-order">
            <p className="beforelogin-order-p1">
              <img
                src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png"
                alt="mine"
              />
              <span>会员中心</span>
            </p>
            <p className="beforelogin-order-p2">
              <RightOutlined></RightOutlined>
            </p>
          </li>
          <li className="beforelogin-order">
            <p className="beforelogin-order-p1">
              <img
                src="http://img62.ddimg.cn/upload_img/00528/1234/111.png"
                alt="mine"
              />
              <span>我的电子书</span>
            </p>
            <p className="beforelogin-order-p2">
              <RightOutlined></RightOutlined>
            </p>
          </li>
          <li className="beforelogin-order">
            <p className="beforelogin-order-p1">
              <img
                src="http://img61.ddimg.cn/upload_img/00487/11111/wd-012-04.png"
                alt="mine"
              />
              <span>我的订单</span>
            </p>
            <p className="beforelogin-order-p2">
              <RightOutlined></RightOutlined>
            </p>
          </li>
          <li className="beforelogin-order">
            <p className="beforelogin-order-p1">
              <img
                src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-05.png"
                alt="mine"
              />
              <span>收货地址</span>
            </p>
            <p className="beforelogin-order-p2">
              <RightOutlined></RightOutlined>
            </p>
          </li>
        </ul>
        <Preference></Preference>
      </div>
    );
  }
}
export default withRouter(BeforeLogin);
