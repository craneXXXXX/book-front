import React, { Component } from "react";
import '../../assets/css/home/classifyList.css'

export default class classifyList extends Component {
  render() {
    let listArr = [
      "http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png",
      "http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png",
      "http://img62.ddimg.cn/upload_img/00702/B/SY-iCON-3-5.10-1557488951.png",
      "http://img63.ddimg.cn/upload_img/00702/B/icon-jrcx-1559563476.png",
      "http://img62.ddimg.cn/upload_img/00705/B/icon-5.28-1559032809.png",
      "http://img50.ddimg.cn/116550067538580_y.jpg",
      "http://img63.ddimg.cn/upload_img/00528/000/7chaoshi-1545121233.png",
      "http://img61.ddimg.cn/upload_img/00528/000/00000-1564393723.png",
      "http://img62.ddimg.cn/upload_img/00528/000/9zhongxin-1545121233.png",
      "http://img63.ddimg.cn/upload_img/00528/0000/12311-1556245256.jpg",
    ];
    let list = listArr.map((item, index) => 
      <div key={index} className='item'>
        <img src={item} alt='classify' />
      </div>
    );
    return <div className='container'>{list}</div>;
  }
}
