// eslint-disable-next-line no-use-before-define,max-classes-per-file
import React from 'react';
import {
  createBrowserRouter, RouteObject, RouterProvider,
} from 'react-router-dom';
import { ReactWebComponent } from './base';

// eslint-disable-next-line import/prefer-default-export
type RouteParams = {
    path: string,
    component: ReactWebComponent,
    children: RouteParams[],
}

interface RouterInternal {
    routes: RouteParams[];
}

function RouterComp(props: {component: RouterInternal}) {
  const { component } = props;
  const createRoute = (r:RouteParams):RouteObject => ({
    path: r.path,
    element: <r.component.component component={r.component} />,
    children: r.children.map((r2) => createRoute(r2)),
  } as RouteObject);
  const router = createBrowserRouter(
    component.routes.map((r) => createRoute(r)),
  );
  return (<RouterProvider router={router} />);
}

export class RoutesBuilder {
    private routes: RouteParams[];

    constructor(routes: RouteParams[]) {
      this.routes = routes;
    }

    // eslint-disable-next-line no-unused-vars
    route(path:string, component:ReactWebComponent, configure?: (rb:RoutesBuilder) => void) {
      const item = {
        path,
        component,
        children: [],
      } as RouteParams;
      if (configure) {
        const rb2 = new RoutesBuilder(item.children);
        configure(rb2);
      }
      this.routes.push(item);
    }
}

export class Router implements ReactWebComponent, RouterInternal {
    routes: RouteParams[] = []

    constructor() {
      const rb = new RoutesBuilder(this.routes);
      this.configure(rb);
    }

    // eslint-disable-next-line no-unused-vars
    configure(rb:RoutesBuilder) {
      // noops
    }

    component = RouterComp;
}
