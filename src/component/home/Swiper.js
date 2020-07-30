import { Carousel } from "antd";
import React, { Component } from 'react'
import '../../assets/css/home/swiper.css'

export default class swiper extends Component {
    render() {
    let imgArr = [
      "http://img52.ddimg.cn/220170091310222_y.jpg",
      "http://img62.ddimg.cn/upload_img/00834/1/1242-366-1595143316.jpg",
      "http://img52.ddimg.cn/220170091310222_y.jpg",
      "http://img60.ddimg.cn/upload_img/00803/1/1242366jf1-1594964402.jpg"
    ];
    let swiperImg = imgArr.map((item,index) => (
      <div key={index}>
        <img src={item} className='swiperImg' alt='swiper'/>
      </div>
    ));
        return (
          <div>
            <Carousel autoplay>
              {swiperImg}
            </Carousel>
          </div>
        );
    }
}
