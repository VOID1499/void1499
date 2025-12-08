- Es un **Subject multicast**, igual que `Subject` y `BehaviorSubject`.
- **Recuerda N valores anteriores** y se los entrega **inmediatamente a nuevos suscriptores**.
- Puedes definir cuántos valores recordar con el parámetro **buffer size**.
- También puede definir un **windowTime**, que es cuánto tiempo (ms) retiene los valores para nuevos suscriptores.

```js

// Recordar los últimos 2 valores
const replay$ = new ReplaySubject<number>(2);

// Suscriptor 1
replay$.subscribe(x => console.log('Sub 1:', x));

// Emitimos valores
replay$.next(1);
replay$.next(2);
replay$.next(3);

// Suscriptor 2 entra tarde
replay$.subscribe(x => console.log('Sub 2:', x));

// Emitimos otro valor
replay$.next(4);

```