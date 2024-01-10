import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { ErrorBlock } from 'czh-react-mobile-ui';
import React from 'react';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="基础用法">
        <ErrorBlock />
      </DemoBlock>

      <DemoBlock title="自定义title">
        <ErrorBlock title="网络错误" />
      </DemoBlock>

      <DemoBlock title="自定义description">
        <ErrorBlock title="网络错误" description="请刷新页面" />
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
