# 🍕 Pizzería Don Remolo - Frontend

## 📌 Descripción del Proyecto
Este es el frontend de **Pizzería Don Remolo**, una aplicación web que permite a los usuarios visualizar un menú de comidas, personalizar sus pedidos, agregarlos al carrito y enviarlos por WhatsApp al local sin necesidad de registrarse.

El objetivo principal es ofrecer una experiencia rápida e intuitiva para que los clientes puedan realizar pedidos fácilmente.

---

## 🚀 Tecnologías Utilizadas
- **React + Vite** - Para el desarrollo rápido del frontend.
- **TypeScript** - Para un código más robusto y seguro.
- **Material UI (MUI)** - Para componentes estilizados y responsivos.
- **Zustand** - Para la gestión del estado global del carrito de compras.
- **React Router** - Para la navegación entre páginas.

---

## 📂 Estructura del Proyecto

```
📦 pizzeria-frontend
│── 📂 src
│   ├── 📂 api/               # Servicios para llamadas a la API (futuro)
│   ├── 📂 assets/            # Recursos estáticos
│   ├── 📂 components/        # Componentes reutilizables (Navbar, Footer, ProductCard...)
│   ├── 📂 layouts/           # Layouts de la aplicación
│   ├── 📂 pages/             # Páginas principales (Menú, Carrito, Confirmación de Pedido)
│   ├── 📂 store/             # Gestión de estado con Zustand (cartStore.ts)
│   ├── 📂 styles/            # Estilos globales
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Punto de entrada de la app
│── 📜 package.json           # Dependencias del proyecto
│── 📜 tsconfig.json          # Configuración de TypeScript
│── 📜 vite.config.ts         # Configuración de Vite
│── 📜 README.md              # Documentación del proyecto
```

---

## 🛠 Configuración Inicial
### 1️⃣ Clonar el repositorio
```sh
 git clone https://github.com/usuario/pizzeria-frontend.git
 cd pizzeria-frontend
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Ejecutar el proyecto en modo desarrollo
```sh
npm run dev
```

### 4️⃣ Abrir en el navegador
Por defecto, la aplicación estará disponible en:
```
http://localhost:5173
```

---

## 📌 Funcionalidades
✅ **Menú de Comidas** - Listado de productos categorizados (Pizzas, Empanadas, Bebidas, Postres).
✅ **Personalización de Ingredientes** - Los usuarios pueden agregar o quitar ingredientes antes de añadir el producto al carrito.
✅ **Carrito de Compras** - Vista del pedido con opción de eliminar productos o vaciar el carrito.
✅ **Confirmación del Pedido** - Antes de enviarlo, se muestra un resumen detallado.
✅ **Envío por WhatsApp** - El pedido se envía directamente al número del local con un mensaje predefinido.

---

## 📜 Licencia
Este proyecto es de código abierto y puede ser utilizado libremente.

📌 **¿Tienes preguntas o sugerencias?** ¡Contribuye al proyecto o abre un issue! 🚀

