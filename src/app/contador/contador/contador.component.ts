import { Component} from "@angular/core";
// se ocupa el decorador para transformar esa clase en un componente propio de angular

@Component({
    selector: 'app-contador',
    template: `
    <!-- los {{}} imprimen el valor de la propiedad de la clase, lo estoy llamando del app.component.ts-->

    <h1> {{title}} </h1>
    <h3>La base es: <strong> {{ base }} </strong></h3>

    <button (click)="acumular( base )">+ {{ base }}</button>

    <span> {{numero}} </span>

    <button (click)="acumular(-base)">- {{ base }}</button>

    `
})

// export porque la clase se va a utilizar en otro archivo
export class ContadorComponent {
    title: string = 'bases';
    numero: number = 10;
    base: number = 5;

    /* sumar() {
        // se llama .this porque se hace referencia a la propiedad de la clase
        this.numero +=1;
    } */

    acumular( valor: number) {
        this.numero +=valor;
    }

}