import { Injectable } from '@angular/core';

import { Aula } from '../model/aula';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AulasService{
  private readonly API = "/assets/aulas.json"
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Aula[]>(this.API).pipe(
      first(),
      //delay(5000),
      tap(aulas => console.log(aulas))
    );
  }
}
