import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AulasComponent } from './containers/aulas/aulas.component';
import { AulaFormComponent } from './containers/aula-form/aula-form.component';

const routes: Routes = [
  {path: "", component: AulasComponent},
  {path: "new", component: AulaFormComponent},
  {path: "edit/:id", component: AulaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutingModule { }
