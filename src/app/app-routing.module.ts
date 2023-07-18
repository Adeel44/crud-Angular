import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'client', loadChildren: () => import('./client/client.module').then(mod => mod.ClientModule) },
  { path: 'category', loadChildren: () => import('./categories/categories.module').then(mod => mod.CategoriesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
