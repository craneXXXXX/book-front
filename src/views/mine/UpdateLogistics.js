import React, { Component } from "react";
import { Input, Tooltip, Cascader, Form, Button, message } from "antd";
import { connect } from "react-redux";
import { UserOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { UpdateFlag } from "../../action/flagAction";
import HeaderNav from "../../component/common/HeaderNav";
import "../../assets/css/mine/inputlogistics.css";
import mineAxios from "../../model/mine";

const options = [
  {
    value: "北京市",
    label: "北京市",
    children: [
      {
        value: "东城区",
        label: "东城区",
      },
      {
        value: "西城区",
        label: "西城区",
      },
      {
        value: "朝阳区",
        label: "朝阳区",
      },
      {
        value: "昌平区",
        label: "昌平区",
      },
    ],
  },
  {
    value: "天津市",
    label: "天津市",
    children: [
      {
        value: "和平区",
        label: "和平区",
      },
      {
        value: "河东区",
        label: "河东区",
      },
      {
        value: "河西区",
        label: "河西区",
      },
    ],
  },
  {
    value: "湖北省",
    label: "湖北省",
    children: [
      {
        value: "武汉市",
        label: "武汉市",
        children: [
          {
            value: "武昌区",
            label: "武昌区",
          },
          {
            value: "洪山区",
            label: "洪山区",
          },
          {
            value: "蔡甸区",
            label: "蔡甸区",
          },
        ],
      },
      {
        value: "孝感市",
        label: "孝感市",
        children: [
          {
            value: "安陆市",
            label: "安陆市",
          },
          {
            value: "云梦县",
            label: "云梦县",
          },
          {
            value: "汉川市",
            label: "汉川市",
          },
        ],
      },
      {
        value: "荆州市",
        label: "荆州市",
      },
    ],
  },
  {
    value: "广东省",
    label: "广东省",
    children: [
      {
        value: "广州市",
        label: "广州市",
        children: [
          {
            value: "天河区",
            label: "天河区",
          },
          {
            value: "海珠区",
            label: "海珠区",
          },
          {
            value: "花都区",
            label: "花都区",
          },
        ],
      },
      {
        value: "深圳市",
        label: "深圳市",
        children: [
          {
            value: "福田区",
            label: "福田区",
          },
          {
            value: "南山区",
            label: "南山区",
          },
          {
            value: "宝安区",
            label: "宝安区",
          },
        ],
      },
      {
        value: "珠海市",
        label: "珠海市",
      },
      {
        value: "汕头市",
        label: "汕头市",
      },
    ],
  },
];
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 40,
  },
};
export class InputLogistics extends Component {
  constructor(props) {
    super(props);
    let info = decodeURIComponent(
      window.location.href.substr(window.location.href.indexOf("?") + 1)
    );
    let infoObj = {};
    info = info.split("&");
    info.forEach((item) => {
      item = item.split("=");
      infoObj[item[0]] = item[1];
    });
    this.state = {
      id: infoObj.id,
      address: infoObj.address,
      username: infoObj.username,
      usertel: infoObj.usertel,
    };
  }
  componentWillUnmount() {
    this.props.UpdateFlag(false);
    let logisticsname = window.localStorage.getItem("logisticsname");
    let logisticsaddress = window.localStorage.getItem("logisticsaddress");
    this.setState({
      username: logisticsname,
      address: logisticsaddress,
    });
  }
  onFinish = (values) => {
    console.log(values);
    let username = "";
    if (values.username == undefined) {
      username = this.state.username;
    } else {
      username = values.username;
    }
    let usertel = "";
    if (values.usertel == undefined) {
      usertel = this.state.usertel;
    } else {
      usertel = values.usertel;
    }
    let address = "";
    if (values.address == undefined) {
      address = this.state.address;
    } else {
      values.address.forEach((item) => {
        address += item;
      });
    }
    let id = this.state.id;
    let times = new Date().format("yyyy-MM-dd HH:mm:ss");
    mineAxios
      .updatelogistics(id, username, address, usertel, times)
      .then((res) => {
        console.log(res.data.code);
        if (res.data.code === 1) {
          message.success(res.data.msg);
        } else {
          message.warning(res.data.msg);
        }
        this.props.history.push("/mine/logistics");
      });
  };
  render() {
    this.props.UpdateFlag(true);
    return (
      <div>
        <div className="inputlogistics-header">
          <HeaderNav navTitle="我的收货地址"></HeaderNav>
        </div>

        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item name="username">
            <Input
              className="inputlogistics-input"
              defaultValue={this.state.username}
              size="large"
              placeholder="请输入收件人"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            className="inputlogistics-input"
            name="usertel"
            rules={[
              {
                required: true,
                message: "手机号不能为空",
              },
              {
                pattern: /^[0-9]{11}$/gi,
                message: "只能是11位数字",
              },
            ]}
          >
            <Input
              className="inputlogistics-input"
              defaultValue={this.state.usertel}
              size="large"
              //   placeholder="请输入手机号(只能是11位数字)"
              prefix={<WhatsAppOutlined />}
            />
          </Form.Item>
          <Form.Item name="address">
            <Cascader
              options={options}
              placeholder="请选择收货地址"
              placeholder={this.state.address}
            />
          </Form.Item>
          <div
            className="preserve-address-def"
            onClick={() => {
              mineAxios.updatelogisticsdef(this.state.id).then((res) => {
                if (res.data.code === 1) {
                  message.success(res.data.msg);
                } else {
                  message.warning(res.data.msg);
                }
              });
            }}
          >
            设为默认地址
          </div>
          <div
            className="preserve-address-def"
            onClick={() => {
              mineAxios.dellogistics(this.state.id).then((res) => {
                if (res.data.code === 1) {
                  message.success(res.data.msg);
                } else {
                  message.warning(res.data.msg);
                }
              });
              this.props.history.push('/mine/logistics');
            }}
          >
            删除地址
          </div>
          <button className="preserve-address">保存收货信息</button>
        </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(InputLogistics);
