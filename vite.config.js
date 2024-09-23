import fs from 'fs';
import vue from '@vitejs/plugin-vue';

const cert = fs.readFileSync('localhost.pem');
const key = fs.readFileSync('localhost-key.pem');

export default {
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@views', replacement: '/src/views' },
      { find: '@resource', replacement: '/src/static/resource' },
    ],
  },
  server: {
    host: true,
    https: {
      key,
      cert,
    },
  },
};
