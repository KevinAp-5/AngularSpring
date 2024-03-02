import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormArray, Validators } from '@angular/forms';
import { AulasService } from '../../services/aulas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Aula } from '../../model/aula';

interface Categorias {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrl: './aula-form.component.scss',
})
export class AulaFormComponent implements OnInit {
  form!: FormGroup;
  categorias: Categorias[] = [
    { value: 'null', viewValue: '' },
    { value: 'Back-end', viewValue: 'Back end' },
    { value: 'Front-end', viewValue: 'Front end' },
    { value: 'Data-base', viewValue: 'Data Base' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private service: AulasService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }

  getErrorMessage(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors
        ? field.errors['minlength']['requiredLength']
        : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors
        ? field.errors['maxlength']['requiredLength']
        : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }
    return 'Campo inválido';
  }

  ngOnInit(): void {
    const aula: Aula = this.route.snapshot.data['aula'];
    this.form = this.formBuilder.group({
      _id: [aula.id],
      nome: [
        aula.nome,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      categoria: [aula.categoria, [Validators.required]],
      lessons: this.formBuilder.array(this.retrieveLessons(aula))
    });
    console.log(this.form);
    console.log(this.form.value);
  }
  private retrieveLessons(aula: Aula) {
    const lessons = [];
    if (aula?.lessons) {
      aula.lessons.forEach(lesson => lessons.push(
        this.createLesson(lesson)));
    } else {
      lessons.push(this.createLesson())
    }
    return lessons
  }
  private createLesson(lesson = { id: '', nome: '', youtubeUrl: '' }) {
    this.formBuilder.group({
      id: [lesson.id],
      nome: [lesson.nome],
      youtubeUrl: [lesson.youtubeUrl]
    })
  }

  getLessonsFormArray() {
    return (<UntypedFormArray>this.form.get("lessons")).controls;
  }

  OnSubmit() {
    this.service.save(this.form.value).subscribe(
      (resultado) => {
        this.OnCreated();
      },
      (erro) => {
        this.OpenSnackbar('Aconteceu um erro. Tente mais tarde', 'OK');
      }
    );
  }

  OnCancel() {
    this.location.back();
  }

  OnCreated() {
    this.OpenSnackbar('Curso criado com sucesso', 'OK');
    this.location.back();
  }

  private OpenSnackbar(mensage: string, action: string) {
    this.snackBar.open(mensage, action, { duration: 3000 });
  }
}
