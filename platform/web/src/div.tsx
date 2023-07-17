// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactWebComponent } from './base';

// eslint-disable-next-line import/prefer-default-export

interface DivInternal {
    getText():string;
}

function DivComp(props: {component: DivInternal}) {
  const { component } = props;
  return (
    <>
      <Link to="/login">Navigate</Link>
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
