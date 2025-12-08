Cuando ese observable emite un solo valor, entonces:

✔ Cancela la suscripción del observable principal
✔ Limpia la suscripción automáticamente
✔ Deja de emitir
✔ Se completa

👉 “Escucha este observable… hasta que este otro observable diga STOP.”

🔧 Sintaxis

```js
source$.pipe(
  takeUntil(stop$)
);
```

source$ → lo que estás escuchando (HTTP, interval, eventos…)

stop$ → otro observable que, cuando emita, detiene todo

🎯 Ejemplo simple
```js
const source$ = interval(1000); // emite cada segundo
const stop$ = timer(5000); // emite una vez a los 5s

source$
  .pipe(takeUntil(stop$))
  .subscribe(console.log);
```


| Tiempo | Acción                               |
| ------ | ------------------------------------ |
| 0s     | empieza a emitir 0,1,2,3...          |
| 5s     | `stop$` emite                        |
| 5s     | **takeUntil cancela la suscripción** |
| >5s    | nunca más se emite nada              |

## 🧪 Funciona así internamente

Se suscribe a source$

Se suscribe a stop$

Si stop$ emite:

corta la suscripción de source$

emite complete

no deja pasar más valores



## 🚪 Caso perfecto: destruir un componente Angular
```js
private destroy$ = new Subject<void>();

this.http.get('/api/data')
  .pipe(takeUntil(this.destroy$))
  .subscribe();

ngOnDestroy() {
  this.destroy$.next();   // cancela la petición
  this.destroy$.complete();
}
```

## ✔️ ¿takeUntil completa el observable principal?

NO.
El observable principal sigue existiendo y sigue emitiendo internamente.

Lo que se completa es tu suscripción, no la fuente.

## ✔️ ¿Qué SÍ hace takeUntil entonces?

Cuando el observable “stop” emite:

Cierra tu suscripción al observable principal

Llama a complete() en la cadena

Deja de recibir valores

Libera la memoria asociada a esa suscripción

Pero el observable original no se destruye, ni se detiene.
Simplemente tú ya no lo escuchas.