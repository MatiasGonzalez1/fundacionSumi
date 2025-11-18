# 🇦🇷 Fundación Sueños Misioneros - Web Oficial

![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/React-v18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-0055FF?style=for-the-badge&logo=framer&logoColor=white)

> **"Articular recursos, conocimientos y capacidades para el desarrollo de programas sociales en Misiones."**

Esta plataforma web moderna y responsiva sirve como el principal punto de contacto digital para la **Fundación Sueños Misioneros**. Su objetivo es maximizar el impacto social facilitando la captación de voluntarios, la transparencia institucional y la difusión de proyectos comunitarios.

---

## 🚀 Visión General del Proyecto

Este proyecto no es solo un sitio informativo; es una herramienta de conversión social construida con las mejores prácticas de desarrollo web moderno.

### 🎯 Objetivos Clave (Marketing & Impacto)
* **Conversión de Voluntarios:** Un flujo de usuario optimizado (UX) diseñado para guiar al visitante hacia la acción ("Call to Action" claros y directos).
* **Transparencia Radical:** Secciones dedicadas a mostrar *quiénes somos* y *qué hacemos*, generando confianza inmediata en posibles donantes.
* **Narrativa Visual:** Una galería interactiva que demuestra el "Proof of Work" (prueba de trabajo) de las acciones solidarias en terreno.
* **Accesibilidad:** Diseño *Mobile-First* para asegurar que la información llegue a todos, sin importar el dispositivo.

---

## 🛠️ Stack Tecnológico (Arquitectura)

El proyecto fue desarrollado utilizando una arquitectura de **Single Page Application (SPA)**, priorizando el rendimiento, la escalabilidad y la mantenibilidad del código.

| Categoría | Tecnología | Justificación Técnica |
| :--- | :--- | :--- |
| **Core** | **React (Vite)** | Renderizado rápido, ecosistema robusto y excelente experiencia de desarrollo (HMR). |
| **Estilos** | **Tailwind CSS** | Diseño atómico, responsividad garantizada y peso final del bundle optimizado. |
| **Animación** | **Framer Motion** | Micro-interacciones y transiciones de página (AnimatePresence) para una experiencia de usuario "Premium". |
| **Routing** | **React Router DOM** | Navegación fluida sin recargas de página (Client-side routing). |
| **Backend/Forms** | **Formspree** | Gestión de formularios *Serverless*. Seguro, escalable y sin mantenimiento de servidor. |
| **Despliegue** | **Vercel** | CI/CD automatizado y red de entrega de contenido (CDN) global para máxima velocidad. |

---

## ✨ Características Destacadas (Features)

### 1. Hero Section de Alto Impacto
* Diseño limpio con jerarquía visual clara.
* **CTA (Call to Action)** principal ("¡Quiero ser voluntario!") conectado a objetivos de conversión.
* Animaciones de entrada escalonada para retención de atención.

### 2. Galería Interactiva (Grid + Lightbox)
* Implementación de **Lazy Loading** para optimización de rendimiento (Core Web Vitals).
* Diseño en **Grid Responsivo** que se adapta de 1 a 4 columnas según el dispositivo.
* **Separación de Intereses:** Los datos de las imágenes están desacoplados de la lógica visual (`/data/galleryData.js`), facilitando la escalabilidad.
* Modal tipo *Lightbox* con animaciones fluidas para visualización detallada.

### 3. Sistema de Contacto Seguro
* Integración con **Formspree** mediante variables de entorno para proteger credenciales.
* Validación de campos en tiempo real (`ValidationError`).
* Feedback inmediato al usuario (Estados de carga y mensajes de éxito).
* Botón dual: Formulario formal + Contacto directo vía **WhatsApp API**.

### 4. Sección Institucional (Sobre Nosotros)
* Presentación del equipo real con enfoque humano.
* Estructura de contenido optimizada para lectura rápida (Misión, Visión, Historia).

---

## 💻 Instalación y Despliegue Local

Si deseas clonar este repositorio y correrlo localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/fundacion-sumi-pi.git](https://github.com/TU_USUARIO/fundacion-sumi-pi.git)
    cd fundacion-sumi-pi
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto y agrega tu ID de Formspree (para seguridad):
    ```env
    VITE_FORMSPREE_ID=tu_id_aqui
    ```

4.  **Ejecutar en desarrollo:**
    ```bash
    npm run dev
    ```

---

## 🔒 Seguridad y Buenas Prácticas

* **Environment Variables:** Las credenciales de API no están hardcodeadas, siguiendo la metodología *Twelve-Factor App*.
* **Component Architecture:** Código modular y reutilizable.
* **Responsive Design:** Testeado en breakpoints móviles (`sm`), tablets (`md`) y escritorio (`lg`, `xl`).

---

## 🤝 Contribución

Este es un proyecto de código abierto con fines sociales. Las PRs (Pull Requests) son bienvenidas para mejorar la accesibilidad o añadir nuevas funcionalidades.

---

**Desarrollado con ❤️ y código limpio para la Fundación Sueños Misioneros.**
*Versión 1.0.0 - Lanzamiento Oficial*
