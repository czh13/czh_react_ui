import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { pxToNumber } from '@/utils/pxToNumber';
import React, { useCallback, useRef, useState } from 'react';
import './styles/index.scss';

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
    const styleName: string[] = Array.prototype.slice.apply(originStyles); //将一个键值对的对象转化为string的数组
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
    const maxHeight = lineHeight * props.rows!; //省略后想要的高度

    // 二分查找
    const check = (left: number, right: number) => {
      let l = left;
      let r = right;
      let text = '';

      while (l < r) {
        const m = Math.floor((l + r) / 2);
        if (l === m) {
          break;
        }

        const tempText = props.text.slice(l, m);
        container.innerText = `${text}${tempText}...${props.expand}`;
        const height = container.getBoundingClientRect().height; // 当前高度

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
      // setEllipsised(ellipsisedValue);
    }
    document.body.removeChild(container);
  }, [props.expand, props.rows, props.text]);

  useIsomorphicLayoutEffect(() => {
    calcEllipsised();
  }, []);

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
