<div align="center">

# 🚀 VerlaCol Landing Page

### Proyecto web moderno con Arquitectura Hexagonal

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.16-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Demo](https://github.com/Ale-Bar989/VerlaCol-Landing-Page) • [Reportar Bug](https://github.com/Ale-Bar989/VerlaCol-Landing-Page/issues) • [Solicitar Feature](https://github.com/Ale-Bar989/VerlaCol-Landing-Page/issues)

</div>

---

## 📑 Tabla de Contenidos

- [Stack Tecnológico](#-stack-tecnológico)
- [Características](#-características)
- [Inicio Rápido](#-inicio-rápido)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Principios de Arquitectura](#-principios-de-arquitectura)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Equipo](#-equipo)

---

## 📋 Stack Tecnológico

<table>
<tr>
<td width="50%">

### Frontend
- ⚛️ **React 19.1.1** - UI Library moderna
- 🔷 **TypeScript 5.9.3** - Type safety
- 🎨 **TailwindCSS v4** - Utility-first CSS
- 🧭 **React Router v7** - Navegación client-side
- 🎯 **Lucide React** - Iconos modernos
- ⚡ **Vite 7** - Build tool ultrarrápido

</td>
<td width="50%">

### Desarrollo
- 🔧 **ESLint** - Code linting
- 📝 **TypeScript Strict** - Type checking
- 🏗️ **Arquitectura Hexagonal** - Clean code
- 🧪 **Testing Ready** - Estructura preparada
- 📦 **Lazy Loading** - Code splitting
- ⚡ **React.memo** - Optimización

</td>
</tr>
</table>

## ✨ Características

- 🎯 **Arquitectura Hexagonal** - Separación clara de capas
- 📦 **Lazy Loading** - Code splitting automático
- ⚡ **Optimización** - React.memo, useCallback, useMemo
- 🎨 **Componentes Reutilizables** - DRY principles
- 🔒 **Type Safety** - TypeScript estricto
- 📱 **Responsive Design** - Mobile-first
- 🧪 **Testing Ready** - Estructura preparada para tests

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js >= 20.19.0 o >= 22.12.0
- npm >= 10.0.0

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/verlapage.git
cd verlapage

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en [http://localhost:5173](http://localhost:5173)

## 📜 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Ejecutar ESLint
npm run type-check   # Verificar tipos TypeScript
npm run all          # Ejecutar type-check + lint + build
```

## 📁 Estructura del Proyecto

<details open>
<summary><b>🏗️ Arquitectura Hexagonal</b></summary>

```
verlapage/
├── 📂 src/
│   │
│   ├── 🎯 application/              # CAPA DE APLICACIÓN
│   │   ├── hooks/                  # Custom React hooks compartidos
│   │   │                           # Hooks reutilizables en toda la app
│   │   │                           # Ej: useAuth, useFetch, useLocalStorage
│   │   │
│   │   └── services/               # Servicios de lógica de negocio
│   │                               # Casos de uso y orquestación
│   │                               # Ej: AuthService, UserService
│   │
│   ├── 🏛️ domain/                   # CAPA DE DOMINIO
│   │   ├── entities/               # Entidades del negocio
│   │   │                           # Modelos de datos principales
│   │   │                           # Ej: User, Product, Order
│   │   │
│   │   └── interfaces/             # Interfaces y contratos
│   │                               # Definición de tipos del dominio
│   │                               # Ej: IRepository, IAuthService
│   │
│   ├── 🔧 infrastructure/           # CAPA DE INFRAESTRUCTURA
│   │   ├── api/                    # Cliente HTTP y endpoints
│   │   │                           # Configuración de Axios/Fetch
│   │   │                           # Interceptors y manejo de errores
│   │   │
│   │   ├── config/                 # Configuración de la app
│   │   │                           # Variables de entorno
│   │   │                           # Constantes de configuración
│   │   │
│   │   └── utils/                  # Utilidades de infraestructura
│   │                               # Helpers, formatters, validators
│   │                               # Ej: dateUtils, stringUtils
│   │
│   ├── 🎨 ui/                       # CAPA DE INTERFAZ DE USUARIO
│   │   ├── components/             # Componentes reutilizables
│   │   │   └── common/             # Componentes compartidos
│   │   │       ├── BackButton/     # Botón de navegación
│   │   │       │   ├── BackButton.tsx
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── Card/           # Tarjeta contenedora
│   │   │       │   ├── Card.tsx
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── IconBadge/      # Badge con icono
│   │   │       │   ├── IconBadge.tsx
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── LoadingFallback/ # Indicador de carga
│   │   │       │   ├── LoadingFallback.tsx
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── PageLayout/     # Layout de página
│   │   │       │   ├── PageLayout.tsx
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── types/          # Tipos de componentes
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── styles/         # Estilos constantes
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       └── index.ts        # Barrel export
│   │   │
│   │   └── pages/                  # Páginas de la aplicación
│   │       ├── home/               # Página principal
│   │       │   ├── Home.tsx
│   │       │   └── index.ts
│   │       │
│   │       ├── about/              # Página sobre nosotros
│   │       │   ├── About.tsx
│   │       │   └── index.ts
│   │       │
│   │       └── contact/            # Página de contacto
│   │           ├── Contact.tsx      # Componente principal
│   │           ├── ContactForm.tsx  # Formulario
│   │           ├── ContactInfo.tsx  # Info de contacto
│   │           ├── types.ts         # Tipos del módulo
│   │           └── index.ts
│   │
│   ├── 🧭 router/                   # CONFIGURACIÓN DE RUTAS
│   │   ├── index.tsx               # Router con lazy loading
│   │   │                           # Configuración de React Router
│   │   │                           # Suspense boundaries
│   │   │
│   │   └── routes.config.ts        # Constantes de rutas
│   │                               # Paths centralizados
│   │                               # Type-safe routing
│   │
│   ├── 🔗 shared/                   # RECURSOS COMPARTIDOS
│   │   ├── assets/                 # Assets estáticos
│   │   │   └── react.svg          # Imágenes, iconos, fuentes
│   │   │
│   │   ├── constants/              # Constantes globales
│   │   │                           # Valores reutilizables
│   │   │                           # Ej: API_URL, COLORS
│   │   │
│   │   ├── styles/                 # Estilos globales
│   │   │   └── index.css          # TailwindCSS imports
│   │   │                           # Estilos base
│   │   │
│   │   └── types/                  # Tipos TypeScript
│   │                               # Interfaces globales
│   │                               # Type utilities
│   │
│   └── main.tsx                    # Punto de entrada
│                                   # Render de la aplicación
│
├── 📂 public/                       # Assets públicos
│   └── vite.svg                    # Servidos directamente
│
├── 📄 index.html                    # HTML template
├── 📄 package.json                  # Dependencias
├── 📄 tsconfig.json                 # Config TypeScript
├── 📄 vite.config.ts                # Config Vite
├── 📄 postcss.config.js             # Config PostCSS
├── 📄 eslint.config.js              # Config ESLint
├── 📄 .gitignore                    # Git ignore rules
├── 📄 README.md                     # Este archivo
└── 📄 PROJECT_STRUCTURE.md          # Documentación detallada
```

</details>

<details>
<summary><b>📚 Descripción de Capas</b></summary>

### 🎯 Application Layer (Capa de Aplicación)
**Propósito**: Orquesta la lógica de negocio y coordina las interacciones entre capas.

- **hooks/**: Custom hooks de React que encapsulan lógica reutilizable
- **services/**: Servicios que implementan casos de uso del negocio

**Ejemplo**: Un `AuthService` que coordina login, logout y gestión de sesiones.

---

### 🏛️ Domain Layer (Capa de Dominio)
**Propósito**: Define las reglas de negocio y entidades principales.

- **entities/**: Modelos de datos con lógica de negocio
- **interfaces/**: Contratos e interfaces que definen comportamientos

**Ejemplo**: Entidad `User` con validaciones y reglas de negocio.

---

### 🔧 Infrastructure Layer (Capa de Infraestructura)
**Propósito**: Implementaciones de detalles técnicos externos.

- **api/**: Cliente HTTP, interceptors, manejo de errores
- **config/**: Variables de entorno y configuración
- **utils/**: Herramientas técnicas (formatters, parsers, etc.)

**Ejemplo**: Cliente Axios configurado con interceptors de autenticación.

---

### 🎨 UI Layer (Capa de Interfaz)
**Propósito**: Componentes visuales y presentación.

- **components/common/**: Componentes reutilizables (botones, cards, etc.)
- **pages/**: Páginas completas de la aplicación

**Características**:
- ✅ Componentes en carpetas individuales
- ✅ Separación de tipos y estilos
- ✅ Barrel exports para imports limpios
- ✅ Optimización con React.memo

---

### 🧭 Router Layer
**Propósito**: Gestión de navegación y rutas.

- **Lazy Loading**: Carga componentes bajo demanda
- **Type Safety**: Rutas tipadas con TypeScript
- **Suspense**: Manejo de estados de carga

---

### 🔗 Shared Layer
**Propósito**: Recursos compartidos entre todas las capas.

- **assets/**: Recursos estáticos
- **constants/**: Valores constantes
- **styles/**: Estilos globales
- **types/**: Tipos TypeScript compartidos

</details>

> 📖 **Documentación completa**: Ver [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) para guía detallada de arquitectura.

## 🎯 Principios de Arquitectura

- **Arquitectura Hexagonal** - Separación de capas
- **SOLID** - Principios de diseño orientado a objetos
- **Clean Code** - Código limpio y mantenible
- **DDD** - Domain-Driven Design
- **Atomic Design** - Componentes organizados por complejidad

## 🛠️ Tecnologías y Herramientas

### Frontend
- React 19 con TypeScript
- React Router v7 para navegación
- TailwindCSS v4 para estilos
- Lucide React para iconos

### Desarrollo
- Vite 7 para dev server y bundling
- ESLint para linting
- TypeScript para type checking

## 🤝 Contribución

¿Quieres contribuir? ¡Genial! Sigue estos pasos:

<details>
<summary><b>📝 Guía de Contribución</b></summary>

### 1️⃣ Fork y Clone

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/TU-USUARIO/VerlaCol-Landing-Page.git
cd VerlaCol-Landing-Page
```

### 2️⃣ Crea una Branch

```bash
# Crea y cambia a una nueva branch
git checkout -b feature/nueva-funcionalidad

# Nomenclatura de branches:
# feature/  - Nueva funcionalidad
# fix/      - Corrección de bugs
# docs/     - Documentación
# refactor/ - Refactorización
# test/     - Tests
```

### 3️⃣ Haz tus Cambios

- ✅ Sigue las convenciones de código del proyecto
- ✅ Agrega tests si es necesario
- ✅ Actualiza la documentación
- ✅ Verifica que todo compile: `npm run all`

### 4️⃣ Commit

```bash
# Usa conventional commits
git commit -m "feat: agregar nueva página de servicios"
git commit -m "fix: corregir bug en navegación móvil"
git commit -m "docs: actualizar README con ejemplos"
```

**Tipos de commit**:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bugs
- `docs`: Documentación
- `style`: Formato, punto y coma, etc
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### 5️⃣ Push y Pull Request

```bash
# Push a tu fork
git push origin feature/nueva-funcionalidad

# Luego crea un PR en GitHub
```

### ✅ Checklist antes del PR

- [ ] El código compila sin errores (`npm run build`)
- [ ] Pasa el linter (`npm run lint`)
- [ ] Pasa el type-check (`npm run type-check`)
- [ ] Tests actualizados (si aplica)
- [ ] Documentación actualizada
- [ ] Commits siguen conventional commits

</details>

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👥 Equipo

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Ale-Bar989">
        <img src="https://github.com/Ale-Bar989.png" width="100px;" alt=""/>
        <br />
        <sub><b>Ale-Bar989</b></sub>
      </a>
      <br />
      <a href="https://github.com/Ale-Bar989/VerlaCol-Landing-Page/commits?author=Ale-Bar989" title="Code">💻</a>
      <a href="#design" title="Design">🎨</a>
    </td>
  </tr>
</table>

---

## 🙏 Agradecimientos

- [React](https://react.dev/) - UI Library
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [Lucide](https://lucide.dev/) - Icons
- Comunidad Open Source por las herramientas increíbles

---

<div align="center">

### ⭐ ¡Si te gusta este proyecto, dale una estrella!

[![GitHub stars](https://img.shields.io/github/stars/Ale-Bar989/VerlaCol-Landing-Page?style=social)](https://github.com/Ale-Bar989/VerlaCol-Landing-Page/stargazers)

**[⬆ Volver arriba](#-verlacol-landing-page)**

</div>
