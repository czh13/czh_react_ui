---
title: Grid
group:
  title: 布局组件
  order: 2
---

## 介绍

栅栏组件 Grid
​

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx"></code>

​

## APi

<!-- 会生成api表格 -->

| 属性    | 类型                 | 默认值 | 必填  | 说明                                                   |
| :------ | :------------------- | :----- | :---- | :----------------------------------------------------- |
| columns | number               | -      | true  | 列数                                                   |
| gap     | number &#124; string | -      | false | 间距，设为数组时则分别设置垂直方向和水平方向的间距大小 |
| span    | number               | -      | false | Item 属性 占几列                                       |
| onClick | -                    | -      | false | Item 属性 点击事件                                     |
