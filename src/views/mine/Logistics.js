import React, { Component } from "react";
import HeaderNav from "../../component/common/HeaderNav";
import mineAxios from "../../model/mine";
import "../../assets/css/mine/logistics.css";
import { connect } from "react-redux";
import { UpdateFlag } from "../../action/flagAction";

export class Logistics extends Component {
  constructor(props) {
    super(props);
    let userid = window.localStorage.getItem("loginId");
    this.state = {
      logisticslist: [],
    };
    mineAxios.searchlogistics(userid).then((res) => {
      if (res.data) {
        this.setState({
          logisticslist: res.data,
        });
      } else {
        this.setState({
          logisticslist: [],
        });
      }
    });
  }
  render() {
    console.log(this.state.logisticslist);
    let logisticsLists;
    if (this.state.logisticslist.length!=0) {
      logisticsLists = this.state.logisticslist.map((item) => (
        <li className="logisticsfull" key={item.id}>
          <div className="logisticsfull-content">
            <div>
              {item.username}
              <span className="logisticsfull-content-user">{item.usertel}</span>
            </div>
            <div>{item.address}</div>
          </div>
          <div
            className="logisticsfull-operation"
            onClick={() => {
              this.props.history.push(
                `/mine/updatelogistics?id=${item.id}&username=${item.username}&address=${item.address}&usertel=${item.usertel}`
              );
            }}
          >
            {item.def === "1" ? (
              <span className="logisticsfull-operation-def">默认</span>
            ) : (
              ""
            )}
            编辑
          </div>
        </li>
      ));
    }
    return (
      <div className="logisticscontainer">
        <HeaderNav navTitle="我的收货地址"></HeaderNav>
        {this.state.logisticslist.length != 0 ? (
          <div>
            <ul>{logisticsLists}</ul>
            <div
              className="addaddress-fixed"
              onClick={() => {
                this.props.history.push("/mine/inputlogistics");
              }}
            >
              新增地址
            </div>
          </div>
        ) : (
          <div className="logisticsempty">
            <div className="logisticsempty-content1">暂无收货地址</div>
            <div
              className="logisticsempty-content2"
              onClick={() => {
                this.props.history.push("/mine/inputlogistics");
              }}
            >
              添加新地址
            </div>
          </div>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Logistics);
