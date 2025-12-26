Un middleware personalizado en Express es simplemente una función que se ejecuta en el pipeline request → response y que decide si la request continúa o termina ahí.


**Es una función con esta firma exacta:**

```js
(req, res, next) => { ... }
```


**O para errores:**
```js
(err, req, res, next) => { ... }
```

## Qué puede hacer un middleware

**Un middleware puede:**

- Leer req
- Modificar req
- Leer res
- Modificar res
- Terminar la respuesta (res.send, res.end)
- Llamar a next() para seguir

`Si no se llama a next() ni responde, la request queda colgada.`


## Ejemplos


### Middleware con configuración factory
```js
export const requireRole => (role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.sendStatus(403);
    }
    next();
  };
}


app.get('/admin', auth, requireRole('admin'), handler);

```


### Logger

```js
export const logger => (req, res, next) {
  console.log(req.method, req.url);
  next();
}
```

