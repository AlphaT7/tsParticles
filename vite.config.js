import mkcert from "vite-plugin-mkcert";

// vite.config.js
export default {
  plugins: [mkcert()],
  root: "./src/",
  publicDir: "../public/",
  build: {
    outDir: "../dist/",
    emptyOutDir: true,
    reportCompressedSize: true,
  },
  server: {
    https: true,
    port: 3000,
    host: true,
    open: true,
  },
};
