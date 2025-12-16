Un contenedor de Docker es una instancia en ejecución de una imagen, aislada del resto del sistema, que incluye todo lo necesario para ejecutar una aplicación.

## 🐳 ¿Qué es un contenedor de Docker?

Un contenedor es:

- Un proceso que corre en tu sistema,
- Aislado del resto del sistema mediante tecnologías del kernel (namespaces, cgroups),
- Basado en una imagen (plantilla inmutable),
- Con su propio sistema de archivos, variables de entorno, red, y procesos,
- Y que se puede crear, destruir, detener, copiar o mover de forma muy rápida.



## ✔️ Regla general

Un contenedor:
- Se mantiene vivo mientras su proceso principal (PID 1) esté ejecutándose.
- Se detiene cuando ese proceso termina.