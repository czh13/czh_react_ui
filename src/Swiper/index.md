---
title: Swiper
group:
  title: 展示组件
  order: 3
---

## 介绍

轮播图组件 Swiper
​

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx"></code>

​

## APi

<!-- 会生成api表格 -->

| 属性               | 类型                | 默认值 | 必填  | 说明                                                               |
| :----------------- | :------------------ | :----- | :---- | :----------------------------------------------------------------- |
| loop               | boolean             | false  | false | 是否循环播放                                                       |
| autoplay           | boolean             | false  | false | 是否自动播放                                                       |
| autoplayDuration   | number              | 3000   | false | 自动播放的时间间隔                                                 |
| defultIndex        | number              | 0      | false | 默认展示轮播图索引                                                 |
| showIndicator      | boolean             | true   | false | 是否展示指示点                                                     |
| indicatorClassName | string              | -      | false | 指示点样式类名                                                     |
| style              | React.CSSProperties | -      | false | 内联样式，可选样式`height` `width` `border-radius` `track-padding` |
