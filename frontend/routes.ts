import { Route } from '@vaadin/router';
import './views/todo-view';

export const routes: Route[] = [
  {
    path: '',
    component: 'todo-view',
  },
];
