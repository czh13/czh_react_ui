import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Image, Space } from 'czh';
import React from 'react';
import demoImg from './img.svg';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <Image src={demoImg} alt="" />
      </DemoBlock>

      <DemoBlock title="填充模式">
        <Space wrap>
          <Image src={demoImg} width="100" height="100" alt="" fit="contain" />
          <Image src={demoImg} width="100" height="100" alt="" fit="cover" />
          <Image src={demoImg} width="100" height="100" alt="" fit="fill" />
          <Image src={demoImg} width="100" height="100" alt="" fit="scale-down" />
        </Space>
      </DemoBlock>

      <DemoBlock title="圆角">
        <Space wrap>
          <Image src={demoImg} width="64" height="64" alt="" style={{ borderRadius: 4 }} />
          <Image src={demoImg} width="64" height="64" alt="" style={{ borderRadius: 8 }} />
          <Image src={demoImg} width="64" height="64" alt="" style={{ borderRadius: 32 }} />
        </Space>
      </DemoBlock>

      <DemoBlock title="懒加载">
        <Image src={demoImg} width="64" height="64" alt="" style={{ borderRadius: 4 }} lazy={true} />
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
