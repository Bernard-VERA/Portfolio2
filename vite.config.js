import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
      //'Content-Security-Policy': "default-src 'self'; img-src 'self' https: data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; font-src 'self' https: data:; connect-src 'self' https:;"
    }
  }
})
// X-Content-Type-Options : Empêche le MIME-type sniffing

// X-Frame-Options : Protège contre le clickjacking

// X-XSS-Protection : Active la protection XSS du navigateur

// Referrer-Policy : Contrôle les informations de référence envoyées

// Content-Security-Policy : Définit les sources autorisées pour le contenu (supprimé car bloquait mon navigateur. A revoir plus tard)