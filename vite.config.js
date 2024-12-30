import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        runes: true // Habilita las nuevas características de Svelte 5
      }
    })
  ]
})