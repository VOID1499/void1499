Un componente Angular tiene varios ciclos de vida (lifecycle hooks) que son métodos especiales que Angular ejecuta automáticamente en distintos momentos: cuando se crea, cuando cambia, cuando se actualiza la vista y cuando se destruye.

| Hook                    | Cuándo ocurre                                                   | Para qué sirve                                           |
| ----------------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| `ngOnChanges`           | Antes de iniciar, y cada vez que cambia un **@Input**           | Detectar cambios en valores que vienen de un padre.      |
| `ngOnInit`              | Se ejecuta **una sola vez** al crear el componente              | Inicializaciones: llamadas a servicios, preparar datos.  |
| `ngDoCheck`             | En cada ciclo de detección de cambios                           | Detectar cambios personalizados no captados por Angular. |
| `ngAfterContentInit`    | Al insertar contenido `<ng-content>`                            | Inicializa contenido proyectado.                         |
| `ngAfterContentChecked` | Cada vez que el contenido proyectado es revisado                | Reaccionar a cambios del contenido proyectado.           |
| `ngAfterViewInit`       | Cuando la **plantilla HTML del componente ya existe** en el DOM | Acceder a elementos del DOM o a `@ViewChild`.            |
| `ngAfterViewChecked`    | Cuando Angular revisa toda la vista del componente              | Reaccionar a revisiones de la vista.                     |
| `ngOnDestroy`           | Justo antes de que el componente sea destruido                  | Limpiar: unsubscribe, listeners, timers, etc.            |


## Orden de ejecucion de los hooks principales

* ngOnChanges() (si hay @Input)
* ngOnInit()
* ngDoCheck()
* ngAfterContentInit()
* ngAfterContentChecked()
* ngAfterViewInit()
* ngAfterViewChecked()