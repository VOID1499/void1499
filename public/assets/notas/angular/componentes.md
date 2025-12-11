

Un componente en angular es una parte de interfaz reutlizable que puede ser incrustado en el DOM como etiqueta de selector.
El componente se compone de los siguientes archivos html , ts ,css y spect opcionalmente .


```js
import { Component } from '@angular/core';

//Decorador component
@Component({ 
  selector: 'app-ejemplo', //etiqueta selector
  templateUrl: './ejemplo.component.html', // html template
  styleUrls: ['./ejemplo.component.css'] // css
})
export class EjemploComponent {

  //logica del componente

  mensaje = 'Hola Angular';
}
```

