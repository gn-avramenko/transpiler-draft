// eslint-disable-next-line max-classes-per-file,no-use-before-define
import React, {
  FunctionComponent, MutableRefObject, useRef,
} from 'react';
import { ProForm, ProFormInstance, ProFormText } from '@ant-design/pro-form';
import { ReactWebComponent, WebEditor } from './base';

interface SimpleFormFieldEditorInternal<VM> {
    value:VM|null
    // eslint-disable-next-line no-unused-vars
    title: string

    id: string

    // eslint-disable-next-line no-unused-vars
}

// eslint-disable-next-line max-len
abstract class SimpleFormFieldEditor<VM> implements WebEditor<VM>, ReactWebComponent, SimpleFormFieldEditorInternal<VM> {
    value:VM|null = null

    abstract title:string

    abstract id: string

    // eslint-disable-next-line no-unused-vars
    valueSetter: (value:VM|null) => void = () => {}

    setData(value:VM|null) {
      this.value = value;
      if (this.valueSetter) {
        this.valueSetter(this.value);
      }
    }

    getData():VM|null {
      return this.value;
    }

    abstract component:FunctionComponent<{component: any }>;
}
function SimpleFormTextFieldEditorComp(props: {component:SimpleFormFieldEditorInternal<any>}) {
  const { component } = props;
  return (<ProFormText width="md" name={component.id} label={component.title} initialValue={component.value ?? ''} />);
}
class SimpleFormTextField extends SimpleFormFieldEditor<string> {
    id: string;

    title: string;

    constructor(id:string, title:string) {
      super();
      this.id = id;
      this.title = title;
    }

    component = SimpleFormTextFieldEditorComp
}

interface SimpleFormInternal{
    ref: MutableRefObject<ProFormInstance<any> | undefined> | null
    editors: SimpleFormFieldEditor<any>[]
    values: any|null;
    // eslint-disable-next-line no-unused-vars
}

function SimpleFormComp(props: {component: SimpleFormInternal}) {
  const { component } = props;
  const formRef = useRef<
        ProFormInstance<any>
        >();
  component.ref = formRef;
  return (
    <ProForm<any> formRef={formRef}>
      {component.editors.map((ed) => (<ed.component key={`field-${ed.id}`} component={ed} />))}
    </ProForm>
  );
}

class SimpleForm<VM> implements WebEditor<VM>, SimpleFormInternal {
    component = SimpleFormComp

    values: any|null = null

    editors: SimpleFormFieldEditor<any>[] = [];

    // eslint-disable-next-line no-unused-vars
    getData(): VM | null {
      return this.ref?.current?.getFieldsValue();
    }

    setData(data: VM | null): void {
      this.values = data;
      const editor = this.ref?.current;
      editor?.setFieldsValue(data);
    }

    ref: MutableRefObject<ProFormInstance<any> | undefined> | null= null;
}

// eslint-disable-next-line import/prefer-default-export
export class SimpleFormBuilder {
    private result = new SimpleForm();

    addTextField(id:string, title: string) {
      this.result.editors.push(new SimpleFormTextField(id, title));
    }

    build() {
      return this.result;
    }
}
