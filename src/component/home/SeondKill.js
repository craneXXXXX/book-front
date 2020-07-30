import React, { Component } from "react";
// import  ReactCountdownClock from "react-countdown-clock";
import "../../assets/css/home/secondKill.css";
import homeAxios from "../../model/home";
let cheerio = require("cheerio");

export default class seondKill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: "2020-8-1",
      day: 0,
      hour: 0,
      minutes: 0,
      seconds: 0,
      listArr: []
    };
  }
  componentDidMount() {
    this.countdown(this.state.dateValue);
    setInterval(() => {
      this.countdown(this.state.dateValue);
    }, 1000);
    homeAxios.secondkill().then((res) => {
      let $ = cheerio.load(res.data, { decodeEntities: false });

      let listArr = [];
      $(".seckilling-con ul li").each((index, item) => {
        let img = $(item).find(".lazy").attr("imgsrc");
        let name = $(item).find(".name").html();
        let num = $(item).find(".num").last().html();
        if (num != null) {
          num = num.substr(num.lastIndexOf(">") + 1);
        }
        let discount = $(item).find(".discount").last().html();
        if (discount != null) {
          discount = discount.substr(discount.lastIndexOf(">") + 1);
        }
        // if(num!=undefined&&img!=undefined&&discount!=undefined&&name!=undefined){
        listArr[index] = {};
        listArr[index].img = img;
        listArr[index].name = name;
        listArr[index].num = num;
        listArr[index].discount = discount;
        // }
      });
      listArr[4].img = "http://img3m7.ddimg.cn/50/6/25536407-1_h_13.jpg";
      listArr[5].img = "http://img3m4.ddimg.cn/74/8/1609920254-1_h_1.jpg";
      listArr[6].img = "http://img3m4.ddimg.cn/55/14/1242741214-1_h_3.jpg";
      listArr[7].img = "http://img3m0.ddimg.cn/5/29/1388720030-1_h_14.jpg";
      listArr[8].img = "http://img3m3.ddimg.cn/9/7/1606539933-1_h_2.jpg";
      listArr[9].img = "http://img3m8.ddimg.cn/83/19/28519508-1_h_6.jpg";
      listArr[10].img = "http://img3m4.ddimg.cn/71/26/27847484-1_h_8.jpg";
      listArr[10].name = "看见才是爱";
      listArr[10].num = "19.9";
      listArr[10].discount = "48";
      this.setState({
        listArr: listArr,
      });
    //   console.log(listArr);
    });
  }
  countdown = (dateValue) => {
    let date = new Date();
    let endDate = new Date(dateValue);
    let seconds = Math.floor((endDate - date) / 1000);
    let day = Math.floor(seconds / 3600 / 24);
    let hour = Math.floor((seconds / 3600) % 24);
    let minutes = Math.floor((seconds / 60) % 60);
    let s = seconds % 60;
    this.setState({
      day: day,
      hour: hour,
      minutes: minutes,
      seconds: s,
    });
  };
  render() {
    let imgList = this.state.listArr.map((item, index) => (
      <li key={index} className="img-list-box">
        <p className="img-list-img">
          <img src={item.img} alt="list" />
        </p>
        <p className="img-list-name">{item.name}</p>
        <p className="img-list-num">{item.num}</p>
        <p className="img-list-discount">
          <del>{item.discount}</del>
        </p>
      </li>
    ));
    return (
      <div className="secondkill-body">
        <div className="banner">
          <img
            src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg"
            alt="second-kill"
          />
        </div>
        <div className="clock-box">
          <div className="clock">
            <span>{this.state.day}</span>天 <span>{this.state.hour}</span>时
            <span>{this.state.minutes}</span>分<span>{this.state.seconds}</span>
            秒
          </div>
        </div>
        <ul className="img-list">{imgList}</ul>
        <div className="static-img">
          <img
            src="http://img51.ddimg.cn/222060123100431_y.jpg"
            alt="second-kill"
          />
        </div>
      </div>
    );
  }
}

/* <ReactCountdownClock
              className='clock'
                seconds={60}
                color="#000"
                alpha={0.9}
                size={300}
              /> */
