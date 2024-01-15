import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Tabs } from 'czh';
import React from 'react';
import './index.scss';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <Tabs activeKey="1">
          <Tabs.Tab title="标签1" key="1">
            内容1
          </Tabs.Tab>
          <Tabs.Tab title="标签2" key="2">
            内容2
          </Tabs.Tab>
          <Tabs.Tab title="标签3" key="3">
            内容3
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="card类型">
        <Tabs activeKey="1" type="card">
          <Tabs.Tab title="标签1" key="1">
            内容1
          </Tabs.Tab>
          <Tabs.Tab title="标签2" key="2">
            内容2
          </Tabs.Tab>
          <Tabs.Tab title="标签3" key="3">
            内容3
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="自定义样式风格">
        <Tabs activeKey="1" type="card" tabListClassName="tabs-demo-list" tabActiveClassName="tabs-demo-active">
          <Tabs.Tab title="标签1" key="1">
            内容1
          </Tabs.Tab>
          <Tabs.Tab title="标签2" key="2">
            内容2
          </Tabs.Tab>
          <Tabs.Tab title="标签3" key="3">
            内容3
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
