import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  
  // Este objeto es una propiedad 
 @Input() nuev : Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) {}

  // @Output para emitir eventos, <Personaje>= tipo de dato que se enviara
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


// .trim borra espacios en blanco
//.length para cantidad de caracteres que tiene
  agregar( ) {
    if ( this.nuev.nombre.trim().length === 0 ) { return ;}
   
    // this.onNuevoPersonaje.emit( this.nuev );
    this.dbzService.agregarPersonaje( this.nuev);

// aquí inserta un nuevo personaje
    this.nuev = {
      nombre: "",
      poder: 0
    }

  }

}
