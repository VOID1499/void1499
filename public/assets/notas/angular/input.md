En Angular, @Input() sirve para recibir datos desde un componente padre hacia un componente hijo.
Es la forma oficial en Angular de comunicación de padre → hijo.

```js
import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-hijo',
  template: `<p>Nombre: {{ nombre }}</p>`
})
export class HijoComponent {

  //Decorador que indica una propiedad entrante  
  @Input() nombre: string = "";


  //Añadiendo required true en nuevas versiones puedes indicar que sea un input requerido siempre
  @Input({required:true}) apellido!:string;
}

```



## Vista HTML

```html

El padre esta pasando su variable a la del hijo
<app-hijo [apellido]="variableDelPadre"></app-hijo>


Tambien se puede pasar explicitamente una cadena con la sintaxis de comillas simples dentro
<app-hijo [apellido]="'erick'"></app-hijo>

```