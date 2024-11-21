"use client"
import React from 'react';
import { Divider, List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons'; 
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';

interface IData {
  learningData: string[];
}


const DataList = ({ learningData }: IData) => {
  const language = useSelector((state: RootState) => state.language.language);
const t = languages[language] || languages.en; 
  return(
    <>
    <Divider orientation="left"></Divider>
    <List
      size="large"
      header={<h2 style={{ fontSize: '30px' }}>{t.learningNext}</h2>}
      bordered
      dataSource={learningData}
      renderItem={(item) => (
        <List.Item>
          <CheckCircleOutlined style={{ marginRight: '8px', color: '#673ab7' }} /> 
          {item}
        </List.Item>
      )}
    />
  </>

  )
}

export default DataList;
