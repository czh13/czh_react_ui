---
title: Image
group:
  title: 展示组件
  order: 1
---

## 介绍

间距组件 Space
​

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx"></code>

​

## APi

<!-- 会生成api表格 -->

| 属性     | 类型                 | 默认值 | 必填  | 说明                                               |
| :------- | :------------------- | :----- | :---- | :------------------------------------------------- |
| src      | string               | -      | true  | 图片地址                                           |
| alt      | string               | ''     | false | 图片描述                                           |
| width    | string &#124; number | 100%   | false | 图片宽度                                           |
| height   | string &#124; number | 100%   | false | 图片高度                                           |
| lazy     | boolean              | false  | false | 是否懒加载                                         |
| fit      | string               | fill   | false | 图片填充模式 `fill` `contain` `cover` `scale-down` |
| loading  | string               | -      | false | 加载占位图地址                                     |
| style    | CSSProperties        | -      | false | 内联样式                                           |
| clasName | string               | -      | false | 样式类名                                           |
| onClick  | -                    | -      | false | 图片点击事件                                       |
| onLoad   | -                    | -      | false | 图片加载完成时回调                                 |
| onError  | -                    | -      | false | 图片加载失败时回调                                 |
