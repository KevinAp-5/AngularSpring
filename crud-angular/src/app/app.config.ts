import {
  APP_INITIALIZER,
  ApplicationConfig,
  Injectable,
  inject,
} from '@angular/core';

import { provideRouter } from '@angular/router';

import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routes } from "./app-routing.module";

@Injectable({ providedIn: 'root' })
class StartupService {
  private http = inject(HttpClient);

  load(): Observable<any> {
    return this.http.get('/');
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: (startupService: StartupService) => () =>
        startupService.load(),
      deps: [StartupService],
      multi: true,
    },
  ],
};
