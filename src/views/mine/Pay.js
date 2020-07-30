import React, { Component } from "react";
import HeaderNav from "../../component/common/HeaderNav";
import mineAxios from "../../model/mine";
import "../../assets/css/mine/pay.css";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Select, Divider, message } from "antd";

const { Option } = Select;
export default class Pay extends Component {
  constructor(props) {
    super(props);
    let userid = window.localStorage.getItem("loginId");
    this.state = {
      orderlistlive: [],
      items: [],
      defaddress: "北京市昌平区",
      totalPrice: 0,
      topayaddress: "北京市昌平区",
    };
    mineAxios
      .searchorderlive(userid, this.props.match.params.id)
      .then((res) => {
        let totalprice = 0;
        res.data.forEach((item) => {
          totalprice += item.buynum * item.goodsprice;
        });
        this.setState({
          orderlistlive: res.data,
          totalPrice: totalprice,
        });
        console.log(this.state.orderlistlive);
      });
    mineAxios.searchlogistics(userid).then((res) => {
      if(res.data.length===0){
        let payUrl=window.location.href.substr(window.location.href.indexOf('#')+1);
        window.localStorage.setItem("payUrl", payUrl);
        this.props.history.push("/mine/logistics");
      }else{
        let def = res.data.filter((item) => item.def == "1");
        console.log(def);
        def =
          def[0].username +
          " " +
          def[0].orderaddress +
          " " +
          def[0].usertel.replace(def[0].usertel.substring(3, 7), "****");
        let addresslist = res.data.map((item) => {
          item.usertel = item.usertel.replace(
            item.usertel.substring(3, 7),
            "****"
          );
          return item.username + " " + item.address + " " + item.usertel;
        });
        this.setState({
          items: addresslist,
          defaddress: def,
        });
      }
    });
  }
  onSelect = (value) => {
    this.setState({
      topayaddress: value,
    });
  };
  render() {
    const { items } = this.state;
    let orderList = this.state.orderlistlive.map((item) => (
      <li className="orderlist" key={item.id}>
        <div className="orderlist-imgbox">
          <img src={item.goodsimg} alt='pay'/>
        </div>
        <div className="orderlist-content">
          <h6 className="orderlist-title">{item.goodsname}</h6>
          <p className="orderlist-times">发货时间：付款后48小时内</p>
        </div>
        <div className="orderlist-num">
          <p className="orderlist-price">￥{item.goodsprice}</p>
          <p className="orderlist-buynum">
            <CloseOutlined />
            {item.buynum}
          </p>
        </div>
      </li>
    ));
    return (
      <div>
        <HeaderNav navTitle="支付订单"></HeaderNav>
        <Select
          style={{ width: 375 }}
          placeholder={this.state.defaddress}
          onSelect={this.onSelect}
          dropdownRender={(menu) => (
            <div>
              {menu}
              <Divider style={{ margin: "4px 0" }} />
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  padding: 8,
                }}
              >
                <a
                  style={{
                    flex: "none",
                    padding: "8px",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    this.props.history.push("/mine/inputlogistics");
                  }}
                >
                  <PlusOutlined /> 新增地址
                </a>
              </div>
            </div>
          )}
        >
          {items.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
        <ul>{orderList}</ul>
        <div className="orderlist-totalprice">
          总价：
          <span className="orderlist-totalprice-price">
            ￥{this.state.totalPrice}
          </span>
        </div>
        <div
          className="orderlist-footer"
          onClick={() => {
            let paytimes = new Date().format("yyyy-MM-dd HH:mm:ss");
            if (this.state.topayaddress) {
              this.state.orderlistlive.forEach((item) => {
                mineAxios
                  .updateorderaddress(
                    item.id,
                    this.state.topayaddress,
                    paytimes
                  )
                  .then((res) => {
                    if (res.data.code === 1) {
                      message.success(res.data.msg);
                    } else {
                      message.warning(res.data.msg);
                    }
                  });
              });
              this.props.history.push("/mine/order");
            } else {
              this.state.orderlistlive.forEach((item) => {
                mineAxios
                  .updateorderaddress(
                    item.id,
                    this.state.defaddress,
                    paytimes
                  )
                  .then((res) => {
                    if (res.data.code === 1) {
                      message.success(res.data.msg);
                    } else {
                      message.warning(res.data.msg);
                    }
                  });
              });
              this.props.history.push("/mine/order");
            }
          }}
        >
          去支付
        </div>
      </div>
    );
  }
}
