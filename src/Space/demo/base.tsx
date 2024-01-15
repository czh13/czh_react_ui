import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Space } from 'czh-react-mobile-ui';
import React from 'react';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="水平间距">
        <Space>
          <button type="button">按钮1</button>
          <button type="button">按钮2</button>
          <button type="button">按钮3</button>
        </Space>
      </DemoBlock>
      <DemoBlock title="垂直间距">
        <Space direction="vertical">
          <button type="button">按钮1</button>
          <button type="button">按钮2</button>
          <button type="button">按钮3</button>
        </Space>
      </DemoBlock>
      <DemoBlock title="间距大小">
        <Space gap={20}>
          <button type="button">按钮1</button>
          <button type="button">按钮2</button>
          <button type="button">按钮3</button>
        </Space>
      </DemoBlock>
      <DemoBlock title="换行">
        <Space wrap>
          <button type="button">按钮1</button>
          <button type="button">按钮2</button>
          <button type="button">按钮3</button>
          <button type="button">按钮1</button>
          <button type="button">按钮2</button>
          <button type="button">按钮3</button>
          <button type="button">按钮1</button>
        </Space>
      </DemoBlock>

      <DemoBlock title="主轴对齐">
        <Space justify="center" block>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
        </Space>
      </DemoBlock>

      <DemoBlock title="交叉轴对齐">
        <Space align="end">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
        </Space>
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
