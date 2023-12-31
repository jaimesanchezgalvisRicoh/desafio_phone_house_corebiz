# Desafio Phone House Corebiz

## Descripción general del proyecto

El proyecto de la tienda es una aplicación web diseñada para proporcionar a los clientes una experiencia de compra intuitiva y agradable. Permite a los usuarios explorar una amplia variedad de productos y agregarlos fácilmente al carrito de compras.

La aplicación también ofrece la funcionalidad de ver un resumen de los productos en el carrito, lo que permite a los usuarios revisar y modificar su selección antes de finalizar la compra. Los productos agregados al carrito se almacenan en el localStorage, lo que garantiza que estén disponibles incluso después de reiniciar el navegador.

## Descripción del flujo de la aplicación:

Los clientes pueden navegar por el carousel de productos y agregarlos al carrito de compras. El carrito de compras proporciona una vista resumida de los productos seleccionados y permite al cliente agregar mas items o borrarlos del carrito.

Tambien el cliente puede navegar en el menu de navegacion que se activa en la version mobil el cual esta disponible para posteriormente segir agregando categorias y funcionalidades a dicho menu.

## Diseño responsive:

La aplicación está diseñada con un diseño responsive que se adapta a diferentes dispositivos y tamaños de pantalla. Esto garantiza una experiencia de usuario óptima tanto en computadoras de escritorio como en dispositivos móviles.

## Framework de desarrollo:

El proyecto está construido utilizando el framework React, que proporciona una estructura robusta y flexible para el desarrollo de aplicaciones de una sola página. React permite una gestión eficiente del estado de la aplicación y facilita la creación de componentes reutilizables.

## Bundler de desarrollo:

La aplicación utiliza Vite como bundler de desarrollo, que ofrece una configuración rápida y eficiente para el desarrollo en tiempo real. Vite permite una experiencia de desarrollo fluida y optimizada, con tiempos de compilación rápidos y una recarga instantánea de módulos.

## Biblioteca de componentes:

Para agilizar el desarrollo y garantizar una interfaz de usuario consistente, se utiliza la biblioteca de componentes NextUI. NextUI proporciona una amplia gama de componentes preestilizados y personalizables que cumplen con las mejores prácticas de diseño.

## Gestión del estado:

Para manejar el estado de la aplicación, se utiliza el contexto de React junto con la biblioteca de administración de estado CartContext. Esto permite un flujo de datos eficiente y una comunicación fluida entre los diferentes componentes de la aplicación.

## Integración con API:

La aplicación se integra con una API externa para obtener y enviar los datos del formuario del newsletter. Para ello se utilizan las bibliotecas react-query y axios para realizar las solicitudes HTTP y gestionar la caché de los datos.

El proyecto de la tienda combina una interfaz de usuario intuitiva con un rendimiento óptimo y una gestión eficiente del estado para brindar una experiencia de compra en línea excepcional para los

## Uso de la aplicación

Para utilizar la aplicación, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local:
   git clone https://github.com/jaimesanchezgalvisRicoh/desafio_phone_house_corebiz
2. Navega al directorio del proyecto:
   cd desafio_phone_house_corebiz
3. Instala las dependencias del proyecto utilizando Yarn: yarn install
4. Ejecuta la aplicación en modo de desarrollo:
   yarn dev

La aplicación también está desplegada en el servicio Netlify y se puede acceder a ella en la siguiente dirección: https://desafiophonehousecorebiz.netlify.app/

### ¡Disfruta usando la aplicación! :)

---

## Componentes Principales

A continuación se enumeran los componentes más importantes de la aplicación, junto con su descripción, propiedades y un ejemplo de uso.

# NavbarComponent

El componente `NavbarComponent` muestra una barra de navegación con un logotipo, un componente de búsqueda y un carrito de compras.

## Uso

```jsx
import { NavbarComponent } from "./NavbarComponent";

const App = () => {
  return <NavbarComponent />;
};
```

## Props

- El componente NavbarComponent no acepta props adicionales.

