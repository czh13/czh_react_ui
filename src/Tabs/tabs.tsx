import cx from 'classnames';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import './styles/index.scss';
import Tab from './tab';

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { useUpdateIsomorphicLayoutEffect } from '@/hooks/useUpdateIsomorphicLayoutEffect';
import { traverseReactNode } from '@/utils/traverseReactNode';

export interface TabsProps {
  activeKey: string;
  type?: 'line' | 'card';
  onChange?: (key: string) => void;
  tabActiveClassName?: string;
  tabListClassName?: string;
  tabContentClassName?: string;
  children?: React.ReactNode;
}

const classPrefix = 'czh-tabs';

const Tabs: React.FC<TabsProps> = (props) => {
  const [activeKey, setActiveKey] = useState(props.activeKey);
  const [activeLineStyle, setActiveLineStyle] = useState({
    width: 0,
    transform: `translate3d(0px, 0px, 0px)`,
    transitionDuration: '0',
  });

  const tabListRef = useRef<HTMLDivElement | null>(null);
  const keyToIndex: Record<string, number> = useMemo(() => ({}), []);
  const validChildren: React.ReactElement<React.ComponentProps<typeof Tab>>[] = [];

  traverseReactNode(props.children, (child) => {
    if (!React.isValidElement(child)) return;
    if (!child.key) return; //为了确认Tabs的子元素是Tab，因为Tab上面会写对应key，所以子元素不能是其他或<></>
    const length = validChildren.push(child as any); //返回值是数组长度
    keyToIndex[child.key] = length - 1; // {1:0,2:1,3:2}
  });

  const handleTabClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const key = (e.target as HTMLElement).dataset['key'] as string;
      setActiveKey(key);
      props?.onChange?.(key);
    },
    [props],
  );

  const calculateLineWidth = useCallback(
    (immediate = false) => {
      if (props.type !== 'line') return;
      const tabListEle = tabListRef.current;
      if (!tabListEle) return;
      const activeKeyIndex = keyToIndex[activeKey];
      const activeTabWrapper = tabListRef.current?.children.item(activeKeyIndex + 1); // +1的原因是因为第一个元素是line
      const activeTab = activeTabWrapper?.children.item(0) as HTMLDivElement; //line的长度取决于title的长度
      const activeLineWidth = activeTab.offsetWidth;
      const activeLineLeft = activeTab.offsetLeft;

      const width = activeLineWidth;
      const x = activeLineLeft;

      setActiveLineStyle({
        width,
        transform: `translate3d(${x}px, 0px, 0px)`,
        transitionDuration: immediate ? '0ms' : '300ms',
      });
    },
    [tabListRef, props.type, activeKey],
  );

  // 首屏加载的时候不需要动画
  useIsomorphicLayoutEffect(() => {
    calculateLineWidth(true);
  }, []);

  // 更新的时候才需要线性动画
  useUpdateIsomorphicLayoutEffect(() => {
    calculateLineWidth();
  }, [calculateLineWidth]);

  return (
    <div className={classPrefix}>
      <div
        className={cx(`${classPrefix}-tab-list`, props.tabListClassName, {
          [`${classPrefix}-tab-list-${props.type}`]: true,
        })}
        ref={tabListRef}
      >
        {props.type === 'line' && (
          <div
            className={`${classPrefix}-tab-line`}
            style={{
              ...activeLineStyle,
            }}
          />
        )}
        {validChildren.map((item) => {
          return (
            <div
              key={item.key}
              data-key={item.key}
              onClick={handleTabClick}
              className={cx(`${classPrefix}-tab`, props.tabActiveClassName, {
                [`${classPrefix}-tab-active`]: item.key === activeKey,
              })}
            >
              <div className={`${classPrefix}-tab-title`} data-key={item.key}>
                {item.props.title}
              </div>
            </div>
          );
        })}
      </div>
      {validChildren.map((child) => {
        return (
          // Tabs下的Tab元素要有内容
          child.props.children && (
            <div
              key={child.key}
              className={cx(`${classPrefix}-content`, props.tabContentClassName)}
              style={{ display: activeKey === child.key ? 'block' : 'none' }}
            >
              {child}
            </div>
          )
        );
      })}
    </div>
  );
};

Tabs.defaultProps = {
  type: 'line',
};

Tabs.displayName = 'Tabs';

export default Tabs;
