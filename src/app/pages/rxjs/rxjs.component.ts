import { Component, OnDestroy} from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription ;

  constructor() {

    // this.retornaObservable().pipe(
    //   retry(1)
    // )
    // .subscribe(
    //   valor => console.log('Subs:', valor),
    //   error => console.log('Subs:', error),
    //   () => console.log('Obs Terminado !!'),
    // );
    this.intervalSubs = this.retornaIntervalo().subscribe( console.log )
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{

    return interval(1000)
            .pipe(
              map( valor => valor + 1 ),
              filter( valor => ( valor % 2 === 0)? true: false),
              // take(10),
            );
  }

  retornaIntervalo0(): Observable<number>{

    const intervalo$ = interval(1000)
                        .pipe(
                          map( valor => {
                            return valor + 1;
                            // return 'Hola mundo ' +valor;
                          }),
                          filter( valor => ( valor % 2 === 0)? true: false),
                          take(10),

                        );

    return intervalo$;
  }

  retornaObservable(): Observable<number>{
    let i = -1;

    const obs$ = new Observable<number>(observer =>{

      const intervalo = setInterval( () =>{
        i++;
        observer.next(i);

        if(i === 4){
          clearInterval(intervalo);
          observer.complete();
        }

        if(i === 2){
          observer.error('i llegó al valor de 2');
        }


      }, 1000 )

    });

    return obs$;
  }

}
