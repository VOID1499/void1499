# Objetos globales importantes en Node.js

En Node.js existen **objetos globales** que están disponibles **sin necesidad de `require` ni `import`**. Entenderlos es clave para comprender cómo funciona el runtime.

---

## 1️⃣ `global`

Es el **objeto global raíz** de Node.js (equivalente a `window` en el navegador).

```js
global.miVariable = 123;
```

* Todo lo que cuelga de `global` está disponible en todo el proceso
* ⚠️ No se recomienda abusar de él (riesgo de colisiones)

---

## 2️⃣ `process`

Representa el **proceso de Node.js**.

### Propiedades comunes

```js
process.pid        // id del proceso
process.platform   // sistema operativo
process.env        // variables de entorno
process.cwd()      // directorio actual
process.argv       // argumentos CLI
```

### Métodos y eventos

```js
process.exit(1);

process.on('exit', () => {});
process.on('SIGINT', () => {});
```

📌 Fundamental para backend, Docker y CI/CD.

---

## 3️⃣ `Buffer`

Permite trabajar con **datos binarios**.

```js
const buf = Buffer.from('hola');
```

* Base de archivos
* Base de streams
* Base de red

📌 Clave para I/O eficiente.

---

## 4️⃣ Timers globales

```js
setTimeout(() => {}, 1000);
setInterval(() => {}, 1000);
setImmediate(() => {});
```

### Cancelación

```js
clearTimeout(id);
clearInterval(id);
clearImmediate(id);
```

* `setTimeout` → temporizador
* `setImmediate` → siguiente iteración del event loop

---

## 5️⃣ `console`

Salida estándar del proceso.

```js
console.log();
console.error();
console.warn();
console.time('x');
console.timeEnd('x');
```

Internamente escribe en:

* `stdout`
* `stderr`

---

## 6️⃣ `__dirname` y `__filename` (CommonJS)

Cada archivo (módulo) tiene su propio __dirname y __filename.
Node los inyecta al cargar el módulo, y se comportan como “globales” dentro de ese módulo, pero no fuera de él.

**Suponiendo que tenemos esta estrucutura**
```js
proyecto/
 ├─ src/
 │   └─ server.js
 └─ package.json
```

**Ejecutamos**
```js
node src/server.js
```
```
__filename  -> /proyecto/src/server.js
__dirname   -> /proyecto/src
process.cwd() -> /proyecto

```

## Para qué se usan normalmente

**Cargar archivos correctamente**

```js
const path = require('path');

const filePath = path.join(__dirname, 'data.json');
```


## ⚠️ Nota importante (ES Modules)

En ESM (type: "module"):

❌ __dirname y __filename NO existen

`Equivalente:`

```js
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

```
---

## 7️⃣ Sistema de módulos CommonJS

```js
require('fs');

module.exports = {};
exports.valor = 1;
```

* `require` → importar módulos
* `module` → módulo actual
* `exports` → API pública

---

## 8️⃣ `queueMicrotask`

Ejecuta una función en la **cola de microtareas**.

```js
queueMicrotask(() => {
  console.log('microtask');
});
```

Relacionado con Promises y el event loop.

---

## 9️⃣ `URL` y `URLSearchParams`

API moderna para trabajar con URLs.

```js
const url = new URL('https://example.com?a=1');
url.searchParams.get('a');
```

---

## 🔟 `TextEncoder` y `TextDecoder`

Conversión entre texto y bytes.

```js
const encoder = new TextEncoder();
const bytes = encoder.encode('hola');
```

---

## Resumen rápido

| Objeto      | Importancia |
| ----------- | ----------- |
| `process`   | ⭐⭐⭐⭐⭐       |
| `Buffer`    | ⭐⭐⭐⭐⭐       |
| Timers      | ⭐⭐⭐⭐        |
| `__dirname` | ⭐⭐⭐⭐        |
| `global`    | ⭐⭐⭐         |
| `URL`       | ⭐⭐⭐         |

---

## Idea clave

> Node.js no gira alrededor del DOM, gira alrededor de **process, Buffer y streams**.

Este conocimiento es esencial para backend, redes, archivos y sistemas distribuidos.
