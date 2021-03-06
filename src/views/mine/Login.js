import React, { Component } from "react";
import { LeftOutlined, EllipsisOutlined } from "@ant-design/icons";
import "../../assets/css/mine/login.css";
import { Form, Input, message,  } from "antd";
import mineAxios from '../../model/mine'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
export default class Login extends Component {
  onFinish = (values) => {
    mineAxios.login(values.username,values.userpwd,1).then(res=>{
        console.log(res.data);
        if(res.data.code!==1){
            message.warning(res.data.msg);
        }else{
            message.success(res.data.msg);
            window.localStorage.setItem("loginName", values.username);
            window.localStorage.setItem("loginId", res.data.userid);
            let backUrl=window.localStorage.getItem("backUrl");
            this.props.history.push(backUrl);
        }
    })
  };
 
  onFinishFailed = () => {};
  render() {
    return (
      <div>
        <div className="login-header">
          <LeftOutlined className="login-header-left" onClick={()=>{
            window.history.go(-1);
          }}></LeftOutlined>
          <p>BOOK 登录</p>
          <EllipsisOutlined className="login-header-right"></EllipsisOutlined>
        </div>
        {
          <div className="login-input">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                className="login-input"
                label="用户名"
                name="username"
                help="只能是2到6个字母或数字"
                rules={[
                  {
                    required: true,
                    message: "用户名不能为空",
                  },
                  {
                    pattern: /^[a-zA-Z0-9]{2,6}$/gi,
                    message: "只能是2到6个字母或数字",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="login-input"
                label="密码"
                name="userpwd"
                help="只能是2到6个字母或数字"
                rules={[
                  {
                    required: true,
                    message: "请输入你的密码",
                  },
                  {
                    pattern: /^[a-zA-Z0-9]{2,6}$/gi,
                    message: "只能是2到6个字母或数字",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <button className="login-btn">提交</button>
              <p
                className="togoregister-btn"
                onClick={() => {
                  this.props.history.push("/mine/register");
                }}
              >
                立即注册
              </p>
            </Form>
          </div>
        }
      </div>
    );
  }
}
 