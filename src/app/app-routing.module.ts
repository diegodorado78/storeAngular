import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AdminGuard} from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'demo',
        canActivate: [AdminGuard],
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
 imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules // metodo para precargar componentes no usados
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }