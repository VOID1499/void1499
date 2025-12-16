
## ENTRYPOINT https://docs.docker.com/reference/dockerfile/#entrypoint

El ENTRYPOINT le permite configurar un contenedor que se ejecutará como ejecutable.

```txt
ENTRYPOINT ["executable", "param1", "param2"]
```



## CMD https://docs.docker.com/reference/dockerfile/#cmd

El CMD La instrucción establece el comando que se ejecutará al ejecutar un contenedor de una imagen.
Sólo puede haber uno CMD instrucción en un Dockerfile. Si enumera más de uno CMD, sólo el último entra en vigor.

El propósito de a CMD es proporcionar valores predeterminados para un contenedor en ejecución. Estos Los valores predeterminados pueden incluir un ejecutable o pueden omitir el ejecutable en el que caso en el que debes especificar un ENTRYPOINT instrucción también.