/*
 * @Author: milton
 * @Date: 2024-01-05 18:30:56
 * @LastEditors: milton caizhihao@guidefuture.com
 * @LastEditTime: 2024-01-15 15:24:34
 * @FilePath: \react-cocashy-payf:\test\project\react\dumi_react_ui\src\Countdown\demo\base.tsx
 * @Description:
 *
 */
import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Countdown } from 'czh';
import React from 'react';
import './index.scss';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <Countdown time={10 * 1000} endText="时间结束" />
      </DemoBlock>

      <DemoBlock title="自定义格式">
        <Countdown time={24 * 60 * 60 * 1000} format="dd天hh时mm分ss秒" />
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <Countdown time={60 * 60 * 1000 * 24} format="hh:mm:ss" numberClassName="demo-countdown-num" symbolClassName="demo-countdown-symbol" />
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
