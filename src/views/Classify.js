import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import ClassifyTowRouter from "../router/ClassifyTwoRouter";
import { LeftOutlined, EllipsisOutlined } from "@ant-design/icons";
import Search from "../component/home/Search";
import "../assets/css/classify.css";


export default class Classify extends Component {
  classifyActive = (e) => {
    let aArr = document.querySelectorAll("a");
    aArr.forEach(item=> {
        item.className='';
    });
    e.target.className='active';
  };

  render() {
      let aArr = [
        {
          href: "#/classify",
          name: "图书",
          isActive: "active",
        },
        {
          href: "#/classify/childrenbook",
          name: "童书",
        },
        {
          href: "#/classify/oldbook",
          name: "旧书拍卖",
        },
        {
          href: "#/classify/electronicbook",
          name: "电子书",
        },
        {
          href: "#/classify/phone",
          name: "手机数码",
        },
        {
          href: "#/classify/womandress",
          name: "女装",
        },
        {
          href: "#/classify/twoshoe",
          name: "男女鞋",
        },
        {
          href: "#/classify/food",
          name: "食品生鲜",
        },
        {
          href: "#/classify/pen",
          name: "创意文具",
        },
        {
          href: "#/classify/sport",
          name: "运动户外",
        },
        {
          href: "#/classify/oa",
          name: "电脑办公",
        }
      ];
      let aLink = aArr.map((item, index) => (
        <a onClick={(e) => {
            this.classifyActive(e);
          }}
          href={item.href}
          className={item.isActive}
          key={index}
        >{item.name}</a>
      ));
    return (
      <div className="classify-container">
        <div className="classify-header">
          <LeftOutlined className="header-left"></LeftOutlined>
          <Search></Search>
          <EllipsisOutlined className="header-classify"></EllipsisOutlined>
        </div>
        <div className="classify-body">
          <Router>
            <div className="classify-two-nav">{aLink}</div>
            <div className="classify-two-content">
              <ClassifyTowRouter></ClassifyTowRouter>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
