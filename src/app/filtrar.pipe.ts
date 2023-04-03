import { Pipe, PipeTransform } from '@angular/core';
import { Foto } from './modelo/Foto';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(vetor: Foto[], titulo:string): Foto[] {
    return vetor.filter(obj => {return obj.title.toLowerCase().indexOf(titulo.toLowerCase()) !== -1});
  }

}
