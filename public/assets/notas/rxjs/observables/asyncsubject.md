
- Es un **Subject multicast**, igual que los demás.
- **Solo emite el último valor** **cuando se completa**.
- Si no se llama a `.complete()`, **los suscriptores nunca reciben ningún valor**, aunque hayas llamado `.next()` varias veces.
- Es útil cuando quieres **esperar a que todo termine** antes de notificar a los suscriptores.

```js

const async$ = new AsyncSubject<number>();

async$.subscribe(x => console.log('Sub 1:', x));

async$.next(1);
async$.next(2);
async$.next(3);

// Aún no se recibe nada porque no se completó
console.log('Antes de complete');

// Llamamos a complete
async$.complete();  
```