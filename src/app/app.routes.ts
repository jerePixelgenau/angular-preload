import { ActivatedRoute, Resolve, Routes } from '@angular/router';

export class DataResolver implements Resolve<any> {
  constructor(private route: ActivatedRoute) {}

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
    resolve: { data: DataResolver },
    loadComponent: () => import('./data.component'),
  },
];
