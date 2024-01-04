---
title: Toast
group:
  title: 反馈组件
  order: 2
---

## 介绍

Toast 组件 Toast
​

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx"></code>

​

## APi

<!-- 会生成api表格 -->

| 属性       | 类型                          | 默认值 | 必填  | 说明                 |
| :--------- | :---------------------------- | :----- | :---- | :------------------- |
| content    | React.ReactNode               | -      | false | Toast 文本内容       |
| duration   | number                        | 3000   | false | Toast 持续时间       |
| icon       | string &#124; React.ReactNode | -      | false | Toast 图标 `loading` |
| afterClose | -                             | -      | false | Toast 关闭后的回调   |
| unmount    | -                             | -      | false | 卸载当前 Toast 回调  |
