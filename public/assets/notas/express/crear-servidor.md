
## `Instalar dependencia de express`

```txt
npm i express 
```


## `Crear servidor web  basico`

```js
//Importacion con ES Modules
import express from "express";

const app = express();
const PORT = process.env.PORT || 1234;

// middleware para parsear JSON
app.use(express.json());

// ruta GET
app.get("/", (req, res) => {
  res.send("<h1>Hola mundo</h1>");
});

// ruta POST
app.post("/create", (req, res) => {
  res.json(req.body);
});

// levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
```