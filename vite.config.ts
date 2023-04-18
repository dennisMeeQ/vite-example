/// <reference types="vitest" />
import svgr from '@honkhonk/vite-plugin-svgr';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      // for TypeScript path alias import like : @/x/y/z
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Map mui style engine to styled-components
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  server: {
    port: 3070,
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
