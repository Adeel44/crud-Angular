import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { clientResolver } from './services/client.resolver';

//import { ClientResolver } from './services/clients.resolver';




const routes: Routes = [
  { path: "create", component:AddComponent },
  { path: "list", component: ListComponent 
},
  { path: "edit/:id", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
