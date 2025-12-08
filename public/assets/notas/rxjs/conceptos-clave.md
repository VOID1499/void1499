## ✅ ¿Qué es RxJS?

RxJS (Reactive Extensions for JavaScript) es una librería para trabajar con programación reactiva, basada en:

    
## Observables
    
Un observable es un flujo de datos que emite valores de forma finita o inifinita a sus subscriptores.
Esto es importante tenerlo encuenta ya que una suscripcion a un observable infinito puede causar fugas de memoria y hacer nuestra aplicacion mas lenta.


## Observer 

Funciones que reciben esos valores (next, error, complete).
Estas funciones se ejecutan cada vez que se emite un evento de next error o completa el fin del observable.

## Subscription

La conexión entre el observable y el observer.
Sin suscripción nada se ejecuta.

## Operadores

Funciones que permiten transformar, filtrar, combinar, controlar el tiempo, etc.
Ej: map, switchMap, mergeMap, takeUntil, debounceTime, etc.




## Ejemplo practico

```js

import { of} from "rxjs";


//este observable emite 3 valores de forma consecutiva
of(1, 2, 3).subscribe({
  next: (val) => {
    console.log(val);
  },
  error: (err) => {},
  complete: () => {
    console.log("complete");
  }
});

```
## 🟦 1. Observables Finitos

Los observables finitos son aquellos que tienen un inicio y un fin claro un ejemplo sencillo seria un peticion HTTP ya que se hace la peticion y emite un valor y se completa.

## 🟥 2. Observables Infinitos

En cambio los obsrvables infinitos pueden ser flujos de datos que no se cierra durante todo le uso de la aplicacion a menos que lo hagamos de forma explicita .
Esto es impotante ya que ciertos flujos de datos pueden quedar abiertos creando fugas de memoria y haciendo mas lenta una aplicación.

Un ejemplo claro puede ser el flujo de escucha de un input de busqueda para productos .El cual puede emitir todos los valores como terminos de busqueda.


Un error muy comun es suscribirse a un flujo de datos infinitos y luego no eliminar esa suscripcion cuando ya no se necesita.
Esto crea un espacio en memoria que queda ocupado sin uso. Y nuevamente se realiza otra suscripcion a esto se le llama una multi suscripcion.

### Observables multicasteo

Con respecto a lo anterior los observables multicast son aquellos que permiten tener muchos oyentes o subscriptores.

Esto es muy conveniente para aplicaciones que requieren una ractividad global ya que en el caso de aplicaciones web con componentes cada componente puede comportarse como  un subscriptor unico a una fuente de datos unificada.


