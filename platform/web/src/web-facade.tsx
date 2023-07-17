import { notification } from 'antd';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ReactWebComponent } from './base';

// eslint-disable-next-line import/prefer-default-export
export const webFacade = {
  showInfo(message:string, title?: string) {
    notification.info({
      message: title ?? 'Info',
      type: 'info',
      description: message,
    });
  },

  renderWindow(component: ReactWebComponent) {
    const root = createRoot(document.getElementById('root') as Element);
    root.render(<component.component component={component} />);
  },
};
