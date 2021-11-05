import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprenantsComponent } from './aprenants/aprenants.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { ListPresenceComponent } from './list-presence/list-presence.component';

const routes: Routes = [
  {
    path:'formateurs',
    component:FormateursComponent
  },
  {
    path:'aprenants',
    component:AprenantsComponent
  },
  {
    path:'list-presence',
    component:ListPresenceComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
