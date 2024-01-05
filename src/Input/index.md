---
title: Input
group:
  title: 表单组件
  order: 0
---

## 介绍

输入框组件 Input
​

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx"></code>

​

## APi

<!-- 会生成api表格 -->

| 属性           | 类型                | 默认值    | 必填  | 说明                                          |
| :------------- | :------------------ | :-------- | :---- | :-------------------------------------------- |
| id             | string              | czh-input | false | id 选择器                                     |
| value          | string              | -         | false | value 值                                      |
| clearable      | boolean             | -         | false | 是否显示清除按钮                              |
| className      | string              | -         | false | 类选择器                                      |
| style          | React.CSSProperties | -         | false | 样式，可选样式`--color` `--placeholder-color` |
| input 原生属性 | -                   | -         | false | `input 原生属性都可写入`                      |
| onEnterPress   |                     | -         | false | 手机键盘确认 Enter 事件回调                   |
| onValueChange  |                     | -         | false | value 值改变事件回调                          |
| onClear        |                     | -         | false | 点击请求按钮事件回调                          |
