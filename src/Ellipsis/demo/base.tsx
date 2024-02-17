import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Ellipsis } from 'czh-react-mobile-ui';
import React from 'react';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="一行省略" style={{ padding: 20 }}>
        <Ellipsis text="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes" />
      </DemoBlock>

      <DemoBlock title="多行省略" style={{ padding: 20 }}>
        <Ellipsis
          rows={3}
          text="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes"
        />
      </DemoBlock>

      <DemoBlock title="展开和收起" style={{ padding: 20 }}>
        <Ellipsis
          expand="展开"
          collapse="收起"
          text="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes"
        />
      </DemoBlock>

      <DemoBlock title="仅展开" style={{ padding: 20 }}>
        <Ellipsis
          expand="展开"
          text="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes"
        />
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
