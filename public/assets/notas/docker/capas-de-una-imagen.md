

https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/

Capas de una imagen Docker

Una imagen Docker está compuesta por capas (layers) apiladas una sobre otra.

Cada capa representa:un cambio en el sistema de archivos generado por una instrucción del Dockerfile

### Ejemplo Dockerfile
```yaml
FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "index.js"]
```

### Esto genera capas como:

node:20 (imagen base)

crear /app

copiar package.json

instalar dependencias

copiar el resto del código

metadata del comando