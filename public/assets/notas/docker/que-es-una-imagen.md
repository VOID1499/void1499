# Que es una imagen

 Una imagen de contenedor es un paquete estandarizado que incluye todos los archivos, binarios, bibliotecas y configuraciones para ejecutar un contenedor.


# Hay dos principios importantes de las imágenes:

1 - Las imágenes son inmutables. Una vez creada una imagen, no se puede modificar. Sólo puedes crear una nueva imagen o agregar cambios encima de ella.

2 - Las imágenes de contenedores se componen de capas. Cada capa representa un conjunto de cambios en el sistema de archivos que agregan, eliminan o modifican archivos.


Estos dos principios le permiten ampliar o agregar imágenes existentes. Por ejemplo, si está creando una aplicación Python, puede comenzar desde el Imagen de Python y agrega capas adicionales para instalar las dependencias de tu aplicación y agregar tu código. Esto te permite concentrarte en tu aplicación, en lugar de en Python en sí.