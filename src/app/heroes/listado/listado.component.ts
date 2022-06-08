import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  // arreglo de strings
  heroes: string[] = ['Love', 'Happy', 'Luna', 'Tigre', 'Manchas' ];
  // heroeBorrado: string = '' || false || null || undefined; mismo caso de string vacio
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    /* almacenar el heroe borrado
    const heroeBorrado =this.heroes.shift();
    console.log(heroeBorrado); */
 

  }
/* ambito = alcance (global o local) de las variables.
  El ámbito es global cuando una variable var se declara fuera de una función.
  Esto significa que cualquier variable que se declare con var fuera de una función está disponible para su uso en toda la pantalla.
  var tiene un ámbito local cuando se declara dentro de una función. Esto significa que está disponible y solo se puede acceder a ella dentro de esa función.*/
  
  prueba(){
    //let saludar = "dice Hola";
    let tiempos = 4;
    var hola = "dice Hola tambien";
    
    if (tiempos >= 3) {
     
      console.log(tiempos);// "dice Hola tambien"}
      
    }
    
  }
  
  
}
