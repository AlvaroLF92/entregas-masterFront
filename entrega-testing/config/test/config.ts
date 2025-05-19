import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'jsdom', // Entorno de React PUTA
    setupFiles: ['./config/test/setup.ts'],
  },
});
