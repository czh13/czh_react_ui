import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Loading, Space } from 'czh-react-mobile-ui';
import React from 'react';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <Space direction="horizontal" align="center">
          <Loading size={10} />
          <Loading />
          <Loading size={40} />
        </Space>
      </DemoBlock>
      <DemoBlock title="更换颜色">
        <Space direction="horizontal">
          <Loading color="#4507ac" />
        </Space>
      </DemoBlock>
      <DemoBlock title="好玩的">
        <Space direction="horizontal">
          <Loading color="#4507ac" type="special" />
        </Space>
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
