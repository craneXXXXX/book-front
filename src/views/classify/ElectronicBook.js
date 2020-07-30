import React, { Component } from "react";
import classifyAxios from "../../model/classify";
import "../../assets/css/classify/thebook.css";

export default class ElectronicBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      img: [],
      groupAfterDetail: [],
    };
  }
  componentDidMount() {
    classifyAxios.classifyElectronicBook().then((res) => {
      this.setState({
        img: res.data.content.banner[0].img,
        groupAfterDetail: res.data.content.pile[0].group,
        title: res.data.content.mini_banner.content
      });
      console.log(res.data);
    });
  }
  render() {
    let groupAfterDetail = this.state.groupAfterDetail.map((item, index) => (
      <div className="thebook-listone" key={index}>
        <div className="thebook-listone-title">{item.group_name}</div>
        <ul className="thebook-listone-content">
          {item.detail.map((inneritem, index) => (
            <li key={index}>
              <a href={inneritem.link_url}>{inneritem.title}</a>
            </li>
          ))}
        </ul>
      </div>
    ));
    let title = this.state.title.map((item, index) => (
      <li key={index}>
        <p className="thebook-select-title">{item.promo_title}</p>
        <p className="thebook-select-content">{item.promo_text}</p>
      </li>
    ));
    return (
      <div>
        <div className="thebook-header">
          <img src={this.state.img} alt='electronicbook'/>
        </div>
        <ul className="thebook-select">{title}</ul>
        {groupAfterDetail}
      </div>
    );
  }
}
