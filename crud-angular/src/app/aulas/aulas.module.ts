import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AulasRoutingModule } from './aulas-routing.module';
import { AulasListComponent } from './components/aulas-list/aulas-list.component';
import { AulaFormComponent } from './containers/aula-form/aula-form.component';
import { AulasComponent } from './containers/aulas/aulas.component';


@NgModule({
  declarations: [
    AulasComponent,
    AulaFormComponent,
    AulasListComponent
  ],

  imports: [
    CommonModule,
    AulasRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class AulasModule { }
