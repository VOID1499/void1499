El operador map de RxJS sirve para transformar los valores que emite un observable, igual que el map() de los arrays, pero aplicado a emisiones en el tiempo.

Es uno de los operadores más usados.

🔷 ¿Qué hace map?

Toma cada valor emitido y devuelve un nuevo valor.

A → B

🔷 Ejemplo básico

```js
import { of, map } from 'rxjs';

of(1, 2, 3).pipe(
  map(n => n * 10)
).subscribe(console.log);
```

```txt
Salida:

10
20
30
```


🔷 Cómo funciona internamente

Por cada emisión:

Recibe el valor.

Aplica la función que le pasaste.

Emite el resultado.

Nunca modifica el observable original, solo crea uno nuevo.

🔷 Ejemplo práctico en Angular
Transformar respuesta de una API
```js

this.user$ = this.http.get('/api/user').pipe(
  map((user: any) => ({
    id: user.id,
    name: user.full_name,
    active: user.status === 'active'
  }))
);
```

🔷 map NO filtra valores

Si quieres filtrar emisiones, se usa:

filter(x => x > 10)

🔷 map aplicado a arrays dentro del observable

A veces ves esto:
```js

this.products$ = this.http.get<Product[]>('/api/products').pipe(
  map(products => products.map(p => p.price * 2))
);
```


