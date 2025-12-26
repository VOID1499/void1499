## Módulo nativo os — Node.js

El módulo os permite obtener información del sistema operativo donde está corriendo Node.

``` js
import os from 'node:os';
// o CommonJS
const os = require('node:os');


console.log('Sistema operativo:', os.type());
console.log('Plataforma:', os.platform());
console.log('Versión:', os.release());
console.log('Arquitectura:', os.arch());
console.log('CPU:', os.cpus().length, 'núcleos');
console.log('Memoria libre:', (os.freemem() / 1024 / 1024).toFixed(2), 'MB');
console.log('Usuario actual:', os.userInfo().username);
console.log('Directorio Home:', os.homedir());

```

1️⃣ Para qué sirve realmente

## os se usa para:

- Daber en qué entorno corre tu app
- Diagnosticar problemas
- Ajustar comportamiento según recursos
- Debugging (especialmente en serverless)
- No es para “administrar” el SO, solo leer info.