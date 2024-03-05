---
title: Demo
group:
  title: 基础组件
  order: 99
---

## 介绍

Demo 组件 Demo
​

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx"></code>

​

## APi

<!-- 会生成api表格 -->

| 属性        | 类型                | 默认值 | 必填  | 说明                                        |
| :---------- | :------------------ | :----- | :---- | :------------------------------------------ |
| position    | string              | -      | false | 交叉轴，可选值`left` `right` `top` `bottom` |
| visible     | boolean             | -      | true  | 是否显示弹出层                              |
| mask        | boolean             | -      | false | 是否显示遮罩层                              |
| style       | React.CSSProperties | -      | false | 内联样式                                    |
| className   | string              | -      | false | 类名                                        |
| onMaskClick | -                   | -      | false | 遮罩层点击事件                              |
| afterShow   | -                   | -      | false | 弹出层显示之后回调                          |
| afterClose  | -                   | -      | false | 弹出层关闭之后回调                          |
