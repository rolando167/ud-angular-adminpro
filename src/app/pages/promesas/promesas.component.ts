import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const promesa = new Promise( (resolve, reject) => {
      if(true){
        resolve('Hola Mundo 😄');
      }else{
        reject('Upps Algo salió mal!! 🛑')
      }
    });

    promesa.then( (mensaje)=>{
      console.log(mensaje);
    }).catch( error => console.log('Error en mi promesa', error));

    console.log('Fin del Init');

  }

}
