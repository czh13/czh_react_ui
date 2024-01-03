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

| 属性      | 类型                              | 默认值     | 必填  | 说明                                                                     |
| :-------- | :-------------------------------- | :--------- | :---- | :----------------------------------------------------------------------- |
| gap       | number &#124; string &#124; Array | 8px        | false | 间距大小，设为数组时则分别设置垂直方向和水平方向的间距大小               |
| direction | string                            | horizontal | false | 布局方向，可选值`horizontal` `vertical`                                  |
| block     | boolean                           | true       | false | 是否渲染为块级元素                                                       |
| align     | string                            | -          | false | 交叉轴，可选值`start` `end` `center` `baseline`                          |
| justify   | string                            | -          | false | 主轴，可选值`start` `end` `center` `between` `around` `evenly` `stretch` |
| wrap      | boolean                           | -          | false | 是否自动换行，仅在 horizontal 时有效                                     |
| onClick   | -                                 | -          | false | 点击事件                                                                 |
