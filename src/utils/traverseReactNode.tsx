import React from 'react';

import { isFragment } from 'react-is';

export const traverseReactNode = (children: React.ReactNode, fn: (child: React.ReactNode, index: number) => void) => {
  let i = 0;
  const handleValide = (target: React.ReactNode) => {
    React.Children.forEach(target, (child) => {
      // 如果没有<></>，那么就是有效元素
      if (!isFragment(child)) {
        fn(child, i);
        i++;
      } else {
        // 有，那么child这一层是无意义的，所以取他的下一层,继续执行直到有效元素
        handleValide(child.props.child);
      }
    });
  };

  handleValide(children);
};
