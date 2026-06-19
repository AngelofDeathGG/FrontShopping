# Shopping Frontend

Frontend de tienda online desarrollado con **Vue 3**, **Quasar Framework 2** y **Pinia**.

## Funcionalidades

- **Product Page** con filtros por nombre, categoría y precio
- Componentes: `ProductFilter`, `ProductList`, `ProductItem`
- Consumo de API REST con axios (proxy a `localhost:5072`)
- Autenticación JWT vía localStorage
- Lazy loading de páginas con vue-router

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run lint     # Corregir formato y lint
Estructura
src/
├── components/products/
│   ├── ProductFilter.vue
│   ├── ProductItem.vue
│   └── ProductList.vue
├── pages/
│   └── ProductPage.vue
├── router/
│   └── routes.js
├── services/
│   ├── api.js
│   ├── categoryService.js
│   └── productService.js
└── layouts/
    └── MainLayout.vue
