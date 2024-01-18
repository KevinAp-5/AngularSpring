import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';
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
      //tap(aulas => console.log(aulas))
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Aula>(`${this.API}/${id}`);
  }

  save(record: Partial<Aula>) {
    if (record._id) {
      return this.update(record);
    }

    return this.create(record);
    //return this.httpClient.post<Aula>(this.API, record).pipe(first());
  }

  private create(record: Partial<Aula>) {
    return this.httpClient.post<Aula>(this.API, record).pipe(first());
  }

  private update(record: Partial<Aula>) {
    return this.httpClient.put<Aula>(`${this.API}/${record._id}`, record).pipe(first());
  }

}
