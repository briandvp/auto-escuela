# 🎯 Guía de Características Interactivas

## Introducción

Esta guía explica todas las nuevas características interactivas agregadas a la página web de Autoescuela. Cada sección describe cómo se comporta la página y qué puede hacer el usuario.

---

## 📍 Tabla de Contenidos

1. [Hero Slider (Banner Principal)](#hero-slider)
2. [Servicios Expandibles](#servicios)
3. [Estadísticas Animadas](#estadísticas)
4. [Cobertura de Servicio](#cobertura)
5. [Localizaciones](#localizaciones)
6. [Formulario de Contacto](#formulario)
7. [Animaciones Globales](#animaciones)

---

## Hero Slider {#hero-slider}

### 🎬 Comportamiento

El banner principal contiene un carrusel de 3 diapositivas que cambia automáticamente:

**Diapositivas disponibles:**
- 📍 Promoción de Auto (5 clases por $188.000)
- 🏍️ Clases de Moto (CAT A21 y A22)
- 🚗 Clases con Caja Automática ($218.000)

### 🖱️ Interacciones

**Botones de navegación:**
```
[◀] Anterior  ●  ●  ●  Siguiente [▶]
```

- **Haz clic en el botón anterior/siguiente** para navegar entre diapositivas
- **Haz clic en los puntos** para ir a una diapositiva específica
- **Las diapositivas cambian automáticamente cada 5 segundos**

### ✨ Efectos Visuales

- Las imágenes se hacen zoom gradualmente
- El texto aparece con animación desde la izquierda
- Los botones tienen efecto de glow en hover
- Los precios tienen animación de pulsación
- Los íconos de checkmark crecen al pasar el mouse

---

## Servicios {#servicios}

### 📦 Tipos de Servicios

La página muestra 4 servicios principales:
1. **Clases los 7 días**
2. **Vamos a Domicilio**
3. **Alquiler para Examen**
4. **Certificación**

### 🎯 Cómo Usar

**Para ver más detalles de un servicio:**

1. Busca la sección "Nuestros Servicios"
2. Haz clic en cualquiera de las tarjetas
3. La tarjeta se expandirá mostrando:
   - Descripción detallada
   - Botón "Más información"
4. Haz clic nuevamente para cerrar

### ✨ Efectos Visuales

- **Hover**: La tarjeta sube y cambia el ícono a gradiente dorado
- **Expansion**: Un detalle desliza suavemente hacia abajo
- **Chevron**: El ícono de flecha rota 180 grados al expandir

### 🎨 Animaciones

- Las tarjetas aparecen con entrada escalonada (0.1s, 0.2s, 0.3s, 0.4s)
- Al expandir: animación suave de 0.3 segundos
- El botón dentro tiene efecto de escala en hover

---

## Estadísticas {#estadísticas}

### 📊 Números Mostrados

Cuando haces scroll hacia la sección "¿Por qué elegirnos?":

```
10+                    5000+
Años de Experiencia    Alumnos Graduados

98%                    4
Tasa de Aprobación     Zonas de Cobertura
```

### 🎬 Cómo Funciona

**Los números NO comienzan inmediatamente**, sino que:

1. Esperas a que la sección sea visible en tu pantalla (scroll hacia ella)
2. Los números comienzan a contar automáticamente desde 0
3. Cada número llega a su valor final en aprox. 1.5 segundos
4. El incremento es suave y dinámico

### ✨ Efectos Visuales

- Las características se deslizan desde la izquierda
- Las tarjetas de estadísticas se escalan suavemente
- Al pasar el mouse: los números cambian a color más claro y brillan

---

## Cobertura {#cobertura}

### 🗺️ Zonas Disponibles

La página muestra 4 zonas principales:
- **Capital Federal**: CABA
- **Zona Norte**: Olivos, Vicente López, etc.
- **Zona Oeste**: Ramos Mejía, Merlo, etc.
- **Zona Sur**: Avellaneda, Quilmes, etc.

### 🎯 Cómo Usar

**Para ver los barrios de una zona:**

1. Busca la sección "Cobertura del Servicio"
2. Haz clic en cualquiera de las 4 tarjetas
3. Se mostrará la lista de barrios en esa zona (en 2 columnas)
4. Haz clic nuevamente para cerrar

### ✨ Efectos Visuales

- **Hover**: La tarjeta sube, brilla con borde dorado
- **Ícono**: Sube y rota ligeramente al pasar el mouse
- **Título**: Brilla con efecto text-shadow dorado
- **Expansion**: La lista aparece con animación suave
- **Barrios**: Al pasar el mouse sobre un barrio, se vuelve dorado

---

## Localizaciones {#localizaciones}

### 🏢 Oficinas

Se muestran 4 oficinas principales:
1. **CABA** - Caballito: Rosario 841
2. **Zona Norte** - Olivos: Maipú 3684
3. **Zona Oeste** - Ramos Mejía: Rosales 250
4. **Zona Sur** - Avellaneda: Pastor Obligado 75

### 🎯 Cómo Usar

**Para ver detalles de una oficina:**

1. Busca la sección "Nuestras Oficinas"
2. Haz clic en cualquiera de las tarjetas
3. Se mostrará:
   - ☎️ Teléfono de contacto
   - 🕐 Horarios de atención
   - 📍 Botón "Ver en Google Maps"
4. Haz clic en "Ver en Google Maps" para abrir en Google Maps
5. Haz clic nuevamente en la tarjeta para cerrar

### ✨ Efectos Visuales

- **Hover**: La tarjeta sube con sombra dorada
- **Expansion**: Los detalles aparecen con animación suave
- **Botón**: Cambio de color en hover y efecto de escala
- **Indicador**: El chevron rota 180 grados al expandir

---

## Formulario de Contacto {#formulario}

### 📝 Campos Disponibles

1. **Nombre completo** (requerido)
2. **Teléfono** (requerido)
3. **Email** (requerido)
4. **Curso de interés** (opcional)
5. **Mensaje** (requerido)

### ✅ Validación en Tiempo Real

**La página valida mientras escribes:**

```
✗ Campo vacío          = Borde rojo + Icono de error
✓ Campo válido         = Borde verde + Icono de ✓
? Campo sin validar    = Borde gris normal
```

### 🎯 Ejemplos de Validación

**Nombre:**
- ❌ "ab" (menos de 3 caracteres)
- ✅ "Juan Pérez" (3 o más caracteres)

**Teléfono:**
- ❌ "123" (muy corto)
- ✅ "11 5263-0411" (válido)

**Email:**
- ❌ "usuario@" (incompleto)
- ✅ "usuario@email.com" (válido)

**Mensaje:**
- ❌ "Hola" (menos de 10 caracteres)
- ✅ "Quiero información sobre clases de auto" (10+)

### 🎬 Proceso de Envío

1. Rellena el formulario
2. Los campos se validan mientras escribes
3. Si todos los campos son válidos, el botón "Enviar" se habilita
4. Haz clic en "Enviar"
5. Se abre WhatsApp con tu mensaje pre-llenado
6. Confirmas y envías desde WhatsApp
7. Aparece un mensaje de éxito

### ✨ Efectos Visuales

- **Campos válidos**: Brillo verde suave en el borde
- **Campos inválidos**: Brillo rojo suave en el borde
- **Mensajes de error**: Aparecen con animación suave
- **Botón deshabilitado**: Opacidad reducida
- **Mensaje de éxito**: Aparece con animación y desaparece en 5 segundos

---

## Animaciones Globales {#animaciones}

### 🎨 Tipos de Animaciones

**Entrada de elementos:**
- Elementos aparecen suavemente desde abajo (slideInUp)
- Elementos se hacen visibles gradualmente (fadeIn)
- Elementos crecen desde pequeño a normal (scaleIn)

**Hover (pasar el mouse):**
- Las tarjetas suben ligeramente
- Los iconos cambian de color
- Los textos brillan
- Los botones crecen

**Transiciones:**
- Todos los cambios toman 0.3-0.4 segundos
- El movimiento es suave y natural
- Los colores cambian gradualmente

### 🖱️ Interactividad del Scroll

**Scrollbar personalizada:**
- La barra de scroll tiene color dorado (primario)
- El scroll es suave en toda la página
- La velocidad es consistente

---

## 💡 Tips y Trucos

### Para Mejor Experiencia

1. **Abre la página en desktop primero** para ver todas las animaciones
2. **Desplázate lentamente** para apreciar las animaciones
3. **Haz hover en elementos** para ver efectos visuales
4. **Expande las tarjetas** para ver detalles adicionales
5. **Usa Google Maps** para encontrar las oficinas

### En Móvil

- Las animaciones se adaptan al tamaño de pantalla
- Los efectos hover se transforman en efectos de tap
- El formulario es más compacto
- Puedes expandir tarjetas con un solo toque

---

## 🔧 Características Técnicas

### Tecnologías Utilizadas

- **Angular**: Framework principal
- **SCSS**: Estilos con animaciones avanzadas
- **TypeScript**: Lógica de componentes
- **CSS Animations**: Animaciones keyframe
- **Intersection Observer**: Para contadores lazy
- **ngFor/ngIf**: Rendering dinámico

### Performance

- ✅ Compilación exitosa sin warnings
- ✅ Bundle optimizado (3.42 MB)
- ✅ Build rápido (4.11 segundos)
- ✅ Animaciones fluidas con CSS transforms
- ✅ Lazy animation de contadores

---

## 📞 Soporte

Si tienes problemas con:

- **Animaciones no aparecen**: Verifica que JavaScript esté habilitado
- **Formulario no valida**: Recarga la página (F5)
- **Google Maps no abre**: Verifica tu conexión a internet
- **Efectos lentos**: Cierra otros programas que usen muchos recursos

---

## 🎉 ¡Disfruta!

La página ahora es mucho más interactiva y agradable de usar. Explora todas las características y no dudes en contactarnos si tienes preguntas.

**¡Bienvenido a Autoescuela!** 🚗

---

**Última actualización**: 17 de Febrero de 2026

