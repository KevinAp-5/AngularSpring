import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AulasService } from '../services/aulas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

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
    {value: 'back-end', viewValue: 'Back end'},
    {value: 'front-end', viewValue: 'Front end'},
    {value: 'data-base', viewValue: 'Data Base'},
  ];

  constructor(private formBuilder: FormBuilder,
    private service: AulasService,
    private snackBar: MatSnackBar,
    private location: Location
    ) {
    this.form = this.formBuilder.group({
      nome: [null],
      categoria: [null]
    });
  }

  OnSubmit() {
    this.service.save(this.form.value).subscribe(
      resultado => {
        this.OnCreated();
      },
      erro => {
        this.OpenSnackbar("Aconteceu um erro. Tente mais tarde", "OK")
      }
    )
  }

  OnCancel() {
    this.location.back();
  }

  OnCreated() {
    this.OpenSnackbar("Curso criado com sucesso", "OK");
    this.location.back();
  }

  private OpenSnackbar(mensage: string, action: string) {
    this.snackBar.open(mensage, action, {duration: 3000});
  }
}
