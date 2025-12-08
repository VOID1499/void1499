Concat es un operador de combinación secuencial.

👉 Toma varios observables y los ejecuta UNO después del otro, en orden.
👉 No avanza al siguiente hasta que el anterior se completa.

Es como poner observables en una fila:

[A] → luego [B] → luego [C]

🔧 Sintaxis

```js
import { concat } from 'rxjs';

concat(obs1, obs2, obs3).subscribe(...);
```