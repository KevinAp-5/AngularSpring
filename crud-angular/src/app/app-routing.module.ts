import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "aulas"},
  {path: "api/aulas", pathMatch: "full", redirectTo: "aulas"},
  {
    path: "aulas",
    loadChildren: () => import ("./aulas/aulas.module").then(m => m.AulasModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
