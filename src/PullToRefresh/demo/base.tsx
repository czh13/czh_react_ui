import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Space } from 'czh-react-mobile-ui';
import React from 'react';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <Space direction="horizontal">demo</Space>
      </DemoBlock>
      <DemoBlock title="demo">
        <Space direction="horizontal">demo</Space>
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
