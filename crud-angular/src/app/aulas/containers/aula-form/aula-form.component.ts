import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AulasService } from '../../services/aulas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Aula } from '../../model/aula';

interface Categorias {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrl: './aula-form.component.scss',
})
export class AulaFormComponent implements OnInit{
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
    private location: Location,
    private route: ActivatedRoute
    ) {
    this.form = this.formBuilder.group({
      _id: [''],
      nome: [null],
      categoria: [null]
    });
  }

  ngOnInit(): void {
    const aula: Aula = this.route.snapshot.data['aula'];
    this.form.setValue({
        _id: aula._id,
        nome: aula.nome,
        categoria: aula.categoria
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
