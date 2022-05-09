import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }
}

/*   postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogpessoal')
  }
} */
