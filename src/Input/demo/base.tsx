import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Input } from 'czh';
import React from 'react';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="基础用法" style={{ padding: 12 }}>
        <Input placeholder="请输入" type="search" />
      </DemoBlock>

      <DemoBlock title="显示清除" style={{ padding: 12 }}>
        <Input placeholder="请输入" type="search" clearable />
      </DemoBlock>

      <DemoBlock title="密码" style={{ padding: 12 }}>
        <Input placeholder="请输入密码" type="password" />
      </DemoBlock>

      <DemoBlock title="禁用" style={{ padding: 12 }}>
        <Input placeholder="禁用" disabled value="禁用" />
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
