"use client"
import React from 'react';
import { Avatar, List } from 'antd';

interface IData
{
  data:string[] | undefined;
}

const FeedBack= ({data}:IData) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="">{item}</a>}
        />
      </List.Item>
    )}
  />
);

export default FeedBack;