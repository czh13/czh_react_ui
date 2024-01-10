import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Grid } from 'czh-react-mobile-ui';
import React from 'react';
import './index.scss';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className="grid-demo-item-block">A</div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">B</div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">C</div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">D</div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">E</div>
          </Grid.Item>
        </Grid>
      </DemoBlock>
      <DemoBlock title="格子跨度">
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className="grid-demo-item-block">A</div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className="grid-demo-item-block">B</div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className="grid-demo-item-block">C</div>
          </Grid.Item>
          <Grid.Item>
            <div className="grid-demo-item-block">D</div>
          </Grid.Item>
          <Grid.Item span={3}>
            <div className="grid-demo-item-block">E</div>
          </Grid.Item>
        </Grid>
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
