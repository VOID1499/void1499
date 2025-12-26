


```javascript
const fs require("node:fs");
```

📖 **Lectura de archivos**

| Función                                  | Descripción                                                 | Ejemplo                                                               |
| ---------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| `fs.readFile(path, [options], callback)` | Lee un archivo **de forma asíncrona**.                      | `fs.readFile('texto.txt', 'utf8', (err, data) => console.log(data));` |
| `fs.readFileSync(path, [options])`       | Lee un archivo **de forma síncrona** (bloquea el hilo).     | `const data = fs.readFileSync('texto.txt', 'utf8');`                  |
| `fs.createReadStream(path, [options])`   | Crea un **stream de lectura**, ideal para archivos grandes. | `fs.createReadStream('video.mp4');`                                   |

✍️ **Escritura y modificación**

|Función|Descripción|Ejemplo|
|---|---|---|
|`fs.writeFile(path, data, [options], callback)`|**Crea o sobrescribe** un archivo.|`fs.writeFile('nuevo.txt', 'Hola!', err => {});`|
|`fs.writeFileSync(path, data, [options])`|Versión **síncrona** de `writeFile`.|`fs.writeFileSync('nuevo.txt', 'Contenido');`|
|`fs.appendFile(path, data, [options], callback)`|**Agrega contenido** al final de un archivo.|`fs.appendFile('log.txt', 'Nuevo registro\n', err => {});`|
|`fs.truncate(path, len, callback)`|**Corta** un archivo a la longitud dada.|`fs.truncate('archivo.txt', 0, err => {});`|

📁 **Directorios**

| Función                                                   | Descripción                                                    | Ejemplo                                                          |
| --------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- |
| `fs.mkdir(path, [options], callback)`                     | **Crea un directorio**.                                        | `fs.mkdir('carpeta', err => {});`                                |
| `fs.mkdirSync(path, { recursive: true })`                 | Versión síncrona, permite crear **carpetas anidadas**.         | `fs.mkdirSync('a/b/c', { recursive: true });`                    |
| `fs.readdir(path, [options], callback)`                   | **Lista los archivos** dentro de un directorio.                | `fs.readdir('.', (err, files) => console.log(files));`           |
| `fs.rmdir(path, callback)`                                | **Elimina un directorio vacío** (usado en versiones antiguas). | `fs.rmdir('carpeta', err => {});`                                |
| `fs.rm(path, { recursive: true, force: true }, callback)` | **Elimina archivos o directorios**.                            | `fs.rm('carpeta', { recursive: true, force: true }, err => {});` |


## FS con promesas

```js
const fs = require('node:fs/promises');

fs.readFile("./archivo.txt","utf-8")
.then(text => console.log(tex))
.catch(err => console.log(err))

```

