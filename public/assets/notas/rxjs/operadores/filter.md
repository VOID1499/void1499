El operador filter de RxJS sirve para permitir solo las emisiones que cumplen una condición y descartar las demás.
Funciona igual que Array.filter(), pero aplicado a emisiones de un observable en el tiempo.

🔷 ¿Qué hace filter?

Deja pasar solo las emisiones cuyo callback regresa true.

Todo lo que no cumpla la condición → no se emite.

🔷 Ejemplo básico
```js
import { of, filter } from 'rxjs';

of(1, 2, 3, 4, 5).pipe(
  filter(n => n % 2 === 0)   // solo números pares
).subscribe(console.log);
```
```txt
Salida:

2
4
```