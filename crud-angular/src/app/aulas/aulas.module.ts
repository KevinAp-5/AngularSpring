import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AulasRoutingModule } from './aulas-routing.module';
import { AulasComponent } from './aulas/aulas.component';
import { AulaFormComponent } from './aula-form/aula-form.component';

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
  ]
})
export class AulasModule { }
