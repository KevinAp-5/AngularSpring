import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AulasComponent } from './containers/aulas/aulas.component';
import { AulaFormComponent } from './containers/aula-form/aula-form.component';
import { AulasResolver } from './guards/aula.resolver';

const routes: Routes = [
  {path: "", component: AulasComponent},
  {path: "new", component: AulaFormComponent, resolve: {aula: AulasResolver}},
  {path: "edit/:id", component: AulaFormComponent, resolve: {aula: AulasResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutingModule { }
