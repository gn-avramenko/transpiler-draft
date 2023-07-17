// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactWebComponent } from './base';

// eslint-disable-next-line import/prefer-default-export

interface DivInternal {
    getText():string;
}

function DivComp(props: {component: DivInternal}) {
  const { component } = props;
  const params = useParams();
  console.log(params);
  return (
    <>
      <Link to="/test?id=23">Navigate</Link>
      <div>{component.getText()}</div>
    </>
  );
}

// eslint-disable-next-line import/prefer-default-export
export class Div implements ReactWebComponent, DivInternal {
  getText(): string {
    return 'hello';
  }

  component = DivComp;
}
