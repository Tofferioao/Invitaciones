---
description: Describe when these instructions should be loaded by the agent based on task context
# applyTo: 'Describe when these instructions should be loaded by the agent based on task context' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

<!-- Tip: Use /create-instructions in chat to generate content with agent assistance -->

Actúa como un desarrollador web experto en UI/UX y Tailwind CSS. Necesito que escribas el código para una invitación de boda electrónica de una sola página (Single Page Application), diseñada con un enfoque "mobile-first" (diseñada para verse perfecto en celulares).

La estructura debe inspirarse en un diseño de tarjeta vertical dividida por secciones, similar a la plantilla "vintage" de specially.love, pero con una paleta de colores moderna, fresca y romántica.

Paleta de colores:

Fondo principal y tipografía base: Blanco (#FFFFFF) y grises oscuros muy elegantes para lectura (#353535).

Acentos y fondos de sección alternos: Verde pastel (#ABFCA4) y Rosa pastel (#F5A4FC). Deben usarse de forma sutil y bonita.

Estructura y contenido requerido (Genera el HTML con clases de Tailwind CSS):

Portada (Cover): Imagen de fondo con opacidad suave. En el centro, en tipografía Serif muy grande y elegante, los nombres: "Joao & Samantha".

Anuncio y Fecha: Un bloque blanco limpio que diga "¡NOS CASAMOS!" y la fecha de la boda.

Ceremonia: Fondo suave con el verde pastel (#ABFCA4). Detalles de la iglesia en Quito, hora, y un botón bonito que diga "(Pulsa para ver en Maps)".

Recepción / Celebración: Fondo blanco. Detalles del lugar de la fiesta, hora y botón de mapa.

Código de Vestimenta (Dress Code): Fondo suave con el rosa pastel (#F5A4FC). Especificar "FORMAL".

Itinerario (Timeline): Una línea de tiempo vertical limpia indicando: Recepción, Ceremonia, Cóctel, Banquete y Fiesta.

Asistencia (RSVP): Una sección llamativa invitando a confirmar asistencia con un botón claro.

Cuenta Regresiva: Un temporizador de Días, Horas, Minutos y Segundos.

Requisitos técnicos:

Utiliza HTML semántico (<section>, <main>, <button>).

Usa exclusivamente clases de Tailwind CSS para los estilos.

Aplica sombras suaves (shadow-md, shadow-lg) y bordes redondeados (rounded-xl o rounded-2xl) a los contenedores de las tarjetas para que se vea moderno.

Para no saturar la memoria de generación, por favor genera primero el código de las secciones 1 a la 4. Cuando termine, te pediré el resto.