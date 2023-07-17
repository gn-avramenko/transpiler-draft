// eslint-disable-next-line max-len
/* eslint-disable react/no-array-index-key,react/jsx-props-no-spreading,react/no-unstable-nested-components,jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/prop-types */
// eslint-disable-next-line no-use-before-define,max-classes-per-file
import {
  LogoutOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  getPageTitle,
  PageContainer, ProCard, ProConfigProvider, ProLayout, SettingDrawer,
} from '@ant-design/pro-components';
import { ConfigProvider, Dropdown } from 'antd';
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import enUS from 'antd/locale/en_US';
import {
  getIcon, ICON, ReactWebComponent, setMainFrame,
} from './base';
import Welcome from './welcome';
import { BaseEntityEditor } from './base-entity-editor';

interface MainFrameInternal{
  title:string
  // eslint-disable-next-line no-unused-vars
  menuSetter: (route: any) => void
  route: any;
  // eslint-disable-next-line no-unused-vars
  pathNameSetter: (pathName: string) => void
  // eslint-disable-next-line no-unused-vars
  captionSetter: (title: any) => void
  caption: string
  // eslint-disable-next-line no-unused-vars
  loadingSetter: (value: boolean) => void
  loading: boolean;
  editors: Map<string, ReactWebComponent>;
  entityEditors: Map<string, BaseEntityEditor<any>>;
}

function MainFrameComponent(properties: {component: MainFrameInternal}) {
  const { component } = properties;
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: false,
    title: 'Demo app',
  });

  const [route, setRoute] = useState(component.route);
  const [caption, setCaption] = useState(component.caption);
  component.captionSetter = setCaption;
  component.menuSetter = setRoute;

  const renderContent = (pathname: string) => {
    if (pathname.startsWith('/editor/')) {
      const paths = pathname.substring(8).split('/');
      const entityType = paths[0];
      const entityId = paths[1];
      const entityEditor = component.entityEditors.get(entityType)!!;
      entityEditor.setEntityId(entityId);
      return (<entityEditor.component component={entityEditor} />);
    }
    const comp = component.editors.get(pathname);
    return (comp && (<comp.component component={comp} />)) ?? (<Welcome />);
  };

  const [pathname, setPathname] = useState('/');
  component.pathNameSetter = setPathname;
  const [loading, setLoading] = useState(component.loading);
  component.loadingSetter = setLoading;
  if (typeof document === 'undefined') {
    return <div />;
  }
  return (
    <div
      id="test-pro-layout"
      style={{
        overflow: 'auto',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          locale={enUS}
          getTargetContainer={() => document.getElementById('test-pro-layout') || document.body}
        >
          <ProLayout
            prefixCls="my-prefix"
            loading={loading}
            bgLayoutImgList={[
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                left: 85,
                bottom: 100,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                bottom: -68,
                right: -45,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                bottom: 0,
                left: 0,
                width: '331px',
              },
            ]}
            route={route}
            location={{
              pathname,
            }}
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
              },
            }}
            siderMenuType="group"
            menu={{
              collapsedShowGroupTitle: true,
            }}
            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: 'Avatar',
              render: (props, dom) => (
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: 'logout',
                        icon: <LogoutOutlined rev="" />,
                        label: 'Logout',
                      },
                    ],
                  }}
                >
                  {dom}
                </Dropdown>
              ),
            }}
            actionsRender={() => []}
            headerTitleRender={(logo, title) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (typeof window === 'undefined') return defaultDom;
              if (document.body.clientWidth < 1400) {
                return defaultDom;
              }
              return defaultDom;
            }}
            menuFooterRender={(props) => {
              if (props?.collapsed) return undefined;
              return (
                <div
                  style={{
                    textAlign: 'center',
                    paddingBlockStart: 12,
                  }}
                >
                  <div>© 2023 Made with love</div>
                  <div>by Gridnine</div>
                </div>
              );
            }}
            pageTitleRender={(props):string => {
              if (props.pathname?.startsWith('/editor/')) {
                return caption;
              }
              return getPageTitle({
                pathname: props.pathname,
                menu: props.menu,
                breadcrumb: props.breadcrumb,
                pageName: props.pageName,
                formatMessage: props.formatMessage,
              });
            }}
            onMenuHeaderClick={(e) => console.log(e)}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  setPathname(item.path || '/welcome');
                }}
              >
                {dom}
              </div>
            )}
            title={component.title}
            {...settings}
          >
            <PageContainer
              token={{
                paddingInlinePageContainerContent: 10,
              }}
            >
              <ProCard
                style={{
                  height: 'calc(100vh - 230px)',
                }}
              >
                {renderContent(pathname)}
              </ProCard>
            </PageContainer>

            <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={(e: any) => {
                if (typeof window === 'undefined') return e;
                return document.getElementById('test-pro-layout');
              }}
              settings={settings}
              onSettingChange={(changeSetting) => {
                setSetting(changeSetting);
              }}
              disableUrlParams={false}
            />
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
}

export class MainFrameConfigurator {
   title:string = 'Ant design';

   editors:Map<string, ReactWebComponent> = new Map<string, ReactWebComponent>();

   entityEditors: Map<string, BaseEntityEditor<any>> = new Map<string, BaseEntityEditor<any>>();

   setTitle(title:string) {
     this.title = title;
   }

   addMapping(path:string, component:ReactWebComponent) {
     this.editors.set(path, component);
   }

   addEntityEditorMapping(entityId:string, component:BaseEntityEditor<any>) {
     this.entityEditors.set(entityId, component);
   }
}

export interface MenuItem {
  id: string,
  title: string,
  icon?: ICON,
  children?:MenuItem[]
}

// eslint-disable-next-line import/prefer-default-export
export class MainFrame implements ReactWebComponent, MainFrameInternal {
  title: string = 'Demo app';

  route:any = {};

  loading: boolean = false;

  // eslint-disable-next-line no-unused-vars
  pathNameSetter: (path:any) => void = () => {}

  // eslint-disable-next-line no-unused-vars
  captionSetter: (title: any) => void = () => {}

  caption = '';

  // eslint-disable-next-line no-unused-vars
  menuSetter: (route:any) => void = () => {};

  // eslint-disable-next-line no-unused-vars
  loadingSetter: (value:boolean) => void = () => {}

  editors: Map<string, ReactWebComponent>;

  entityEditors: Map<string, BaseEntityEditor<any>>;

  constructor() {
    const configurator = new MainFrameConfigurator();
    this.configure(configurator);
    this.title = configurator.title;
    this.editors = configurator.editors;
    this.entityEditors = configurator.entityEditors;
    setMainFrame(this);
  }

  // eslint-disable-next-line no-unused-vars
  configure(configurator:MainFrameConfigurator) {
    // noops
  }

  setLoading(value: boolean) {
    this.loading = value;
    this.loadingSetter(value);
  }

  setMenu(items:MenuItem[]) {
    const createMenuItem = (item:MenuItem):any => ({
      path: item.id,
      name: item.title,
      icon: item.icon && getIcon(item.icon),
      routes: item.children && item.children.map((it2) => createMenuItem(it2)),
    });
    this.menuSetter(
      {
        path: '/',
        routes: items.map((item) => createMenuItem(item)),
      },
    );
  }

  openEntityEditor(entityType: string, entityId: string, caption:string) {
    const editor = this.entityEditors.get(entityType);
    if (!editor) {
      throw new Error(`unsupported entity type${entityType}`);
    }
    this.caption = caption;
    this.pathNameSetter(`/editor/${entityType}/${entityId}`);
    this.captionSetter(caption);
  }

  component = MainFrameComponent;
}
