// eslint-disable-next-line no-use-before-define,max-classes-per-file
import React, { useRef } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProConfigProvider, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { LoginForm } from '@ant-design/pro-form/lib';
import { ProFormInstance } from '@ant-design/pro-form';
import { ReactWebComponent } from './base';

interface LoginInternal {
    // eslint-disable-next-line no-unused-vars
    loginMethod: (login:string, password:string, rememberMe: boolean) => void
    title: string
    subTitle: string
}

function LoginComp(props: {component: LoginInternal}) {
  const { component } = props;
  const formRef = useRef<
        ProFormInstance<any>
        >();
  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: 'white' }}>
        <LoginForm
          formRef={formRef}
          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title={component.title}
          subTitle={component.subTitle}
          submitter={{
            onSubmit: () => {
              const values = formRef.current?.getFieldsValue();
              component.loginMethod(values.username, values.password, values.autoLogin);
            },
          }}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined rev="" className="prefixIcon" />,
            }}
            placeholder="login"
            rules={[
              {
                required: true,
                message: 'Required',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined rev="" className="prefixIcon" />,
            }}
            placeholder="Password"
            rules={[
              {
                required: true,
                message: 'Required',
              },
            ]}
          />
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              Remember me
            </ProFormCheckbox>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
}

export class LoginFormConfigurator {
    // eslint-disable-next-line no-unused-vars
    loginMethod: (login:string, password:string, remeberMe:boolean) => void = () => {}

    title: string = ''

    subTitle: string = ''

    // eslint-disable-next-line no-unused-vars
    setTitle(title:string) {
      this.title = title;
    }

    setSubTitle(subTitle:string) {
      this.subTitle = subTitle;
    }

    // eslint-disable-next-line no-unused-vars
    setLoginMethod(method:(login:string, password:string, remeberMe: boolean) => void) {
      this.loginMethod = method;
    }
}

export class Login implements ReactWebComponent, LoginInternal {
    // eslint-disable-next-line no-unused-vars
    loginMethod: (login:string, password:string, remeberMe: boolean) => void = () => {}

    title: string = ''

    subTitle: string = ''

    constructor() {
      const rb = new LoginFormConfigurator();
      this.configure(rb);
      this.loginMethod = rb.loginMethod;
      this.title = rb.title;
      this.subTitle = rb.subTitle;
    }

    // eslint-disable-next-line no-unused-vars
    configure(rb:LoginFormConfigurator) {
      // noops
    }

    component = LoginComp;
}
