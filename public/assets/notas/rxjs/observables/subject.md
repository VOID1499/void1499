Un `Subject` en RxJS es **un observable que también puede emitir valores**.

- Es como un **Observable + Observer**.
- Puedes **emitir valores con `.next()`** y cualquier suscriptor los recibirá.
- **No tiene valor inicial** y **no recuerda valores anteriores** para nuevos suscriptores.

```js

const subj$ = new Subject<string>();

subj$.next("hola");
subj$.next("mundo");

const suscripcion1 = subj$.subscribe({

	next:(valor:string)=>{}
	
})

//mundo

```