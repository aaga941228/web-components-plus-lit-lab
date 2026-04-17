# Lit CELLS Lab

## 🧠 Contexto general
Este proyecto es un laboratorio práctico para reforzar conocimientos en:

- Web Components nativos (Custom Elements)
- Lit (librería sobre Web Components)
- Consumo de APIs externas
- Arquitectura frontend sin frameworks (React, Vue, Angular)

El objetivo NO es construir una app productiva, sino practicar conceptos clave de certificación y diseño de componentes.

---

## 🎯 Objetivo del proyecto

Construir una aplicación simple que:

- Consuma un API pública (ej: PokeAPI u otra similar)
- Muestre una lista paginada de elementos
- Permita búsqueda (filtro o query al API)
- Al hacer click en un elemento:
  - Mostrar un modal con detalles (card)

---

## 🧱 Enfoque técnico

La aplicación debe implementarse en DOS versiones paralelas:

### 1. Web Components nativos (/vanilla)
- Custom Elements
- Shadow DOM manual
- lifecycle callbacks
- manejo manual del DOM

### 2. Lit (/lit)
- Uso de `LitElement`
- Reactive properties (`@property`)
- Templates con `html`
- Eventos declarativos (`@click`)
- Lifecycle (`firstUpdated`, `updated`)
- Uso de directivas (repeat, when, classMap, etc.)

---

## 📁 Estructura del proyecto

web-components-plus-lit-lab/
│
├── public/                     # Archivos estáticos (favicon, etc.)
│
├── src/
│   ├── vanilla/               # Web Components puros (sin librerías)
│   │   ├── my-button.ts
│   │   ├── my-card.ts
│   │
│   ├── lit/                   # Componentes usando Lit
│   │   ├── my-button.ts
│   │   ├── my-card.ts
│   │
│   ├── services/              # Lógica de API (fetch, adapters, etc.)
│   │   ├── rick-and-morty.service.ts
│   │
│   ├── shared/ (opcional)     # Utilidades compartidas
│   │   ├── types.ts
│   │   ├── helpers.ts
│   │
│   ├── styles/                # Estilos globales
│   │   ├── global.css
│   │
│   ├── main.ts                # Entry point de la app
│
├── docs/                      # 👈 Contexto y documentación del proyecto
│   ├── context.md             # Reglas + guía para Codex
│   ├── notes.md               # Apuntes personales
│   ├── questions.md           # Preguntas tipo certificación
│
├── index.html                 # HTML base
├── package.json               # Dependencias
├── package-lock.json          # Lockfile (SÍ se versiona)
├── tsconfig.json              # Configuración TypeScript
├── vite.config.ts             # Configuración de Vite
└── .nvmrc                     # Versión de Node

---

## 🔌 Consumo de API

- Usar una API pública (ej: PokeAPI o similar)
- Implementar lógica de:
  - fetch
  - manejo de errores
  - loading states

---

## 🧩 Funcionalidades requeridas

- Listado paginado
- Buscador
- Modal de detalle
- Estado de carga (loading)
- Manejo de errores

---

## 🎨 UI / Estilos

- Usar CSS puro
- NO usar frameworks de estilos (Bootstrap, Tailwind, etc.)
- Preferir estilos encapsulados (Shadow DOM)

---

## ⚡ Uso de Lit (IMPORTANTE)

Se deben utilizar activamente las features de Lit:

- Reactive properties
- Re-render automático
- Directivas:
  - repeat
  - when / conditional rendering
  - classMap (si aplica)
- Manejo de eventos
- Separación lógica vs template

---

## 🧠 Objetivo de aprendizaje

- Entender diferencias reales entre:
  - Web Components vs Lit
- Entender reactividad en Lit
- Practicar arquitectura sin framework
- Preparación indirecta para certificación

---

## 🧑‍💻 Forma de trabajo (MUY IMPORTANTE)

Este proyecto se construirá de forma manual.

### Reglas:

- NO generar código automáticamente sin explicación
- El usuario (yo) escribiré todo el código manualmente
- La IA solo debe:
  - explicar
  - guiar
  - sugerir estructura
  - resolver dudas puntuales

---

## 🚫 Restricción para IA (Codex)

Cuando el usuario solicite ayuda:

- NO modificar archivos directamente
- NO asumir cambios automáticos en el proyecto
- NO generar soluciones completas sin ser solicitadas

En su lugar:

- Explicar paso a paso
- Mostrar ejemplos en el chat
- Indicar dónde crear archivos
- Explicar cómo conectar componentes

---

## 🧭 Flujo de interacción esperado

El usuario trabajará así:

1. Crea archivos manualmente
2. Consulta dudas específicas
3. Solicita:
   - estructura de componentes
   - comunicación entre componentes
   - manejo de estado
   - consumo de API

La IA debe responder como guía técnica, no como generador automático.

---

## 🧩 Arquitectura esperada

Separación clara de responsabilidades:

- Components → UI
- Services → lógica de API
- State (simple) → manejo local de datos

---

## 🧪 Filosofía del proyecto

Este proyecto prioriza:

- comprensión sobre velocidad
- claridad sobre abstracción
- práctica real sobre copiar código

---

## ❓ Preguntas de práctica (opcional)

/docs/questions.md contendrá preguntas tipo certificación