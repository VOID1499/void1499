```js

// Clase que extiende de HTMLElement

class MyCustomElement extends HTMLElement { 

	constructor(){
		super(); <---------- constructor de la clase padre HTMLElement
		
		let shadow = this.attachShadow({mode:'open'});
		this.divHeader = document.createElement('div');
		this.divHeader.innerText = 'Hola mundo!';
		shadow.appendChild(this.divHeader)
		
		
	}



	// se registra el custom element
	// el nombre debe tener almenos 2 partes separadas por un guion
	// ejemplo my-custom
	// esto con no interferir de etiquetas nativas de html
	window.customElement.define('app-custom-element',MyCustomElement);

}

```


# ✔️ `connectedCallback()`

Este método se ejecuta **automáticamente** cuando el elemento:

- aparece en el DOM
    
- es insertado dinámicamente
    
- o es movido a otra parte del DOM
    

Equivale a:

- `ngOnInit` en Angular
    
- `componentDidMount` en React
    
- `onMounted` en Vue 3
    

### ¿Para qué sirve?

✓ Renderizar el HTML interno  
✓ Agregar listeners de eventos  
✓ Realizar peticiones fetch  
✓ Configurar Shadow DOM  
✓ Iniciar timers o observers

```js
class MiCard extends HTMLElement {
  connectedCallback() {
    console.log('El componente se añadió al DOM');
    this.innerHTML = `<p>Hola desde mi componente</p>`;
  }
}

customElements.define("mi-card", MiCard);

```

# ✔️ `disconnectedCallback()`

Se ejecuta cuando el elemento es **eliminado del DOM**.

Equivale a:

- `ngOnDestroy` en Angular
    
- `componentWillUnmount` en React
    
- `onUnmounted` en Vue 3
    

### ¿Para qué sirve?

✓ Limpiar listeners (`removeEventListener`)  
✓ Detener timers (`clearInterval`)  
✓ Cancelar requests o subscriptions  
✓ Desconectar observers (MutationObserver, IntersectionObserver)  
✓ Evitar memory leaks

```js 
class MiCard extends HTMLElement {
  connectedCallback() {
    this.interval = setInterval(() => {
      console.log('corriendo...');
    }, 1000);
  }

  disconnectedCallback() {
    clearInterval(this.interval);
    console.log('El componente fue removido del DOM');
  }
}

customElements.define("mi-card", MiCard);

```


## ✔️ 1. Leer atributos dentro del componente

```js
connectedCallback() {
  const titulo = this.getAttribute("titulo");
  this.innerHTML = `<h1>${titulo}</h1>`;
}
```



## ✔️ 2. (Opcional pero común) Hacer que el componente **observe cambios** en esos atributos


### 1. Definir qué atributos observar:

```js
static get observedAttributes() {
  return ["titulo", "color"];
}
```

### 2. Implementar el método `attributeChangedCallback`:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log(`Atributo ${name} cambiado:`, newValue);
  this.render();
}
```

### 3. Llamar a una función `render()` que use esos atributos

```js
render() {
  const titulo = this.getAttribute("titulo");
  const color = this.getAttribute("color");

  this.innerHTML = `
    <div style="color:${color}">
      <h1>${titulo}</h1>
    </div>
  `;
}
```