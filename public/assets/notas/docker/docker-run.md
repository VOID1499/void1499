Docker run es el comando principal de Docker para crear y ejecutar un contenedor a partir de una imagen.


## El siguiente comando ejecuta un ubuntu contenedor, se conecta interactivamente a su sesión de línea de comandos local y se ejecuta /bin/bash.

```txt
docker run -i -t ubuntu /bin/bash
```


- 1- Si no tienes el ubuntu imagen localmente, Docker la extrae de su registro configurado, como si lo hubieras ejecutado docker pull ubuntu manualmente.

- 2- Docker crea un nuevo contenedor, como si hubieras ejecutado un docker container create comando manualmente.

- 3- Docker asigna un sistema de archivos de lectura y escritura al contenedor, como su sistema final capa. Esto permite que un contenedor en ejecución cree o modifique archivos y directorios en su sistema de archivos local.

- 4- Docker crea una interfaz de red para conectar el contenedor al valor predeterminado red, ya que no especificó ninguna opción de red. Esto incluye asignar una dirección IP al contenedor. De forma predeterminada, los contenedores pueden hacerlo conéctese a redes externas utilizando la conexión de red de la máquina host.

- 5- Docker inicia el contenedor y lo ejecuta /bin/bash. Porque el contenedor se ejecuta de forma interactiva y está conectado a su terminal (debido a -i y -t banderas), puede proporcionar entrada usando su teclado mientras Docker registra la salida en tu terminal.

- 6- Cuando corres exit para terminar el /bin/bash comando, el contenedor se detiene pero no se elimina. Puedes iniciarlo nuevamente o eliminarlo.