 import {NgModule} from '@angular/core';
 import {Routes, RouterModule,PreloadAllModules } from '@angular/router';
 import { DemoComponent } from './components/demo/demo.component';

 const routes: Routes = [
 {
  path: '',
  component: DemoComponent
 }
];
 @NgModule({
imports: [
 RouterModule.forChild(routes), // importa los child de la const routes
],
exports: [
 RouterModule // lo dejo disponible para otros modulos
]
 })
 export class DemoRoutingModule{
 };