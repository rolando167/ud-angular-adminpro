import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(theme: string){

    const linkTheme = document.querySelector('#theme');
    const url = `./assets/css/colors/${theme}.css`;

    linkTheme?.setAttribute('href', url);

  }

}
