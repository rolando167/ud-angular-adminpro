import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    this.asignarTemaActual();
  }

  asignarTemaActual(){
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme?.setAttribute('href', url);
  }
}
