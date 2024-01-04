---
title: NavBar
group:
  title: 导航组件
  order: 2
---

## 介绍

导航栏组件 NavBar
​

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx"></code>

​

## APi

<!-- 会生成api表格 -->

| 属性      | 类型                | 默认值 | 必填  | 说明                                                   |
| :-------- | :------------------ | :----- | :---- | :----------------------------------------------------- |
| leftArrow | React.ReactNode;    | true   | false | 是否显示返回区域的箭头,也可以自定义箭头                |
| leftText  | string              | -      | false | 返回区域文字                                           |
| right     | React.ReactNode;    | -      | false | 右侧内容                                               |
| style     | React.CSSProperties | -      | false | 内联样式，可选样式`--nav-bar-height` `--border-bottom` |
| onBack    | -                   | -      | false | 左侧点击事件                                           |
