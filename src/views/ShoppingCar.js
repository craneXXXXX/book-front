import React, { Component } from "react";
import PreferenceList from "../component/common/Preference";
import "../assets/css/shoppingcar.css";
import worthbuyingAxios from "../model/worthbuying";
import { connect } from "react-redux";
import { UpdateFlag } from "../action/flagAction";
import HeaderNav from "../component/common/HeaderNav";
import{ message } from "antd";

export class ShoppingCar extends Component {
  constructor(props) {
    super(props);
    let userid = window.localStorage.getItem("loginId");
    this.state = {
      data: [],
      userid: userid,
      ischeckedall: false,
      totalPrice: 0,
    };
    this.updateList(userid);
  }
  componentWillUnmount() {
    this.props.UpdateFlag(false);
  }
  updateList = (userid) => {
    let checkedonelength =0;
    worthbuyingAxios.shoppingcarlist(userid).then((res) => {
      if(res.data.length!==0){
        res.data.forEach((item) => {
          item.ischecked = item.ischecked - 0;
        });
       checkedonelength = res.data.filter((item) => item.ischecked).length;
      }
      
      if (checkedonelength == res.data.length) {
        this.setState({
          ischeckedall: true,
        });
      } else {
        this.setState({
          ischeckedall: false,
        });
      }
      if (res.data != []) {
        this.setState({
          data: res.data,
        });
      } else {
        this.setState({
          data: [],
        });
      }
      this.getTotal();
    });
  };
  reduce = (goodsid, userid, times) => {
    worthbuyingAxios
      .shoppingcarlistreduceone(goodsid, userid, times)
      .then((res) => {
        if (res.data.code === 1) {
          message.success(res.data.msg);
        } else {
          message.warning(res.data.msg);
        }
      });
    this.updateList(this.state.userid);
  };
  add = (goodsid, userid, times) => {
    worthbuyingAxios
      .shoppingcarlistaddone(goodsid, userid, times)
      .then((res) => {
        if (res.data.code ===1) {
          message.success(res.data.msg);
        } else {
          message.warning(res.data.msg);
        }
      });
    this.updateList(this.state.userid);
  };
  del = (goodsid, userid) => {
    worthbuyingAxios.shoppingcarlistDel(goodsid, userid).then((res) => {
      if (res.data.code ===1) {
        message.success(res.data.msg);
      } else {
        message.warning(res.data.msg);
      }
    });
    this.updateList(this.state.userid);
  };
  getTotal = () => {
    let totalPrice = 0;
    this.state.data.forEach((item) => {
      if (item.ischecked) {
        totalPrice += (item.buynum - 0) * (item.goodsprice - 0);
      }
    });
    this.setState({
      totalPrice: totalPrice,
    });
  };
  checkAll = (e) => {
    let flag = e.target.checked;
    this.setState({
      data: this.state.data.map((item) => (item.isChecked = flag)),
    });
  };
  render() {
    this.props.UpdateFlag(true);
    let trList;
    if (this.state.data) {
      trList = this.state.data.map((item) => (
        <li className="shoppingcarlist" key={item.id}>
          <div className="shoppingcarlist-checkone">
            <input
              type="checkbox"
              className="shoppingcarlist-checkone-btn"
              checked={item.ischecked}
              onChange={(e) => {
                let ischecked = 0;
                if (e.target.checked == true) {
                  ischecked = 1;
                } else {
                  ischecked = 0;
                }
                worthbuyingAxios
                  .updateischecked(item.id, ischecked)
                  .then((res) => {
                    if (res.data.code ===1) {
                      message.success(res.data.msg);
                    } else {
                      message.warning(res.data.msg);
                    }
                  });
                this.updateList(this.state.userid);
              }}
            />
          </div>
          <div className="shoppingcarlist-imgbox">
            <img src={item.goodsimg} alt="shoppingcarlist" />
          </div>
          <div className="shoppingcarlist-content">
            <div className="shoppingcarlist-content-title">
              {item.goodsname}
            </div>
            <div className="shoppingcarlist-content-price">
              ￥{item.goodsprice}
            </div>
            <div>库存：{item.goodsnum}件</div>
            <div className="shoppingcarlist-content-operation">
              <div className="shoppingcarlist-num-stepper">
                <span
                  className="num-stepper-click"
                  onClick={() => {
                    if (item.buynum > 1) {
                      let times = new Date().format("yyyy-mm-dd");
                      this.reduce(item.goodsid, this.state.userid, times);
                    }
                  }}
                >
                  -
                </span>
                <span className="num-stepper-num">{item.buynum}</span>
                <span
                  className="num-stepper-click"
                  onClick={() => {
                    let times = new Date().format("yyyy-mm-dd");
                    this.add(item.goodsid, this.state.userid, times);
                  }}
                >
                  +
                </span>
              </div>
              <button
                className="shoppingcarlist-content-del"
                onClick={() => {
                  this.del(item.goodsid, this.state.userid);
                }}
              >
                删除
              </button>
            </div>
          </div>
        </li>
      ));
    } else {
      this.setState({
        data: [],
      });
    }
    return (
      <div>
        <HeaderNav navTitle="购物车"></HeaderNav>
        {this.state.data.length !== 0 ? (
          <div>
            <div className="shoppingcar-full">
              <div className="shoppingcarlist-checkall">
                <input
                  type="checkbox"
                  className="shoppingcarlist-checkall-btn"
                  checked={this.state.ischeckedall}
                  onChange={(e) => {
                    let ischecked = 0;
                    if (e.target.checked == true) {
                      ischecked = 1;
                    } else {
                      ischecked = 0;
                    }
                    worthbuyingAxios
                      .updateischeckedall(ischecked)
                      .then((res) => {
                        if (res.data.code ===1) {
                          message.success(res.data.msg);
                        } else {
                          message.warning(res.data.msg);
                        }
                      });
                    this.updateList(this.state.userid);
                  }}
                />{" "}
                全选
              </div>
              <ul>{trList}</ul>
              <div className="shoppingcarlist-footer">
                <div
                  className="shoppingcarlist-footer-btn"
                  onClick={() => {
                    let buytimes = new Date().format("yyyy-MM-dd HH:mm:ss");
                    let userid = this.state.userid;
                    let orderlist = this.state.data.filter(
                      (item) => item.ischecked
                    );
                    orderlist.forEach((item) => {
                      worthbuyingAxios
                        .addorder(
                          userid,
                          item.goodsid,
                          item.goodsname,
                          item.goodsprice,
                          item.goodsimg,
                          item.buynum,
                          item.goodsnum,
                          buytimes,
                          0,
                          0
                        )
                        .then((res) => {
                          if (res.data.code === 1) {
                            message.success(res.data.msg);
                          } else {
                            message.warning(res.data.msg);
                          }
                        });
                    });
                    this.props.history.push(`/mine/pay/${buytimes}`);
                  }}
                >
                  结算({this.state.data.length})
                </div>
                <div className="shoppingcarlist-footer-tip">
                  合计:
                  <span className="shoppingcarlist-footer-tip-num">
                    ￥{this.state.totalPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="shoppingcar-empty">
            <div className="shoppingcar-empty-content">
              <p className="shoppingcar-empty-tip">您还没有购买任何商品</p>
              <p className="shoppingcar-empty-btn">
                <button>逛一逛</button>
                <button>我的收藏</button>
              </p>
            </div>
          </div>
        )}
        <PreferenceList></PreferenceList>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCar);
