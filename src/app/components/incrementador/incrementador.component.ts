import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent   {

  @Input('valorProgreso') progreso: number =50;

  // get getPorcentaje(){
  //   return `${this.progreso}%`
  // }

  cambiarValor(valor: number){

    if(this.progreso >= 100 && valor >= 0){
        return this.progreso = 100;
    }
    if(this.progreso <= 0 && valor < 0){
        return this.progreso = 0;
    }
    return this.progreso = this.progreso + valor;
  }

}
