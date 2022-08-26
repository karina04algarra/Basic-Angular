import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  /* agregar( event: any ) {
    // prevee el comportamiento por defecto que tiene el submit de un formulario, linea 11, esto esta en el html
    form (submit)="agregar( $event )"
    event.preventDefault();
    aquí se ve todo el evento que se disparo, linea 13
    console.log(event);

  } */

  nuevo_ts: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

//  injeccion de dependencias, se injecta el servicio en este componente
  constructor() { }

}
