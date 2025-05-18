# RustaSV Landing Page

Este proyecto es una landing page para RustaSV, una aplicación de transporte público en El Salvador.

## Instalación

1. Clona este repositorio
2. Instala las dependencias:
   \`\`\`bash
   npm install
   \`\`\`
3. Ejecuta el proyecto en modo desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`

## Personalización

### Imágenes

Para reemplazar las imágenes de ejemplo, simplemente sustituye los archivos en la carpeta `/public` manteniendo los mismos nombres:

- `/mascota.png` - La mascota de la aplicación
- `/mockup.png` - Mockup de la aplicación
- `/users-bus.jpg` - Imagen de usuarios en bus
- `/route-vector.png` - Vector de ruta en móvil
- `/screens/screen1.png` a `/screens/screen6.png` - Capturas de pantalla de la app
- `/avatar1.jpg` a `/avatar6.jpg` - Fotos de los desarrolladores

### Textos

Los textos se pueden modificar directamente en los archivos de componentes dentro de la carpeta `/src/sections`.

### Estilos

Los colores principales se definen en el archivo `/src/index.css` en las variables CSS:

\`\`\`css
:root {
--color-background: #0E0E17;
--color-green: #00E09E;
--color-fuchsia: #FF007C;
--color-purple: #7A2BFF;
--color-orange: #FF8A00;
--color-text: #FFFFFF;
--color-text-secondary: rgba(255, 255, 255, 0.7);
}
\`\`\`

## Estructura del proyecto

- `/src/components` - Componentes reutilizables (Navbar, Footer)
- `/src/sections` - Secciones principales de la landing page
- `/public` - Imágenes y recursos estáticos
