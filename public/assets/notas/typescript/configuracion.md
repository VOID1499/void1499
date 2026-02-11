# Inciar un proyecto con typescript


**1- Instalar dependencias de  typescript en dependencias de  desarrollo para el proyecto**

Se instalara el archivo binario de typescript que nos servira para transpilar el codigo a javascript

```bash
npm i typescript -D
```

**2- Ejecutar el siguiente comando para generar un archivo similar al siguiente que contendra la configuracion base de typescript**

```bash
npx tsc --init
```

```javascript
//archivo tsconfig.json
// algunas configuraciones basicas

{
  "compilerOptions": {
    "rootDir": "src", // Define la raíz lógica del código fuente
    "outDir": "dist", // Dónde se genera el JS
    "module": "nodenext",
    "target": "es2022",
    "types": ["node"],
    "strict": true,
    "verbatimModuleSyntax": true,
  },
  "include": ["src/**/*.ts"], //Define qué archivos se compilan
  "exclude": ["node_modules", "dist"] // Archivos que se ignora al compilar
}
```

