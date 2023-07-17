// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent } from 'react';
import { ChromeFilled, SmileFilled } from '@ant-design/icons';
import { MainFrame } from './main-frame';

export interface ReactWebComponent {
    // eslint-disable-next-line no-unused-vars
    component: FunctionComponent<{component: any }>
}

export type ICON = 'SmileFilled' | 'ChromeFilled';

export const getIcon = (icon: ICON) => {
  switch (icon) {
    case 'SmileFilled':
      return <SmileFilled rev="" />;
    case 'ChromeFilled':
      return <ChromeFilled rev="" />;
    default:
      throw new Error('unknown icon');
  }
};

let mainFrame:MainFrame;

export const getMainFrame = () => mainFrame;
// eslint-disable-next-line no-return-assign
export const setMainFrame = (mf:MainFrame) => mainFrame = mf;

export interface WebEditor<VM> extends ReactWebComponent{
  // eslint-disable-next-line no-unused-vars
  setData(data:VM|null):void
  getData():VM|null
}