Ejemplo

```jsx
import { NavbarComponent } from "./NavbarComponent";

const App = () => {
  return <NavbarComponent />;
};
```

---

# CartComponent

El componente CartComponent muestra un ícono de carrito de compras junto con el número total de elementos en el carrito. Al hacer clic en el ícono, se abre un modal que muestra el resumen de la compra y permite al usuario agregar o quitar mas unidades de la misma referencia o borrar cada producto por separado.

## Uso

```jsx
import { CartComponent } from "./components/CartComponent";

const App = () => {
  return (
    <div>
      {/* Otros componentes */}
      <CartComponent />
    </div>
  );
};
```

## Props

- El componente no acepta ninguna prop

---

# Slider

El componente Slider muestra una galería de imágenes en un carrusel. Utiliza la librería react-image-gallery para implementar esta funcionalidad.

Uso

```jsx
import { Slider } from "./components/Slider";

const App = () => {
  return (
    <div>
      {/* Otros componentes */}
      <Slider />
    </div>
  );
};
```

## Props

El componente no acepta ninguna prop.

---

## ProductList

El componente `ProductList` muestra una lista de productos en forma de carrusel utilizando la librería `react-slick`.

### Uso

```jsx
import { ProductList } from "./components/ProductList";

const products = [...]; // Array de productos

const App = () => {
  return (
    <div>
      {/* Otros componentes */}
      <ProductList products={products} />
    </div>
  );
}
```

## Props

| Prop     | Tipo  | Descripción                      |
| -------- | ----- | -------------------------------- |
| products | array | La lista de productos a mostrar. |

---

# ProductCard

El componente `ProductCard` muestra una tarjeta de producto con su imagen, nombre, calificación, precio y botón de compra.

## Uso

```jsx
import { ProductCard } from "./ProductCard";

const product = {
  imageUrl: "...",
  productName: "...",
  stars: 4,
  price: 10,
  listPrice: 15,
  productId: 123,
};

const App = () => {
  return (
    <div>
      {/* Otros componentes */}
      <ProductCard product={product} />
    </div>
  );
};
```

## Props

| Prop                | Tipo   | Descripción                                      |
| ------------------- | ------ | ------------------------------------------------ |
| product             | objeto | Objeto que contiene la información del producto. |
| product.imageUrl    | string | URL de la imagen del producto.                   |
| product.productName | string | Nombre del producto.                             |
| product.stars       | number | Calificación del producto (de 1 a 5).            |
| product.price       | number | Precio del producto.                             |
| product.listPrice   | number | Precio original del producto (opcional).         |
| product.productId   | number | ID del producto.                                 |

---

# NewsletterForm

El componente `NewsletterForm` muestra un formulario de suscripción a un boletín de noticias. Los usuarios pueden ingresar su nombre y correo electrónico para suscribirse.

El formulario realiza verificaciones para evitar que se envíen campos vacíos o el correo en un formato incorrecto. Al finalizar el envío, el usuario recibirá una notificación que indicará si la petición fue recibida correctamente. En caso contrario, también se notificará al usuario.

## Uso

```jsx
import { NewsletterForm } from "./components/NewsletterForm";

const App = () => {
  return (
    <div>
      {/* Otros componentes */}
      <NewsletterForm />
    </div>
  );
};
```

---

# Footer

El componente `Footer` muestra el pie de página de la aplicación. Contiene información de ubicación, opciones de contacto y logotipos de las marcas Corebiz y VTEX.

## Uso

```jsx
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* Otros componentes */}
      <Footer />
    </div>
  );
};
```

# Props

El componente no acepta props adicionales.

---

# Peticiones a la API

Para realizar las peticiones a la API, se utilizan las funciones useQuery y useMutation de la biblioteca react-query. Estas funciones proporcionan una forma sencilla y eficiente de interactuar con el backend y gestionar los datos en la aplicación.

Ejemplo de uso de useQuery

