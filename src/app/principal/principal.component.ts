import { Component } from '@angular/core';
import { Foto } from '../modelo/Foto';
import { RequisicaoService } from '../requisicao.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  // Vetor de fotos
  vetor:Foto[] = [];

  // Variável título (utilizando no input)
  titulo:string = '';

  // Construtor
  constructor(private requisicao:RequisicaoService){}

  // Depois que carregar todo o componente
  ngOnInit(){
    this.obterFotos();
  }

  // Método para chamar o serviço responsável por realizar o método GET da API
  private obterFotos():void{
    this.requisicao.listar().subscribe(retorno => this.vetor = retorno);
  }

}
