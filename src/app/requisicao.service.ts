import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foto } from './modelo/Foto';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  // Url
  private url:string = 'https://jsonplaceholder.typicode.com/photos';

  // Construtor
  constructor(private http:HttpClient) {}

  // Método para obter todas as imagens
  listar():Observable<Foto[]>{
    return this.http.get<Foto[]>(this.url);
  }
  
}
