import DemoBlock from '@/demos/demo-block';
import DemoWrap from '@/demos/demo-wrap';
import { Loading, Space } from 'czh';
import React from 'react';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <Space direction="horizontal">
          <div style={{ width: '10px' }}></div>
          <Loading />
        </Space>
      </DemoBlock>
      <DemoBlock title="更换颜色">
        <Space direction="horizontal">
          <div style={{ width: '10px' }}></div>
          <Loading color="#1890ff" />
        </Space>
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
