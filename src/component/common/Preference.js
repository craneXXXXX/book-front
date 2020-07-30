import React, { Component } from 'react'
import commonAxios from '../../model/common'
import '../../assets/css/common/preference.css'
import {CheckCircleOutlined} from '@ant-design/icons';

export default class Preference extends Component {
    constructor(props){
        super(props);
        this.state={
            preferenceList:[]
        }
    }
    componentDidMount(){
        commonAxios.preferenceList().then(res=>{
            console.log(res.data);
            this.setState({
                preferenceList:res.data.data
            })
        })

    }
    render() {
        let preferenceList = this.state.preferenceList.map((item, index) => (
          <li key={index}>
            <div className="preference-img">
              <img src={item.image_url} />
            </div>
            <div className="preference-title">{item.name}</div>
            <div className="preference-tag">
              {item.product_tags.map((i, index) => (
                <span key={index}>{i.name}</span>
              ))}
            </div>
            <div className="preference-price">￥ {item.price}</div>
            <div className="preference-comment">{item.review_count}评价</div>
          </li>
        ));
        return (
          <div>
            <div className="preference-header">
              <span><CheckCircleOutlined className="CheckCircleOutlinedIcon"></CheckCircleOutlined></span> 根据您的偏好猜您可能喜欢
            </div>
            <ul className="preference">{preferenceList}</ul>
          </div>
        );
    }
}
