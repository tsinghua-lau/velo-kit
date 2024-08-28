import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ outDir: ['dist'] })],

  build: {
    target: 'modules',
    minify: true,

    rollupOptions: {
      input: 'src/index.ts',
      external: ['**/*.vue'],

      output: [
        {
          format: 'es',
          dir: path.resolve(__dirname, 'dist'),
          entryFileNames: '[name].js',
          exports: 'named',
          // 排除目录
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'velo-kit',
      formats: ['es'],
    },
  },
})
