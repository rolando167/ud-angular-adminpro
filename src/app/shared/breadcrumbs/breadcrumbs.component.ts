import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Event, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  public titulo: string = '';

  constructor(private router: Router) {
    this.getDataRutas();
  }

  getDataRutas(){
    this.router.events
      .pipe(
        // filter( event => event instanceof  ActivationEnd ),
        filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
        filter( (event ) => event.snapshot.firstChild === null ),
        map( (event ) => event.snapshot.data ),
      )
      .subscribe(({titulo}) => {
        this.titulo = titulo;
        document.title = `AdminPro - ${titulo}`;
      })
  }

  ngOnInit(): void {
  }

}
