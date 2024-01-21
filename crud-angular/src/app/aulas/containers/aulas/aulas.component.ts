import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Aula } from '../../model/aula';
import { AulasService } from '../../services/aulas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrl: './aulas.component.scss',
  //standalone: false,
  //imports: [AppMaterialModule]
})
export class AulasComponent implements OnInit {
  aulas$: Observable<Aula[]> | null = null;

  //aulasService: AulasService;

  constructor(
    private aulasService: AulasService,
    public dialog: MatDialog,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.aulas$ = this.aulasService.list().pipe(
      catchError((error) => {
        this.OnError('Erro ao carregar cursos. Tente novamente mais tarde');
        return of([]);
      })
    );
  }

  OnAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.activeRoute });
  }

  OnEdit(aula: Aula) {
    this.router.navigate(['edit', aula._id], { relativeTo: this.activeRoute });
  }

  OnError(ErroMensagem: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: ErroMensagem,
    });
  }

  OnDelete(aula: Aula) {
    const dialogReference = this.dialog.open(ConfirmDialogComponent, {
      data: 'Deseja remover esse curso?',
    });

    dialogReference.afterClosed().subscribe((result: boolean) => {
      if (result == true) {
        this.aulasService.delete(aula._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Curso removido', 'OK', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          },
          () => {
            this.OnError('Erro ao tentar remover curso');
          }
        );
      }
    });
  }

  ngOnInit(): void {
    //
  }
}
