import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar'}  },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs Observables'}  },
      { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica'}  },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes'}  },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}  },
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot( routes)
   ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
