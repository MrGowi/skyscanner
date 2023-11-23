import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: 'stadts',
            loadComponent: () =>
              import('../stadt-list/stadt-list.component').then((m) => m.StadtListComponent),
          },
          {
            path: 'stadt',
            loadComponent: () =>
              import('../stadt-detail/stadt-detail.component').then((m) => m.StadtDetailComponent),
          },
          {
            path: 'stadt/:id',
            loadComponent: () =>
              import('../stadt-detail/stadt-detail.component').then((m) => m.StadtDetailComponent),
          },
          {
            path: '',
            redirectTo: 'stadts',
            pathMatch: 'full',
          }
        ],
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
