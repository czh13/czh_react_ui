import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Space, Swiper, SwiperRef } from 'czh-react-mobile-ui';
import React from 'react';
import './index.scss';

const colors = ['#db9022', '#EBffbd', '#1890ff', '#f36226'];

const Base = () => {
  const swiperRef = React.useRef<SwiperRef>(null);

  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <Swiper>
          {colors.map((color, index) => (
            <Swiper.Item key={index}>
              <div className="swiper-demo-content" style={{ background: color }}>
                {index + 1}
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </DemoBlock>

      <DemoBlock title="自动播放">
        <Swiper autoplay={true}>
          {colors.map((color, index) => (
            <Swiper.Item key={index}>
              <div className="swiper-demo-content" style={{ background: color }}>
                {index + 1}
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </DemoBlock>

      <DemoBlock title="循环">
        <Swiper loop={true} autoplay={true}>
          {colors.map((color, index) => (
            <Swiper.Item key={index}>
              <div className="swiper-demo-content" style={{ background: color }}>
                {index + 1}
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <Swiper loop={true} style={{ '--border-radius': '8px' }}>
          {colors.map((color, index) => (
            <Swiper.Item key={index}>
              <div className="swiper-demo-content" style={{ background: color }}>
                {index + 1}
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </DemoBlock>

      <DemoBlock title="手动控制">
        <Swiper style={{ marginBottom: '8px' }} ref={swiperRef}>
          {colors.map((color, index) => (
            <Swiper.Item key={index}>
              <div className="swiper-demo-content" style={{ background: color }}>
                {index + 1}
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
        <Space>
          <button
            type="button"
            onClick={() => {
              swiperRef.current?.swiperPrev();
            }}
          >
            上一张
          </button>
          <button
            type="button"
            onClick={() => {
              swiperRef.current?.swiperNext();
            }}
          >
            下一张
          </button>
        </Space>
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
