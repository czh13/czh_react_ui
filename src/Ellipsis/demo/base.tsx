import DemoBlock from '@/block/demo-block';
import DemoWrap from '@/block/demo-wrap';
import { Ellipsis } from 'czh-react-mobile-ui';
import React from 'react';

const Base = () => {
  return (
    <DemoWrap>
      <DemoBlock title="一行省略" style={{ padding: 20 }}>
        <Ellipsis text="Migrates a Create React App project to Next.js; creating a Pages Router and necessary config to match behavior. Client-side only rendering is leveraged initially to prevent breaking compatibility due to window usage during SSR and can be enabled seamlessly to allow the gradual adoption of Next.js specific features." />
      </DemoBlock>

      <DemoBlock title="多行省略" style={{ padding: 20 }}>
        <Ellipsis
          rows={3}
          text="Migrates a Create React App project to Next.js; creating a Pages Router and necessary config to match behavior. Client-side only rendering is leveraged initially to prevent breaking compatibility due to window usage during SSR and can be enabled seamlessly to allow the gradual adoption of Next.js specific features."
        />
      </DemoBlock>

      <DemoBlock title="展开和收起" style={{ padding: 20 }}>
        <Ellipsis
          expand="展开"
          collapse="收起"
          text="Migrates a Create React App project to Next.js; creating a Pages Router and necessary config to match behavior. Client-side only rendering is leveraged initially to prevent breaking compatibility due to window usage during SSR and can be enabled seamlessly to allow the gradual adoption of Next.js specific features."
        />
      </DemoBlock>

      <DemoBlock title="仅展开" style={{ padding: 20 }}>
        <Ellipsis
          expand="展开"
          text="Migrates a Create React App project to Next.js; creating a Pages Router and necessary config to match behavior. Client-side only rendering is leveraged initially to prevent breaking compatibility due to window usage during SSR and can be enabled seamlessly to allow the gradual adoption of Next.js specific features."
        />
      </DemoBlock>
    </DemoWrap>
  );
};

export default Base;
