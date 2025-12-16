
https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/

Un Dockerfile es un documento basado en texto que se utiliza para crear una imagen de contenedor. Proporciona instrucciones al generador de imágenes sobre los comandos a ejecutar, los archivos a copiar, el comando de inicio y más.

A modo de ejemplo, el siguiente Dockerfile produciría una aplicación Python lista para ejecutar

```yml
FROM python:3.13
WORKDIR /usr/local/app

# Install the application dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy in the source code
COPY src ./src
EXPOSE 8080

# Setup an app user so the container doesn't run as the root user
RUN useradd app
USER app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
```

## Instrucciones comunes en un Dockerfile

Algunas de las instrucciones más comunes en un `Dockerfile` incluyen:

- **FROM `<image>`**  
  Especifica la imagen base sobre la cual se construirá la imagen.

- **WORKDIR `<path>`**  
  Define el directorio de trabajo dentro de la imagen donde se copiarán archivos y se ejecutarán los comandos.

- **COPY `<host-path>` `<image-path>`**  
  Copia archivos o directorios desde el host hacia la imagen del contenedor.

- **RUN `<command>`**  
  Ejecuta un comando durante el proceso de construcción de la imagen.

- **ENV `<name>` `<value>`**  
  Establece una variable de entorno que estará disponible en el contenedor en ejecución.

- **EXPOSE `<port-number>`**  
  Indica el puerto que la aplicación dentro del contenedor expone.

- **USER `<user-or-uid>`**  
  Define el usuario por defecto para las instrucciones que siguen y para el contenedor en ejecución.

- **CMD `["<command>", "<arg1>"]`**  
  Define el comando por defecto que se ejecutará cuando se inicie un contenedor a partir de esta imagen.
