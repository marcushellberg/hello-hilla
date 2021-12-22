import { Route } from '@vaadin/router';
import './views/todo-view';
import './views/person-view';

export const routes: Route[] = [
  {
    path: '',
    component: 'todo-view',
  },
  {
    path: 'people',
    component: 'person-view',
  },
];
