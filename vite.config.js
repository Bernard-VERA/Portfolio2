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
    }
  }
})
// X-Content-Type-Options : Empêche le MIME-type sniffing

// X-Frame-Options : Protège contre le clickjacking

// X-XSS-Protection : Active la protection XSS du navigateur

// Referrer-Policy : Contrôle les informations de référence envoyées

// Content-Security-Policy : Définit les sources autorisées pour le contenu (supprimé car bloquait mob navigateur. A revoir plus tard)