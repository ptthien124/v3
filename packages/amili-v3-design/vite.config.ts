import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      package: path.resolve(__dirname, 'package/'),
    },
  },
  server: {
    port: 3300,
    watch: {
      usePolling: true,
    },
  },
});
