El operador finalize en RxJS es muy útil. Se ejecuta cuando el observable termina, ya sea:

porque completó,

porque ocurrió un error,

o porque fue cancelado / unsubscribe.

Es como el finally de un try/catch/finally, pero para observables.

🔷 ¿Para qué sirve finalize?

Para ejecutar lógica de “limpieza” o acciones finales como:

detener loaders / spinners

cerrar conexiones

limpiar suscripciones

resetear estados

registrar logs

🔷 Ejemplo simple

```js
import { of, finalize } from 'rxjs';

of(1, 2, 3).pipe(
  finalize(() => console.log('Finalizó'))
).subscribe(console.log);
```

Salida:

1
2
3
Finalizó

🔷 finalize se ejecuta aunque haya error

```js
throwError(() => new Error('Oops')).pipe(
  finalize(() => console.log('Siempre me ejecuto'))
).subscribe({
  error: err => console.log('Error:', err.message)
});
```


Salida:

Error: Oops
Siempre me ejecuto

🔷 finalize se ejecuta si haces unsubscribe
const sub = interval(1000).pipe(
  finalize(() => console.log('Cancelado'))
).subscribe();

setTimeout(() => sub.unsubscribe(), 3000);