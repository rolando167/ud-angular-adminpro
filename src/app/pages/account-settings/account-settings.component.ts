import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  // public linkTheme = document.querySelector('#theme');

  // public links!: NodeListOf<Element>;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    // this.links = document.querySelectorAll('.selector');
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string){

    this.settingsService.changeTheme(theme);
  }


}
