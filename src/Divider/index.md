---
title: Divider
group:
  title: 布局组件
  order: 3
---

## 介绍

分割线组件 Divider
​

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx"></code>

​

## APi

<!-- 会生成api表格 -->

| 属性            | 类型                | 默认值     | 必填  | 说明                                                                 |
| :-------------- | :------------------ | :--------- | :---- | :------------------------------------------------------------------- |
| contentPosition | string              | center     | false | 文字显示位置，可选值`left` `right` `center`                          |
| dashed          | boolean             | -          | true  | 是否使用虚线，默认实线                                               |
| direction       | string              | horizontal | false | 显示方向，可选值`vertical` `horizontal`                              |
| borderColor     | string              | #c1c1c1    | false | 线条颜色                                                             |
| hairline        | boolean             | true       | false | 是否使用 0.5px 线                                                    |
| children        | React.ReactNode     | -          | false | 显示内容                                                             |
| style           | React.CSSProperties | -          | false | 内联样式，可选样式`--border-width` `--border-padding` `--text-color` |
