https://docs.docker.com/reference/dockerfile/#shell-and-exec-form

**El RUN, CMD, y ENTRYPOINT Todas las instrucciones tienen dos formas posibles:**

## Exec form
INSTRUCTION ["executable","param1","param2"](formulario ejecutivo)


## Shell
INSTRUCTION command param1 param2(forma de concha)


# Diferencia esencial

**Shell form ejecuta tu comando a través de un shell**

**Exec form ejecuta tu comando directamente como proceso PID 1**


![oauth](assets/images/shell-y-exec-form.png)
