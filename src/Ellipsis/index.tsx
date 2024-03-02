import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import useResizeObserver from '@/hooks/useResizeObserver';
import { pxToNumber } from '@/utils/pxToNumber';
import React, { useCallback, useRef, useState } from 'react';
import './styles/index.scss';

// 根据一行文字的行高linehight，与当前渲染文字的行高getBoundingClientRect().height进行比较，通过二分查找的方式while循环，不断截取
// window.getComputedStyle(element)

export interface EllipsisProps {
  text: string;
  rows?: number;
  collapse?: React.ReactNode;
  expand?: React.ReactNode;
}

const classPrefix = 'czh-ellipsis';

const ellipsisTailing = '...';

const Ellipsis: React.FC<EllipsisProps> = (props) => {
  const [exceeded, setExceeded] = useState(false); //是否溢出
  const [expanded, setExpanded] = useState(false); //是否展开
  const [ellipsised, setEllipsised] = useState('');

  const ellipsisRef = useRef<HTMLDivElement>(null);

  const calcEllipsised = useCallback(() => {
    const element = ellipsisRef.current;

    if (!element) return;

    // 创建一个新的div，然后将原有div的样式重新添加到新的div上
    const container = document.createElement('div');
    const originStyles = window.getComputedStyle(element); //获取旧div的所有样式
    const styleName: string[] = Array.prototype.slice.apply(originStyles); //伪数组转数组
    // 将样式全部添加到新div
    styleName.forEach((name) => {
      container.style.setProperty(name, originStyles.getPropertyValue(name));
    });

    container.style.position = 'fixed';
    container.style.height = 'auto';
    container.style.visibility = 'hidden';

    container.innerText = props.text;

    document.body.appendChild(container);

    const lineHeight = pxToNumber(originStyles.lineHeight); //单行的高度

    const height = container.getBoundingClientRect().height; // 省略前的高度，offsetHeight好像也可以
    const maxHeight = lineHeight * props.rows!; //省略后想要的高度，总高度

    /**
     *  check 的函数，用于二分查找确定文本内容的截取位置，以使得截取后的文本高度不超过指定的最大高度 maxHeight。
        函数的输入参数是 left 和 right，表示文本的起始索引和结束索引。在函数内部，使用 l 和 r 分别表示当前查找的左右边界，text 用于保存最终确定的截取文本内容。
        在 while 循环中，通过取左右边界的中间值 m，将文本分成两部分。然后，将分割出来的文本拼接成完整的文本内容，并将其赋值给新创建的 div 元素进行计算高度。
        如果计算出来的高度超过了指定的最大高度 maxHeight，则将右边界 r 缩小，否则将左边界 l 扩大。直到左右边界相遇，表示找到了截取文本内容的位置。
     */

    // 二分查找
    const check = (left: number, right: number) => {
      let l = left;
      let r = right;
      let text = '';

      while (l < r) {
        const m = Math.floor((l + r) / 2); // index中间值
        if (l === m) {
          break;
        }

        // React makes it painless to create interactive UIs. Design simple views for each state in your application, and
        // React will efficiently update and render just the right components when your data changes
        const tempText = props.text.slice(l, m); //不断截取，tempText会越来越少

        container.innerText = `${text}${tempText}...${props.expand}`;
        const height = container.getBoundingClientRect().height; // 当前高度

        // 如果当前高度大于设置的高度
        if (height > maxHeight) {
          r = m;
        } else {
          text += tempText;
          l = m;
        }
      }

      return text;
    };

    // 如果省略后想要的高度大于省略前，那么就不需要溢出效果
    if (maxHeight >= height) {
      setExceeded(false);
    } else {
      setExceeded(true);
      const end = props.text.length;
      const ellipsisedValue = check(0, end);
      setEllipsised(ellipsisedValue);
    }
    document.body.removeChild(container);
  }, [props.expand, props.rows, props.text]);

  useIsomorphicLayoutEffect(() => {
    calcEllipsised();
  }, [calcEllipsised]);

  useResizeObserver(calcEllipsised, ellipsisRef);

  const renderContent = () => {
    // 没有溢出情况
    if (!exceeded) {
      return props.text;
    }

    // 展开情况
    if (expanded) {
      return (
        <>
          {props.text}
          {props.collapse && <a>{props.collapse}</a>}
        </>
      );
    }

    // 有溢出未展开的情况
    return (
      <div>
        {ellipsised}
        {ellipsisTailing}
        {props.expand && <a>{props.expand}</a>}
      </div>
    );
  };

  // 点击展开或收回
  const onContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!props.expand && !props.collapse) return;

    if (props.expand && !props.collapse) {
      setExpanded(true);
      return;
    }

    setExpanded(!expanded);
  };

  return (
    <div className={classPrefix} ref={ellipsisRef} onClick={onContent}>
      {renderContent()}
    </div>
  );
};

Ellipsis.defaultProps = {
  text: '',
  rows: 1,
  expand: '',
  collapse: '',
};

export default Ellipsis;
