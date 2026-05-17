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

## Assets

- Invitación: `public/assets/maca.png`
- Audio: `public/audio/macarenatwo.m4a`

## Evento (editar en código)

Enlaces a Maps/Waze en `src/config/event.ts`.

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
