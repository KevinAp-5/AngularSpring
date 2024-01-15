import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AulasService } from '../services/aulas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Categorias {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrl: './aula-form.component.scss',
})
export class AulaFormComponent {
  form: FormGroup;
  categorias: Categorias[] = [
    {value: 'null', viewValue: ''},
    {value: 'backend', viewValue: 'Back end'},
    {value: 'frontend', viewValue: 'Front end'},
    {value: 'database', viewValue: 'Data Base'},
  ];

  constructor(private formBuilder: FormBuilder,
    private service: AulasService,
    private snackBar: MatSnackBar
    ) {
    this.form = this.formBuilder.group({
      nome: [null],
      categoria: [null]
    });
  }

  OnSubmit() {
    this.service.save(this.form.value).subscribe(
      resultado => {
        console.log(resultado);
      },
      erro => {
        this.OpenSnackbar("Aconteceu um erro. Tente mais tarde", "OK")
      }
    )
  }

  OnCancel() {
    console.log("Cancel");
  }

  private OpenSnackbar(mensage: string, action: string) {
    this.snackBar.open(mensage, action);
  }
}
