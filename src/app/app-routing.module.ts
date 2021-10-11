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
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
       {
        path:'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
    ]
  },
  {
    path:'admin',
    // el modulo de admin si debe tener un guard para evitar que cualquiera entre
        canActivate: [AdminGuard],//si existe un usuario admin registrado se activa el guar y lo deja pasar
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
