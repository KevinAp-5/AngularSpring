import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AulasRoutingModule } from './aulas-routing.module';
import { AulasComponent } from './aulas/aulas.component';
import { AulaFormComponent } from './aula-form/aula-form.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AulasComponent,
    AulaFormComponent
  ],

  imports: [
    CommonModule,
    AulasRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatTableModule
  ]
})
export class AulasModule { }
