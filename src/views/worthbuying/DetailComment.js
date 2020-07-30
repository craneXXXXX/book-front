import React, { Component } from 'react'
import { Comment, Tooltip, List } from "antd";
import moment from "moment";

export default class DetailComment extends Component {
  render() {
    const data = [
      {
        actions: [<span key="comment-list-reply-to-0">回复</span>],
        author: "XXXX",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: <p>我们生活在阴沟里，但有人依然仰望星空。</p>,
        datetime: (
          <Tooltip
            title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
          >
            <span>{moment().subtract(1, "days").fromNow()}</span>
          </Tooltip>
        ),
      },
      {
        actions: [<span key="comment-list-reply-to-0">回复</span>],
        author: "XXXX",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: (
          <p>
            我这个人什么都不是，没脑子，没钱，也没有未来，可是我喜欢一个人，我就要给她最好的结局。
          </p>
        ),
        datetime: (
          <Tooltip
            title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
          >
            <span>{moment().subtract(2, "days").fromNow()}</span>
          </Tooltip>
        ),
      },
    ];
    return (
      <div>
        <List
          className="comment-list"
          header={`${data.length} 条评论`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <li>
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        />
        ,
      </div>
    );
  }
}
