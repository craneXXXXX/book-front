import React, { Component } from "react";
import "../../assets/css//mine/beforelogin.css";
import { RightOutlined } from "@ant-design/icons";
import Preference from "../../component/common/Preference";

export default class AfterLogin extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  render() {
    return (
      <div>
        <div className="afterlogin-header">
          <div className="afterlogin-header-imgbox">
            <img
              src="http://img7x2.ddimg.cn/imghead/22/12/7195820603422-1_e.png?1595573819"
              alt="afterlogin"
            />
          </div>
          <div className="afterlogin-header-username">
            <p>{window.localStorage.getItem("loginName")}</p>
            <p>
              <span>
                余额 <strong>0.00</strong>
              </span>
              <span>
                礼品卡 <strong>0.00</strong>
              </span>
              <span>
                积分 <strong>0.00</strong>
              </span>
            </p>
          </div>
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
          <p className="beforelogin-order-p1" onClick={
            ()=>{
              this.props.history.push("/mine/order");
            }
          }>
            <img
              src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-1.png"
              alt="afterlogin"
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
                alt="afterlogin"
              />
            </p>
            <p className="beforelogin-pay-p2">待付款</p>
          </li>
          <li>
            <p className="beforelogin-pay-p1">
              <img
                src="http://img63.ddimg.cn/upload_img/00487/11111/shouhuo-07.png"
                alt="afterlogin"
              />
            </p>
            <p className="beforelogin-pay-p2">待收货</p>
          </li>
          <li>
            <p className="beforelogin-pay-p1">
              <img
                src="http://img61.ddimg.cn/upload_img/00555/touch/pd-return.png"
                alt="afterlogin"
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
                alt="afterlogin"
              />
              <span>会员中心</span>
            </p>
            <p className="beforelogin-order-p2">
              <RightOutlined></RightOutlined>
            </p>
          </li>
          <li
            className="beforelogin-order"
          >
            <p className="beforelogin-order-p1">
              <img
                src="http://img62.ddimg.cn/upload_img/00528/1234/111.png"
                alt="afterlogin"
              />
              <span>我的电子书</span>
            </p>
            <p className="beforelogin-order-p2">
              <RightOutlined></RightOutlined>
            </p>
          </li>
          <li
            className="beforelogin-order"
          >
            <p className="beforelogin-order-p1">
              <img
                src="http://img61.ddimg.cn/upload_img/00487/11111/wd-012-04.png"
                alt="afterlogin"
              />
              <span>我的礼品券</span>
            </p>
            <p className="beforelogin-order-p2">
              <RightOutlined></RightOutlined>
            </p>
          </li>
          <li
            className="beforelogin-order"
            onClick={() => {
              this.props.history.push("/mine/logistics");
            }}
          >
            <p className="beforelogin-order-p1">
              <img
                src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-05.png"
                alt="afterlogin"
              />
              <span>收货地址</span>
            </p>
            <p className="beforelogin-order-p2">
              <RightOutlined></RightOutlined>
            </p>
          </li>
        </ul>
        <div
          className="exit-login"
          onClick={() => {
            window.localStorage.removeItem("loginName");
            window.localStorage.removeItem("loginId");
            window.location.reload();
          }}
        >
          退出登录
        </div>
        <Preference></Preference>
      </div>
    );
  }
}
