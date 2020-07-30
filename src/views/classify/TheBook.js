import React, { Component } from "react";
import classifyAxios from "../../model/classify";
import "../../assets/css/classify/thebook.css";

export default class TheBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      groupOneDetail: [],
      img: [],
      groupAfterDetail: [],
    };
  }
  componentDidMount() {
    classifyAxios.classifyTheBook().then((res) => {
      this.setState({
        groupOneDetail: res.data.content.pile[0].group[0].detail,
        img: res.data.content.banner[0].img,
        groupAfterDetail: res.data.content.pile[0].group.splice(1),
        title: res.data.content.mini_banner.content
      });
      console.log(res.data);
    });
  }
  render() {
    let groupOneDetail = this.state.groupOneDetail.map((item, index) => (
      <li key={index}>
        <img src={item.icon} alt="groupOne" />
        <p>{item.title}</p>
      </li>
    ));
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
          <img src={this.state.img} alt='thebood'/>
        </div>
        <ul className="thebook-select">{title}</ul>
        <div className="thebook-listone">
          <div className="thebook-listone-title">榜单</div>
          <ul className="thebook-listone-content">{groupOneDetail}</ul>
        </div>
        {groupAfterDetail}
      </div>
    );
  }
}
