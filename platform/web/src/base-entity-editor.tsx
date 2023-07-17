// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { WebEditor } from './base';
import { UiBuilder } from './ui-builder';

interface BaseEntityInternal{
    editorComponent: WebEditor<any>;
    loadDataUrl: string
    entityId:string;
}
// eslint-disable-next-line no-unused-vars
function EntityEditorComp(props: {component: BaseEntityInternal}) {
  const { component } = props;
  useEffect(() => {
    const prom = fetch(`${component.loadDataUrl}?id=${component.entityId}`);
    prom.then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          component.editorComponent.setData(data);
        });
      }
    });
  }, []);
  return (<component.editorComponent.component component={component.editorComponent} />);
}

// eslint-disable-next-line import/prefer-default-export,max-len
export abstract class BaseEntityEditor<VM> implements BaseEntityInternal, WebEditor<VM> {
    entityId:string = '';

    loadDataUrl: string;

    editorComponent: WebEditor<VM>;

    constructor(loadDataUrl: string) {
      this.loadDataUrl = loadDataUrl;
      const builder = new UiBuilder();
      this.configure(builder);
      this.editorComponent = builder.build();
    }

    // eslint-disable-next-line no-unused-vars
    configure(builder:UiBuilder) {
      // noops
    }

    setEntityId(entityId:string) {
      this.entityId = entityId;
    }

    component = EntityEditorComp;

    getData(): VM | null {
      return this.editorComponent.getData();
    }

    setData(data: VM) {
      return this.editorComponent.setData(data);
    }
}
