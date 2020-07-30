import React, { Component } from 'react'
import HeaderNav from '../../component/common/HeaderNav'
import mine from '../../model/mine';
import mineAxios from '../../model/mine'
import { CloseOutlined } from "@ant-design/icons";
import '../../assets/css/mine/order.css'
import { message } from 'antd';

export default class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            orderpaylist:[]
        }
        let userid=window.localStorage.getItem('loginId');
        mineAxios.searchorderpay(userid).then((res) => {
          console.log(res.data);
          this.setState({
            orderpaylist: res.data,
          });
        });
    }
    changeStyle=(id)=>{
      let orderpaylist = this.state.orderpaylist.map((item) => {
        if (item.id == id) {
          item.type = 3;
        }
        return item;
      });
      this.setState({
        orderpaylist: orderpaylist,
      });
    }
    render() {
        let orderPay = this.state.orderpaylist.map((item) => (
          <li className="orderpaylist" key={item.id}>
            <div className="orderpaylist-imgbox">
              <img src={item.goodsimg} />
            </div>
            <div className="orderpaylist-content">
              <h6 className="orderpaylist-title">{item.goodsname}</h6>
              <p>
                <span className="orderpaylist-price">￥{item.goodsprice}</span>
                <span className="orderpaylist-buynum">
                  <CloseOutlined />
                  {item.buynum}
                </span>
              </p>

              {item.type == 1 ? (
                <div className="orderpaylist-btn">
                  <button className="orderpaylist-withdraw">退货</button>
                  <button className="orderpaylist-remind">提醒发货</button>
                </div>
              ) : item.type == 2 ? (
                <div className="orderpaylist-btn">
                  <button className="orderpaylist-remind" onClick={
                    ()=>{
                      this.changeStyle(item.id);
                      let receivetimes = new Date().format("yyyy-MM-dd HH:mm:ss");
                      mineAxios.updateordertypereceive(item.id,3,receivetimes).then((res) => {
                        if(res.data.code===1){
                          message.success(res.data.msg);
                        }else{
                          message.warning(res.data.msg);
                        }
                      });
                    }
                  }>确认收货</button>
                </div>
              ) : item.type == 0 ? (
                <div className="orderpaylist-btn">
                  <button
                    className="orderpaylist-remind"
                    onClick={() => {
                      mineAxios.searchorderbyid(item.id).then((res) => {
                        this.props.history.push(
                          `/mine/pay/${res.data.buytimes}`
                        );
                      });
                    }}
                  >
                    待支付
                  </button>
                </div>
              ) : (
                <div className="orderpaylist-btn">
                  <button className="orderpaylist-withdraw">订单已完成</button>
                </div>
              )}
            </div>
          </li>
        ));
        return (
            <div>
                <HeaderNav navTitle="我的订单"></HeaderNav>
                <ul className='orderlist-bigcontainer'>{orderPay}</ul>
            </div>
        )
    }
}
