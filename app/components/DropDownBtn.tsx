"use client";
import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    label: 'Submit and continue',
    key: '1',
  },
];

const SplitButton = (props: { title: string }) => {
  return (
    <Space direction="vertical">
      <Dropdown.Button
        type='text'
        menu={{ items }}
        style={{border:'1px solid black', color:'black' , padding:'10px'}}
      >
        {props.title}
      </Dropdown.Button>
    </Space>
  );
};

export default SplitButton;
