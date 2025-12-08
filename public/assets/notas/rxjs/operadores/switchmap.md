El operador switchMap es uno de los más importantes de RxJS.
Su comportamiento se resume en una frase:

✅ switchMap = “cancela lo anterior y escucha solo lo último”

Cada vez que el observable externo emite un valor, switchMap:

cancela el observable interno anterior (si aún estaba activo),

crea un nuevo observable interno con el valor actual,

emite solo los valores del observable más reciente.

Es un operador de proyección + cancelación.

🔷 Ejemplo simple para entenderlo
```js
import { interval, switchMap } from 'rxjs';

interval(1000).pipe(
  switchMap(() => interval(300))
).subscribe(console.log);

```

Qué pasa:

El intervalo externo emite cada 1s.

switchMap arranca un intervalo interno cada vez.

Pero cancela el anterior → solo queda el más nuevo.

Resultado: imprime números resetados cada segundo.


🔷 switchMap cancela solo el observable interno, no el externo
```js
click$.pipe(
  switchMap(() => this.api.loadData())
)
```