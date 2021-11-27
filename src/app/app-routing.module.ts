import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  // path: '/dashboard' PagesRoutingModule
  // path: '/auth' AuthRoutingModule

  { path: '**', component: NotpagefoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot( routes),
      PagesRoutingModule,
      AuthRoutingModule
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
