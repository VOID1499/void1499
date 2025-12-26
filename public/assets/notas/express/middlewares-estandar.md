
## ```express.urlencoded()```
Parsea formularios HTML (application/x-www-form-urlencoded).
```js
app.use(express.urlencoded({ extended: true }));
```

## `express.static()`
Sirve archivos estáticos (HTML, CSS, JS, imágenes, etc).

Estos archivos estaticos seran buscados por el file system en el directorio indicado y enviados al cliente.

```js
app.use(express.static('public'));
```


## `express.raw()`
Parsea el body como un Buffer.

Por defecto todas las peticiones que incluyan la cabecera `application/actet-strean` seran transformadas a un buffer crudo en el body.
```js
app.use(express.raw({type: 'application/octet-stream'}));
```

## `express.text()`
Parsea el body como texto plano.
```js
app.use(express.text());
```



