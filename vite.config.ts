import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function absoluteOgImages(): Plugin {
  return {
    name: 'absolute-og-images',
    transformIndexHtml(html) {
      const siteUrl = process.env.VITE_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '')
      if (!siteUrl) return html

      return html.replace(/content="\/assets\/og-image\.png"/g, `content="${siteUrl}/assets/og-image.png"`)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), absoluteOgImages()],
})
