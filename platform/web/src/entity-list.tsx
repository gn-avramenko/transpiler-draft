// eslint-disable-next-line no-use-before-define,max-classes-per-file
import React from 'react';
import { ProColumns, ProTable } from '@ant-design/pro-table';
import { ProFieldValueType } from '@ant-design/pro-utils/es/typing';
import { RightOutlined } from '@ant-design/icons';
import { getMainFrame, ReactWebComponent } from './base';

// eslint-disable-next-line import/prefer-default-export
type ColumnDataType = 'STRING' | 'NUMBER'
type EntityListColumnParams = {
    id: string,
    title: string,
    type: ColumnDataType,
    sortable: boolean,
}

interface EntityListInternal {
    columns: EntityListColumnParams[];
    searchMethodUrl: string,
}

function EntityListComp(props: {component: EntityListInternal}) {
  const { component } = props;
  const getValueType = (col:EntityListColumnParams):ProFieldValueType => {
    switch (col.type) {
      case 'STRING': return 'text';
      case 'NUMBER': return 'digit';
      default: throw new Error(`unsupported type ${col.type}`);
    }
  };
  const columns: ProColumns<any>[] = component.columns.map((col) => ({
    disable: true,
    title: col.title,
    dataIndex: col.id,
    filters: false,
    onFilter: false,
    sorter: col.sortable,
    valueType: getValueType(col),
  }) as ProColumns<any>);
  columns.push({
    disable: true,
    onFilter: false,
    sorter: false,
    dataIndex: 'id',
    valueType: 'image',
    width: 30,
    render: (dom, entity) => (
      <RightOutlined
        rev=""
        onClick={() => {
          getMainFrame().openEntityEditor(entity.entityType, entity.id, entity.caption);
        }}
      />
    ),
  });

  return (
    <ProTable<any>
      columns={columns}
      cardBordered
      request={async (params, sort) => {
        const response = await fetch(component.searchMethodUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({
            params,
            sort,
          }),
        });
        const result = await response.json();
        return result;
      }}
      rowKey="id"
      search={false}
      options={{
        search: true,
      }}
      pagination={{
        pageSize: 50,
      }}
      dateFormatter="string"
    />
  );
}

export class EntityListBuilder {
    columns: EntityListColumnParams[] = [];

    searchMethodUrl: string = '';

    // eslint-disable-next-line no-unused-vars
    column(id:string, title:string, type:ColumnDataType, sortable:boolean) {
      this.columns.push({
        id,
        title,
        type,
        sortable,
      });
    }

    setSearchMethodUrl(url:string) {
      this.searchMethodUrl = url;
    }
}

export class EntityList implements ReactWebComponent, EntityListInternal {
    columns: EntityListColumnParams[]

    searchMethodUrl: string

    constructor() {
      const rb = new EntityListBuilder();
      this.configure(rb);
      this.columns = rb.columns;
      this.searchMethodUrl = rb.searchMethodUrl;
    }

    // eslint-disable-next-line no-unused-vars
    configure(rb:EntityListBuilder) {
      // noops
    }

    component = EntityListComp;
}
