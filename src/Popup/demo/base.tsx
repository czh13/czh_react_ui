/*
 * @Author: milton
 * @Date: 2024-01-15 15:03:04
 * @LastEditors: milton caizhihao@guidefuture.com
 * @LastEditTime: 2024-01-15 15:20:32
 * @FilePath: \react-cocashy-payf:\test\project\react\dumi_react_ui\src\Popup\demo\base.tsx
 * @Description:
 *
 */
import { Popup } from 'czh';
import React, { useState } from 'react';

const Base = () => {
  const [visible1, setVisible1] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  const [visible3, setVisible3] = useState<boolean>(false);
  const [visible4, setVisible4] = useState<boolean>(false);
  return (
    <div className="popup-demo">
      <button type="button" onClick={() => setVisible1(true)}>
        底部弹出
      </button>
      <button type="button" onClick={() => setVisible2(true)}>
        顶部弹出
      </button>
      <button type="button" onClick={() => setVisible3(true)}>
        左侧弹出
      </button>
      <button type="button" onClick={() => setVisible4(true)}>
        右侧弹出
      </button>

      <Popup position="bottom" visible={visible1} onMaskClick={() => setVisible1(false)} style={{ height: '30vh' }} />
      <Popup position="top" visible={visible2} onMaskClick={() => setVisible2(false)} style={{ height: '30vh' }} />
      <Popup position="left" visible={visible3} onMaskClick={() => setVisible3(false)} style={{ width: '30vh' }} />
      <Popup position="right" visible={visible4} onMaskClick={() => setVisible4(false)} style={{ width: '30vh' }} />
    </div>
  );
};

export default Base;
