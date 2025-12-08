
- Es un tipo de **Observable especial** en RxJS.
- Tiene un **valor actual**, que siempre puedes obtener con `.value`.
- Siempre **emite el valor más reciente** a **nuevos suscriptores**.
- Requiere un **valor inicial** al crearlo.

```js


//emision por defecto null
const obs$ = new BehaviorSubject<string | null>(null);

//luego emite otro valor
obs$.next("hola mundo")

obs$.subscribe({
	next:(valor:string | null)=>{
		console.log(valor)
	}
})

//hola mundo

```