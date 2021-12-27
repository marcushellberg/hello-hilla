import { Route } from '@vaadin/router';
import './views/person-view';

export const routes: Route[] = [
  {
    path: '',
    component: 'person-view',
  },
];
