import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/', // Ensure correct base path for assets in production
      root: process.cwd(), // Explicitly set the project root to the current working directory
      plugins: [react()],
      define: {
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      },
      build: {
        rollupOptions: {
          input: path.resolve(process.cwd(), 'index.html'), // Explicitly define the HTML entry point
        },
      },
      server: {
        port: 8080,
      },
    };
});
