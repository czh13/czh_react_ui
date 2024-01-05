---
title: InfiniteList
group:
  title: 展示组件
  order: 1
---

## 介绍

无限列表组件 InfiniteList
​

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx"></code>

​

## APi

<!-- 会生成api表格 -->

| 属性     | 类型            | 默认值 | 必填  | 说明                  |
| :------- | :-------------- | :----- | :---- | :-------------------- |
| hasMore  | boolean         | -      | true  | 是否加载更多          |
| loadMore | -               | -      | true  | `() => Promise<void>` |
| footer   | React.ReactNode | -      | false | 自定义底部样式        |
