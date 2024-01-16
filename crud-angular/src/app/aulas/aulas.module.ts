import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AulasRoutingModule } from './aulas-routing.module';
import { AulasComponent } from './aulas/aulas.component';
import { AulaFormComponent } from './aula-form/aula-form.component';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AulasListComponent } from './aulas-list/aulas-list.component';


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
