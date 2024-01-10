import { Component, OnInit } from '@angular/core';
import {Aula} from "../model/aula";
import { AulasService } from '../services/aulas.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrl: './aulas.component.scss',
  //standalone: false,
  //imports: [AppMaterialModule]
})

export class AulasComponent implements OnInit{
  aulas$: Observable<Aula[]>;

  Colunas = ['nome', 'categoria'];

  //aulasService: AulasService;

  constructor(
    private aulasService: AulasService,
    public dialog: MatDialog
    ) {
    //this.aulasService = new AulasService();
    this.aulas$ = this.aulasService.list().pipe(
      catchError(error => {
        this.OnError("Erro ao carregar cursos. Tente novamente mais tarde");
        return of([])
      })
    );

    //this.aulasService.list().subscribe(aulas => this.aulas = aulas)
  }

  OnError(ErroMensagem: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: ErroMensagem
    });
  }

  ngOnInit(): void {

  }
}
