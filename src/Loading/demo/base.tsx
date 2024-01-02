import DemoBlock from '@/demos/demo-block';
import DemoWrap from '@/demos/demo-wrap';
import { Loading } from 'czh';
import React from 'react';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <Loading></Loading>
      </DemoBlock>
      <DemoBlock title="基本用法">
        <Loading color="#1890ff"></Loading>
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
