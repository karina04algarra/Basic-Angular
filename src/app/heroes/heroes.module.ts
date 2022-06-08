import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
      HeroeComponent,
      ListadoComponent
  ],
  exports: [
      ListadoComponent
  ],
  imports: [
      CommonModule
  ]

})
export class HeroesModule { }

/* eL objetivo de los modulos es ayudar a agrupar componentes y piezas de la aplicación que tienen sentido entra si.
Es bueno agrupar los componentes en modulos de manera que sea facil expandir su funcionalidad o añadir más componentes
sin necesidad de ir al app.module y ese crezca mucho.
Los modulos encapsulan y ayudan con la carga perezosa  */
