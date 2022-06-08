import { Component } from "@angular/core";

/* Crear un componente de forma manual:
1: crear el archivo
2: importar el componente (linea 1)
3: configurar el decorador (linea 13)
4: definir la clase que se quiere crear (linea1 9)
5: verificar si tiene el template html, si no crearlo (heroe.component.html)
6: si no se quiere la anterior opción se puede dejar en el mismo archivo
7: importarlo en el modulo (app.module) import { HeroeComponent } from './heroes/heroe/heroe.component'; 
y en @NgModule en ese mismo archivo*/


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
   

})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }
   
    obtenerNombre (): string {
        //es más facíl insertar valores así, linea 16
        return `${ this.nombre } - ${ this.edad }`;
        // Aquí esta concatenando un nombre, le suma un espacio y concatena la edad
        //return this.nombre + ' - ' + this.edad.toString();
    }

    cambiarNombre (): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad (): void {
        this.edad = 30;
    }

}