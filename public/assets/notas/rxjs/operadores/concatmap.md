El operador concatMap es el operador de proyección secuencial de RxJS.

La frase que mejor lo resume es:

✅ concatMap = “procesa cada emisión una después de la otra, en orden, SIN cancelar nada”

A diferencia de switchMap, no cancela.
A diferencia de mergeMap, no corre en paralelo.
A diferencia de exhaustMap, no ignora emisiones.

→ concatMap espera a que termine la tarea anterior antes de iniciar la siguiente.
🔷 ¿Qué hace exactamente?

Cuando el observable externo emite un valor:

Encola esa emisión.

Espera a que el observable interno actual termine.

Luego empieza el siguiente.

Mantiene orden y secuencia garantizada.

Ideal para:

peticiones que deben ir en orden,

guardar datos uno por uno,

procesos que no deben solaparse,

transacciones,

tareas que requieren consistencia.

🔵 Ejemplo básico
```js
import { of, concatMap, delay } from 'rxjs';

of(1, 2, 3).pipe(
  concatMap(n => of(n * 10).pipe(delay(1000)))
).subscribe(console.log);
```

```txt
Salida:

10   (espera 1s)
20   (espera 1s)
30   (espera 1s)
```