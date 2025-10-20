import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  build: {
    chunkSizeWarningLimit: 1500, // ✅ เพิ่ม limit เป็น 1.5MB (ปรับได้ตามต้องการ)
  },
})
