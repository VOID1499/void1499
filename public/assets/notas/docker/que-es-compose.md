# Que es compose

Con Docker Compose, puedes definir todos tus contenedores y sus configuraciones en un solo archivo YAML. Si incluye este archivo en su repositorio de código, cualquiera que clone su repositorio puede comenzar a funcionar con un solo comando.

Es importante entender que Compose es una herramienta declarativa: simplemente la defines y listo. No siempre es necesario recrear todo desde cero. Si haces un cambio, corre docker compose up nuevamente y Compose conciliará los cambios en su archivo y los aplicará de forma inteligente.


# Dockerfile versus archivo Compose

Un Dockerfile proporciona instrucciones para crear una imagen de contenedor, mientras que un archivo Compose define sus contenedores en ejecución. Muy a menudo, un archivo Compose hace referencia a un Dockerfile para crear una imagen que se utilizará para un servicio en particular.

## Resumen

Docker Compose es una herramienta que permite definir, configurar y ejecutar múltiples contenedores Docker usando un solo archivo llamado docker-compose.yml


## ⚙️ ¿Qué hace Docker Compose?

Define tus servicios (contenedores) en un archivo YAML.

Crea las redes y volúmenes automáticamente.

Levanta, detiene y reconstruye todos los contenedores con un solo comando.