import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Event, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string = '';
  public tituloSubs$: Subscription;

  constructor(private router: Router, private route:ActivatedRoute) {
    // console.log(route.snapshot.data);

    this.tituloSubs$ = this.getDataRutas()
                        .subscribe(({titulo}) => {
                        this.titulo = titulo;
                        document.title = `AdminPro - ${titulo}`;
                      });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getDataRutas(){

    return this.router.events
      .pipe(
        // filter( event => event instanceof  ActivationEnd ),
        filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
        filter( (event ) => event.snapshot.firstChild === null ),
        map( (event ) => event.snapshot.data ),
      );
  }

  // https://stackoverflow.com/questions/57552863/angular-router-event

}
