import { Resolve, Routes } from '@angular/router';

class DataResolver implements Resolve<any> {
  resolve() {
    console.log('test');
    return [1, 2, 3, 4, 5];
  }
}

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component'),
    pathMatch: 'full',
  },
  {
    path: 'data',
    resolve: DataResolver,
    loadComponent: () => import('./data.component'),
  },
];
