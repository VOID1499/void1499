Las rutas en Express se resuelven internamente mediante **expresiones regulares**, por lo que es posible definir rutas utilizando **RegExp directamente**.

Sin embargo, la forma más simple y recomendada es usar la **sintaxis declarativa** que provee la librería **`path-to-regexp`**, la cual está integrada en Express. Esta sintaxis permite definir rutas de forma más legible y mantenible.

Al utilizar esta forma, Express se encarga internamente de:

- Convertir la ruta en una expresión regular
- Realizar el *matching* contra la URL solicitada
- Extraer los parámetros dinámicos de la ruta
- Añadir al objeto `req` propiedades como:
  - `req.params` para los parámetros de ruta
  - `req.query` para los parámetros de consulta

Esto facilita la extracción y el manejo de los datos enviados por el cliente dentro de los *handlers* de las rutas.


## `Generar una ruta`

```js
import express from "express";
const app = expres();

//ruta GET que responde a la url /users
app.get("/users", (req,res)=>{
    res.send("Hola mundo")
})
```

## `Añadir parametros a rutas`

Para añadir un parámetro de ruta se usa `:` seguido del nombre del parámetro.

```js
import express from "express";
const app = express();

// ruta GET que responde a /users/:id
app.get("/users/:id", (req, res) => {
  res.send("Hola mundo");
});
```

## `Acceder a los params y queryparams`

Para acceder a los parametros de ruta se usar el `req.params` y `req.query` objeto que contendra todos los parametos definidos en la ruta.


```js
// ruta GET que responde a /users/:id
app.get("/users/:id", (req, res) => {
  
    const { query, params } = req;
  
});
```
