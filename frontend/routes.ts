import { Route } from '@vaadin/router';
import './views/hello/hello-view';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'hello-view',
    icon: 'la la-file',
    title: 'Hello',
  },
];
export const routes: ViewRoute[] = [...views];
