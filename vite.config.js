import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    define: {
      'process.env.PUBLIC_URL': command === 'serve'? '""' : '"/book-store"'
    }
  }

  if (command !== 'serve') {
    config.base = '/book-store/'
  }

  return config
})