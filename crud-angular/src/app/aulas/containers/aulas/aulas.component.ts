import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Aula } from "../../model/aula";
import { AulasService } from '../../services/aulas.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrl: './aulas.component.scss',
  //standalone: false,
  //imports: [AppMaterialModule]
})
export class AulasComponent implements OnInit{
  aulas$: Observable<Aula[]>;

  //aulasService: AulasService;

  constructor(
    private aulasService: AulasService,
    public dialog: MatDialog,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) {
    this.aulas$ = this.aulasService.list().pipe(
        catchError(error => {
        this.OnError("Erro ao carregar cursos. Tente novamente mais tarde");
        return of([])
      })
    );
    }

    OnAdd(): void{
      this.router.navigate(['new'], {relativeTo: this.activeRoute});
    }

    OnEdit(aula: Aula) {
      this.router.navigate(['edit', aula._id], {relativeTo: this.activeRoute})
    }

    OnError(ErroMensagem: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: ErroMensagem
      });
    }

    ngOnInit(): void {
      //
  }
}

