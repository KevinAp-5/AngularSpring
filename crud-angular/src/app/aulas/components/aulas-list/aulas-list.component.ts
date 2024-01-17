import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aula } from '../../model/aula';

@Component({
  selector: 'app-aulas-list',
  templateUrl: './aulas-list.component.html',
  styleUrl: './aulas-list.component.scss'
})
export class AulasListComponent {
  @Input() aulas: Aula[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly Colunas = ['nome', 'categoria', 'actions'];

  constructor () {
    console.log("");
  }  // End constructor

  OnAdd(): void{
    this.add.emit(true);
  }

  OnEdit(aula: Aula) {
    this.edit.emit(aula);
  }
}
