# Macarena Birthday — Invitación digital

Landing page interactiva para el primer cumpleaños de Maca (Macarena), optimizada para móvil y despliegue en Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## Personalizar por invitado

Agrega el parámetro `guest` en la URL:

```
http://localhost:5173/?guest=María
```

## Versión de la invitación (imagen)

| Parámetro | Imagen |
|-----------|--------|
| `?v=1` o `?v=v1` | `invitation.jpg` |
| `?v=2` o `?v=v2` | `invitation_two.jpg` (por defecto) |

Ejemplos combinados:

```
http://localhost:5173/?guest=María&v=1
http://localhost:5173/?guest=Pedro&v=2
```

## Pendiente por tu parte

1. **Audio:** `public/audio/macarenatwo.m4a` (se reproduce al abrir la página)
2. **Capas PNG** (opcional, con fondo transparente) en `public/assets/`:
   `maca.png`, `balloon-1.png`, `disco-ball.png`, `star.png`, `bunting.png`, `lemonade-glass.png`, `cupcake.png`, `bow.png`

## Evento (editar en código)

Datos en `src/config/event.ts` — fecha, hora, lugar y enlaces a Maps/Waze.

## Despliegue en Vercel

1. Conecta este repositorio en [vercel.com](https://vercel.com)
2. Framework: **Vite**
3. Build: `npm run build`
4. Output: `dist`

En Vercel, `og:image` se resuelve automáticamente con la URL del deploy. Para dominio propio, define `VITE_SITE_URL=https://tu-dominio.com` en las variables de entorno de Vercel.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion
