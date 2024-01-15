import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Space, Toast } from 'czh-react-mobile-ui';
import React from 'react';

const Base = () => {
  const handleClick = () => {
    const { unmount } = Toast.show({
      icon: 'loading',
      content: 'loading',
      afterClose: () => {
        alert('loading一般是自己取消');
      },
    });
    setTimeout(() => unmount(), 5000);
  };

  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <button
          type="button"
          onClick={() =>
            Toast.show({
              content: 'Hello World',
              afterClose: () => {
                console.log('after');
              },
            })
          }
        >
          文字提示
        </button>
      </DemoBlock>

      <DemoBlock title="图标">
        <Space>
          <button type="button" color="primary" onClick={handleClick}>
            加载中
          </button>
        </Space>
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
