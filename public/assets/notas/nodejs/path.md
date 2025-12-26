# Módulo `path` en Node.js

El **módulo `path`** es un **módulo nativo de Node.js** que sirve para **trabajar con rutas de archivos y directorios** de forma **segura y multiplataforma**.

---

## ¿Por qué existe `path`?

Los sistemas operativos usan separadores distintos:

* **Windows** → `\\`
* **Linux / macOS** → `/`

El módulo `path` evita que tengas que construir rutas manualmente y que tu código **se rompa según el sistema operativo**.

> `path` se encarga de **normalizar y componer rutas correctamente**.

---

## Qué NO hace `path`

* ❌ No lee archivos
* ❌ No escribe archivos
* ❌ No accede al sistema de archivos

👉 **Solo trabaja con strings que representan rutas**.

Para acceder a archivos se usan otros módulos como `fs`.

---

## Importación del módulo

### CommonJS

```js
const path = require('path');
```

### ES Modules

```js
import path from 'path';
```

---

## Funciones más usadas

### `path.join()`

Une segmentos de ruta y los normaliza según el SO.

```js
path.join('public', 'images', 'logo.png');
```

Resultado:

* Windows → `public\\images\\logo.png`
* Linux/macOS → `public/images/logo.png`

---

### `path.resolve()`

Devuelve una **ruta absoluta**, partiendo del directorio actual.

```js
path.resolve('assets', 'file.txt');
```

---

### `path.basename()`

Obtiene el nombre del archivo.

```js
path.basename('/home/user/file.txt');
// file.txt
```

---

### `path.dirname()`

Obtiene el directorio padre.

```js
path.dirname('/home/user/file.txt');
// /home/user
```

---

### `path.extname()`

Obtiene la extensión del archivo.

```js
path.extname('foto.jpg');
// .jpg
```

---

### `path.parse()`

Descompone una ruta en sus partes.

```js
path.parse('/home/user/file.txt');
```

Resultado:

```js
{
  root: '/',
  dir: '/home/user',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
```

---

### `path.format()`

Reconstruye una ruta a partir de un objeto como el devuelto por `parse()`.

---

## Propiedades útiles

```js
path.sep       // Separador de rutas del SO
path.delimiter // Separador de variables de entorno (PATH)
```

---

## Ejemplo típico en backend

```js
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'file.pdf');
```

Esto evita errores como:

```js
'public/' + file; // ❌
```

---

## Relación con `fs` y streams

```js
import fs from 'fs';
import path from 'path';

fs.createReadStream(
  path.join(__dirname, 'files', 'video.mp4')
);
```

* `path` → construye la ruta
* `fs` → accede al archivo
* `stream` → maneja los datos en memoria

---

## Resumen

* 📦 `path` es un **módulo nativo de Node.js**
* 🧭 Sirve para **trabajar con rutas**
* 🖥 Es **multiplataforma**
* 🧩 Manipula **strings**, no archivos

> Usa `path` siempre que construyas rutas en Node.js.