```jsx
import { useQuery } from "react-query";
import { getProducts } from "../api/products";

const ProductList = () => {
  const { data, isLoading, isError } = useQuery("products", getProducts);

  if (isLoading) {
    // Lógica para mostrar un indicador de carga
  }

  if (isError) {
    // Lógica para mostrar un mensaje de error
  }

  // Renderizado de la lista de productos utilizando los datos obtenidos de la API
  return (
    <div>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

En este ejemplo, useQuery se utiliza para obtener los datos de los productos desde la API utilizando la función getProducts. La función useQuery gestiona automáticamente el estado de la carga de los datos y maneja posibles errores. Los datos obtenidos se pueden acceder a través de la propiedad data.

## Ejemplo de uso de useMutation

```jsx
import { useMutation } from "react-query";
import { createProduct } from "../api/products";

const ProductForm = () => {
  const mutation = useMutation(createProduct);

  const handleSubmit = async (formData) => {
    try {
      await mutation.mutateAsync(formData);
      // Lógica para manejar el éxito de la creación del producto
    } catch (error) {
      // Lógica para manejar el error de la creación del producto
    }
  };

  // Renderizado del formulario y lógica de manejo del estado
  // ...
};
```

En este ejemplo, useMutation se utiliza para realizar una petición de creación de un producto utilizando la función createProduct. La función useMutation maneja automáticamente el estado de la mutación y proporciona funciones útiles como mutateAsync para realizar la llamada a la API. Se pueden manejar los casos de éxito y error dentro del bloque try-catch.

---

# Manejo del estado de la aplicación con useContext

El manejo del estado de la aplicación se realiza utilizando el hook useContext y un contexto personalizado. El contexto se define utilizando la función createContext y se provee a los componentes que necesitan acceder al estado compartido.

## Ejemplo de uso de useContext

```jsx
import React, { useContext } from "react";
import CartContext from "./CartContext";

const MyComponent = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    addToCartQuantity,
    removeFromCartQuantity,
    getProductQuantity,
  } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleIncreaseQuantity = (itemId) => {
    addToCartQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    removeFromCartQuantity(itemId);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.productId}>
            {item.productName} - Cantidad: {item.quantity}
            <button onClick={() => handleIncreaseQuantity(item.productId)}>
              +
            </button>
            <button onClick={() => handleDecreaseQuantity(item.productId)}>
              -
            </button>
            <button onClick={() => handleRemoveFromCart(item.productId)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          handleAddToCart({
            productId: 123,
            productName: "Product 1",
            quantity: 1,
          })
        }
      >
        Agregar al carrito
      </button>
    </div>
  );
};
```

El componente `CartContext` proporciona un contexto para manejar el estado del carrito de compras en la aplicación. Utiliza el hook `useState` para almacenar los elementos del carrito y los métodos `addToCart`, `removeFromCart`, `addToCartQuantity`, `removeFromCartQuantity` y `getProductQuantity` para agregar, eliminar y modificar la cantidad de los productos en el carrito. Estos métodos se utilizan para interactuar con el contexto y actualizar el estado del carrito en la aplicación.

El contexto se proporciona mediante el componente `CartProvider`, que envuelve la aplicación y permite el acceso al contexto y sus propiedades en cualquier componente descendiente que los necesite.

Para utilizar el contexto en un componente, se importa `CartContext` y se utiliza el hook `useContext` para acceder a las propiedades y métodos del contexto. Esto permite que los componentes interactúen con el estado del carrito y realicen acciones como agregar productos, eliminar productos y ajustar la cantidad de productos en el carrito.

El uso de `CartContext` y `CartProvider` proporciona una forma conveniente y centralizada de administrar el estado del carrito en la aplicación, lo que facilita la implementación de funcionalidades relacionadas con el carrito de compras.

Espero que este resumen resuma de manera concisa y clara el uso de `CartContext` en la aplicación.

### Desarrollado e implementado por:

Nombre: _Jaime Sanchez Galvis_ 
Correo electrónico: _jaime.sanchez.galvis@jaimesanchezgalvisRicoh_
