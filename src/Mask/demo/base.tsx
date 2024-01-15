import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Mask } from 'czh-react-mobile-ui';
import React from 'react';

const Base = () => {
  const [visible1, setVisible1] = React.useState<boolean>(false);
  const [visible2, setVisible2] = React.useState<boolean>(false);

  return (
    <DemoWrap>
      <DemoBlock title="基本用法">
        <button type="button" onClick={() => setVisible1(true)}>
          显示遮罩
        </button>
        <Mask visible={visible1} onMaskClick={() => setVisible1(false)} />
      </DemoBlock>

      <DemoBlock title="自定义颜色">
        <button type="button" onClick={() => setVisible2(true)}>
          自定义颜色遮罩
        </button>
        <Mask visible={visible2} style={{ '--background': 'rgba(256, 0, 0, .2)' }} onMaskClick={() => setVisible2(false)} />
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
