import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { NavBar, Toast } from 'czh';
import React from 'react';
import { FiAlignLeft, FiSearch } from 'react-icons/fi';

const Base = () => {
  const onBack = () => {
    Toast.show({ content: 'back' });
  };

  return (
    <DemoWrap>
      <DemoBlock title="基本用法" style={{ padding: 0 }}>
        <NavBar>标题</NavBar>
      </DemoBlock>
      <DemoBlock title="自定义返回按钮" style={{ padding: 0 }}>
        <NavBar onBack={onBack} leftText="返回" leftArrow={false}>
          标题
        </NavBar>
      </DemoBlock>
      <DemoBlock title="自定义左侧" style={{ padding: 0 }}>
        <NavBar leftArrow={<FiAlignLeft />} leftText="菜单" />
      </DemoBlock>
      <DemoBlock title="右侧按钮" style={{ padding: 0 }}>
        <NavBar onBack={onBack} right={<FiSearch />}>
          标题
        </NavBar>
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
