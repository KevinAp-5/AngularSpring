import { Aula } from './../model/aula';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AulasService } from '../services/aulas.service';

@Injectable({
  providedIn: 'root'
})
export class AulasResolver implements Resolve<Aula> {

  constructor(private service: AulasService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aula> {
    if (route.params?.['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ "id": "", "nome": "", "categoria": "" })
  }
}
