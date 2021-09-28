import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ProductsListComponent} from './components/products-list/products-list.component';

const routes: Routes = [
 {
   path:'',
   component:NavComponent,
   children:[
{
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
       {
        path: 'products/edit/:id',
        component: ProductEditComponent
      }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
