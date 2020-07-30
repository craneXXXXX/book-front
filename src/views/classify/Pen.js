import React, { Component } from "react";
import classifyAxios from "../../model/classify";
import "../../assets/css/classify/thebook.css";

export default class Pen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      img: [],
    };
  }
  componentDidMount() {
    classifyAxios.classifyPen().then((res) => {
      this.setState({
        img: res.data.content.banner[0].img,
        title: res.data.content.mini_banner.content,
      });
      console.log(res.data);
    });
  }
  render() {
    
    let title = this.state.title.map((item, index) => (
      <li key={index}>
        <p className="thebook-select-title">{item.promo_title}</p>
        <p className="thebook-select-content">{item.promo_text}</p>
      </li>
    ));
    return (
      <div>
        <div className="thebook-header">
          <img src={this.state.img} alt='pen'/>
        </div>
        <ul className="thebook-select">{title}</ul>
        
      </div>
    );
  }
}
