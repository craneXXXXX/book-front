import React, { Component } from "react";
import HeaderNav from "../../component/common/HeaderNav";
import "../../assets/css/worthbuying/detail.css";
import { connect } from "react-redux";
import { UpdateFlag } from "../../action/flagAction";
import {
  ShopOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import DetailComment from "./DetailComment";
import worthbuyingAxios from '../../model/worthbuying'
import {message} from 'antd'

export class detail extends Component {
  constructor(props) {
    super(props);
    let path = decodeURIComponent(
      window.location.href.substr(window.location.href.indexOf("?") + 1)
    );
    path = path.split("&");
    let detailObj = {};
    path.forEach((item) => {
      item = item.split("=");
      detailObj[item[0]] = item[1];
    });
    this.state = {
      goodsid: detailObj.goodsid,
      goodsname: detailObj.goodsname,
      goodsimg: detailObj.goodsimg,
      goodsprice: detailObj.goodsprice,
      goodsnum: detailObj.goodsnum,
      goodsdiscount: detailObj.goodsdiscount,
      buynum: 1,
      shoppingcarnum:0
    };
    let userid = window.localStorage.getItem("loginId");
    worthbuyingAxios.shoppingcarlist(userid).then((res) => {
      this.setState({
        shoppingcarnum:res.data.length
      });
    });
  }
  componentWillUnmount(){

  }
  render() {
    this.props.UpdateFlag(true);
    return (
      <div className="worthbuying-detail">
        <HeaderNav navTitle="详情页"></HeaderNav>
        <div className="worthbuying-detail-imgbox">
          <img src={this.state.goodsimg} />
        </div>
        <div className="worthbuying-detail-title">{this.state.goodsname}</div>
        <div className="worthbuying-detail-explain">
          按成语含义和应用场景分类，掌握更轻松，使用更贴切，让作文和演讲更出色。20个大类+500个故事+8000个成语，涵盖小学到高中需用成语。教育部阅读指导书目，南京大学博导苗怀明审订，重点学校语文老师推荐
        </div>
        <div className="worthbuying-detail-depreciate">
          “拍一拍”{new Date().getMonth() + 1}月的尾巴 每满100减40 &gt; &gt;
        </div>
        <div className="num-stepper-box">
          <span className="worthbuying-detail-pricenow">
            ￥{this.state.goodsprice}
          </span>
          （7.90折）
          <div className="num-stepper">
            <span
              className="num-stepper-click"
              onClick={() => {
                if (this.state.buynum > 1) {
                  this.setState({
                    buynum: --this.state.buynum,
                  });
                }
              }}
            >
              -
            </span>
            <span className="num-stepper-num">{this.state.buynum}</span>
            <span
              className="num-stepper-click"
              onClick={() => {
                this.setState({
                  buynum: ++this.state.buynum,
                });
              }}
            >
              +
            </span>
          </div>
        </div>
        <div className="worthbuying-detail-discount">
          定价：<del>{this.state.goodsdiscount}</del>
        </div>
        <div className="worthbuying-detail-footer">
          <div className="detail-footer-icon">
            <ShopOutlined />
            <span>店铺</span>
          </div>
          <div className="detail-footer-icon">
            <HeartOutlined />
            <span>收藏</span>
          </div>
          <div className="detail-footer-icon">
            <ShoppingCartOutlined />
            <span>购物车</span>
            <span className="detail-shoppingcar-num">{this.state.shoppingcarnum}</span>
          </div>
          <div className="detail-now-buy">立即购买</div>
          <div
            className="detail-add-shoppingcar"
            onClick={() => {
              if (window.localStorage.getItem("loginId")) {
                let userid = window.localStorage.getItem("loginId");
               let times = new Date().format("yyyy-MM-dd HH:mm:ss");
                worthbuyingAxios
                  .addShoppingcar(
                    this.state.goodsname,
                    this.state.goodsprice,
                    this.state.goodsimg,
                    this.state.goodsid,
                    this.state.buynum,
                    this.state.goodsnum,
                    times,
                    userid
                  )
                  .then((res) => {
                    if (res.data.code == "1") {
                      message.success(res.data.msg);
                    } else {
                      message.warning(res.data.msg);
                    }
                  });
              } else {
                let backUrl = window.location.hash.substr(1);
                window.localStorage.setItem("backUrl", backUrl);
                this.props.history.push("/mine/login");
              }
            }}
          >
            加入购物车
          </div>
        </div>

        <div className="detail-comment-list">
          <DetailComment></DetailComment>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(detail);
