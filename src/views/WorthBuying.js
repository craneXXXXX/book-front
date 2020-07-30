import React, { Component } from "react";
import HeaderNav from "../component/common/HeaderNav";
import { MessageOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "../assets/css/worthbuying.css";
import worthbuyingAxios from "../model/worthbuying";
import { Input, List, Spin, message } from "antd";
import InfiniteScroll from "react-infinite-scroller";
const { Search } = Input;

export default class WorthBuying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      hasMore: true,
      shownum: 4,
      pageindex: 1,
      count: 3,
    };
  }
  componentDidMount() {
    worthbuyingAxios.worthbuyList(0, this.state.shownum).then((res) => {
      console.log(res.data);
      this.setState({
        data: res.data.list,
        count: res.data.count,
      });
    });
  }
  handleInfiniteOnLoad = () => {
    var pageIndex = this.state.pageindex + 1;
    var skipnum = (pageIndex - 1) * this.state.shownum;
    if (this.state.data.length < this.state.count) {
      worthbuyingAxios
        .worthbuyList(skipnum, this.state.shownum)
        .then((result) => {
          console.log(result.data.list);
          this.setState({
            data: [...this.state.data, ...result.data.list],
            pageindex: this.state.pageindex + 1,
          });
        });
    } else {
      message.warning("没有更多数据了~");
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
  };
  dataFilter = (key) => {
    let data = this.state.data.filter((item) => item.goodsname.includes(key));
    this.setState({
      data: data,
    });
  };
  render() {
    return (
      <div>
        <HeaderNav navTitle="值得买"></HeaderNav>
        <div className="worthbuying-search">
          <Search
            placeholder="请输入商品名称"
            onSearch={(key) => {
              this.dataFilter(key);
            }}
            style={{ width: 375 }}
          />
        </div>
        <div className="demo-infinite-container">
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={false}
          >
            <List
              dataSource={this.state.data}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  {
                    <div
                      className="worthbuying-container"
                      onClick={() => {
                        this.props.history.push(
                          `/worthbuying/detail?id=${item.id}&goodsname=${item.goodsname}&goodsprice=${item.goodsprice}&goodsnum=${item.goodsnum}&goodsimg=${item.goodsimg}&goodsdiscount=${item.goodsdiscount}`
                        );
                      }}
                    >
                      <div className="worthbuying-container-imgbox">
                        <img src={item.goodsimg} alt="worthbuying" />
                      </div>
                      <div className="worthbuying-container-content">
                        <p className="worthbuying-container-title">
                          {item.goodsname}
                        </p>
                        <p className="worthbuying-container-tag">
                          <span>满额减</span>
                        </p>
                        <p className="worthbuying-container-price">
                          <span className="worthbuying-container-price-now">
                            ¥ {item.goodsprice}
                          </span>
                          <span className="worthbuying-container-price-discount">
                            <del>¥{item.goodsdiscount}</del>
                          </span>
                        </p>
                        <p className="worthbuying-container-comment">
                          <span>
                            <MessageOutlined />
                            {item.comment}
                          </span>
                          <span className="worthbuying-container-comment-shoppingcar">
                            <ShoppingCartOutlined
                              onClick={(e) => {
                                e.stopPropagation();
                                if (window.localStorage.getItem("loginId")) {
                                  let userid = window.localStorage.getItem(
                                    "loginId"
                                  );
                                  let times = new Date().format(
                                    "yyyy-MM-dd HH:mm:ss"
                                  );
                                  worthbuyingAxios
                                    .addShoppingcar(
                                      item.goodsname,
                                      item.goodsprice,
                                      item.goodsimg,
                                      item.id,
                                      1,
                                      item.goodsnum,
                                      times,
                                      userid,
                                      "true"
                                    )
                                    .then((res) => {
                                      if (res.data.code === 1) {
                                        message.success(res.data.msg);
                                      } else {
                                        message.warning(res.data.msg);
                                      }
                                      console.log(res.data);
                                    });
                                } else {
                                  let backUrl = window.location.hash.substr(1);
                                  window.localStorage.setItem(
                                    "backUrl",
                                    backUrl
                                  );
                                  this.props.history.push("/mine/login");
                                }
                              }}
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  }
                </List.Item>
              )}
            >
              {this.state.loading && this.state.hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
            </List>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
