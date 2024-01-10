import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { InfiniteList, Space } from 'czh-react-mobile-ui';
import React from 'react';

const mockData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];

// 模拟请求
function sleep(ms: number): any {
  return new Promise((resolve) =>
    // eslint-disable-next-line no-promise-executor-return
    window.setTimeout(resolve, ms),
  );
}

const Base = () => {
  const [data1, setData1] = React.useState<string[]>(mockData);
  const [data2, setData2] = React.useState<string[]>(mockData);
  // 是否还有数据
  const [hasMore1, setHasMore1] = React.useState<boolean>(true);
  const [hasMore2, setHasMore2] = React.useState<boolean>(true);

  const loadMore1 = async () => {
    await sleep(3000);
    setData1((val) => [...val, ...mockData]);
    if (data1.length >= 68) {
      setHasMore1(false);
    }
  };

  const loadMore2 = async () => {
    await sleep(3000);
    setData2((val) => [...val, ...mockData]);
    if (data2.length >= 68) {
      setHasMore2(false);
    }
  };

  return (
    <DemoWrap>
      <Space direction="vertical">
        <DemoBlock title="基础用法" style={{ padding: '10px' }}>
          <div style={{ height: 300, overflow: 'hidden', overflowY: 'scroll', position: 'relative' }}>
            <InfiniteList hasMore={hasMore1} loadMore={loadMore1}>
              <div>
                {data1.map((item, index) => (
                  <div key={index} style={{ padding: '10px 5px', fontSize: '14px', borderBottom: '1px solid #f0f0f0' }}>
                    {item}
                  </div>
                ))}
              </div>
            </InfiniteList>
          </div>
        </DemoBlock>

        <DemoBlock title="自定义底部加载" style={{ padding: '10px' }}>
          <div style={{ height: 300, overflow: 'hidden', overflowY: 'scroll', position: 'relative' }}>
            <InfiniteList hasMore={hasMore2} loadMore={loadMore2} footer={hasMore2 ? <span>加载中</span> : <span>--- 没有更多 ---</span>}>
              <div>
                {data2.map((item, index) => (
                  <div key={index} style={{ padding: '10px 5px', fontSize: '14px', borderBottom: '1px solid #f0f0f0' }}>
                    {item}
                  </div>
                ))}
              </div>
            </InfiniteList>
          </div>
        </DemoBlock>
      </Space>
    </DemoWrap>
  );
};

export default Base;
