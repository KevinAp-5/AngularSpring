import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { Component, Input } from '@angular/core';
import { Aula } from '../model/aula';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aulas-list',
  templateUrl: './aulas-list.component.html',
  styleUrl: './aulas-list.component.scss'
})
export class AulasListComponent {
  @Input() aulas: Aula[] = [];
  readonly Colunas = ['nome', 'categoria', 'actions'];

  constructor (
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {

  }  // End constructor

  OnAdd(): void{
    this.router.navigate(['new'], {relativeTo: this.activeRoute});
  }
}
