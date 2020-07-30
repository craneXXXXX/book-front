import React, { Component } from 'react'
import {
  LeftOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import '../../assets/css/common/headerNav.css'

export default class HeaderNav extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
          <div>
            <div className="worthbuying-header">
              <LeftOutlined
                onClick={() => {
                  window.history.go(-1);
                }}
              />
              {this.props.navTitle}
              <EllipsisOutlined />
            </div>
          </div>
        );
    }
}
