# Módulo nativo `http` de Node.js

## 1️⃣ ¿Qué es `http` en Node?

El módulo **`http`** es un **módulo core (nativo)** de Node.js que permite:

- Crear **servidores HTTP**
- Realizar **peticiones HTTP como cliente**

Características clave:

- No requiere librerías externas
- Basado en **eventos**
- Basado en **streams**
- Funciona directamente sobre **TCP**

    const http = require('http'); // CommonJS
    // o
    import http from 'http';      // ESM

---

## 2️⃣ Crear un servidor HTTP

Ejemplo básico:

    import http from 'http';

    const server = http.createServer((req, res) => {
      res.end('Hola mundo');
    });

    server.listen(3000);

### Qué sucede internamente

1. `http.createServer()` crea un servidor TCP.
2. Node registra un listener para cada request.
3. Por cada request entrante:
   - `req` es un `IncomingMessage`
   - `res` es un `ServerResponse`

---

## 3️⃣ `req` – IncomingMessage

`req` es un **stream de lectura**:

    req instanceof stream.Readable // true

Esto permite leer el body por partes:

    req.on('data', chunk => {
      console.log(chunk.toString());
    });

    req.on('end', () => {
      console.log('Body completo');
    });

### Propiedades importantes

    req.method   // GET, POST, PUT...
    req.url      // /users?id=1
    req.headers  // headers HTTP
    req.socket   // socket TCP subyacente

El body **llega en chunks**, no completo de una sola vez.

---

## 4️⃣ `res` – ServerResponse

`res` es un **stream de escritura**:

    res instanceof stream.Writable // true

Ejemplo:

    res.write('Hola ');
    res.write('mundo');
    res.end();

### Headers y status

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK');

---

## 5️⃣ Streams y HTTP (concepto clave)

Node **no carga el contenido completo en memoria**, usa streams.

Ejemplo: guardar un archivo subido:

    req.pipe(fs.createWriteStream('archivo.bin'));

Ventajas:

- Menor uso de memoria
- No bloquea el event loop
- Ideal para archivos grandes

---

## 6️⃣ Flujo interno de una request

    Cliente
      ↓ TCP
    Socket
      ↓
    HTTP Parser (C++)
      ↓
    IncomingMessage (req)
      ↓
    Tu callback
      ↓
    ServerResponse (res)
      ↓
    Socket
      ↓
    Cliente

El parser HTTP está implementado en **C++**, Node solo expone la API en JavaScript.

---

## 7️⃣ Eventos en HTTP

### El servidor

    server.on('request', (req, res) => {});
    server.on('connection', socket => {});
    server.on('close', () => {});

### La request

    req.on('aborted', () => {
      console.log('El cliente canceló la request');
    });

---

## 8️⃣ Cliente HTTP (hacer requests)

    http.get('http://example.com', res => {
      res.on('data', chunk => {
        console.log(chunk.toString());
      });

      res.on('end', () => {
        console.log('Respuesta completa');
      });
    });

Aquí:

- `res` también es `IncomingMessage`
- Es un **Readable stream**

---

## 9️⃣ HTTP vs WebSocket

HTTP:
- Request / Response
- Stateless
- Una respuesta
- Usa chunks

WebSocket:
- Conexión persistente
- Stateful
- Comunicación continua
- Usa frames

Descargar un archivo:
- No son múltiples responses
- Es **una sola response con muchos chunks**

---


##  Relación con `process` y el Event Loop

- El servidor vive mientras el proceso esté activo
- Cada request entra al **event loop**
- Los streams usan **libuv** (epoll, kqueue, IOCP)

---

## Resumen conceptual

    http
     ├── TCP (net)
     ├── HTTP parser (C++)
     ├── Streams
     ├── EventEmitter
     └── Event Loop

- `req` → Readable stream
- `res` → Writable stream
- Todo funciona de forma **asíncrona y orientada a eventos**
