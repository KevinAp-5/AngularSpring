import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';
import { Aula } from '../model/aula';

@Injectable({
  providedIn: 'root'
})

export class AulasService{
  private readonly API = "api/aulas"
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Aula[]>(this.API).pipe(
      first(),
      tap(aulas => console.log(aulas))
    );
  }

  save(record: Aula) {
    return this.httpClient.post<Aula>(this.API, record).pipe(first());
  }

}
