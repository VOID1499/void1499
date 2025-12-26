## 1️⃣ ¿Qué problema resuelven ambos?

Ambos sirven para lo mismo:

> **Dividir código en archivos y reutilizarlo**

La diferencia está en **cómo** lo hacen y **cuándo** se cargan.

---

## 2️⃣ CommonJS (CJS) — el “viejo confiable” de Node

### Características
- Sistema propio de Node.js
- Carga módulos **en tiempo de ejecución**
- Muy dinámico
- Usado históricamente en backend

### Sintaxis


```js
const fs = require('fs');

module.exports.hello = () => {};
```
o
```js
exports.hello = () => {};
```
--- 
```js
const mod = require('./file');
mod.hello();
```

 - require() se ejecuta cuando corre el código

 - Puedes usar require() dentro de funciones

 - Es flexible, pero menos optimizable



## 3️⃣ ES Modules (ESM) — el estándar moderno
### Características

- Estándar oficial de JavaScript
- Usado en frontend y backend
- Carga estática
- Mejor para tooling y optimización

### Sintaxis


```js
import fs from 'fs';

export const hello = () => {};
```
---
```js
import { hello } from './file.js';
```
- Los imports se resuelven antes de ejecutar el código
- La importación dinámica requiere import()
- Más predecible y analizable