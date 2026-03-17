// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import { fileURLToPath } from "url";
// import { sitemapMiddleware } from "./generate-sitemap.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react(),

//     {
//       name: "sitemap-dev-middleware",
//       configureServer(server) {
//         server.middlewares.use(sitemapMiddleware());
//       },
//     },
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import { fileURLToPath } from "url";
// import viteCompression from "vite-plugin-compression";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig({
//   plugins: [tailwindcss(), react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import viteCompression from "vite-plugin-compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: process.cwd(),
  base: "/",
  plugins: [
    tailwindcss(),
    react(),

    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),

    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Core React and Routing
            if (
              id.includes("/node_modules/react/") ||
              id.includes("/node_modules/react-dom/") ||
              id.includes("/node_modules/react-router-dom/") ||
              id.includes("/node_modules/scheduler/")
            ) {
              return "react-vendor";
            }
            
            // Group heavy UI/Animation libs
            if (id.includes("framer-motion") || id.includes("lucide-react") || id.includes("react-icons")) {
              return "ui-vendor";
            }

            // Maps are heavy and specific to certain routes
            if (id.includes("leaflet") || id.includes("react-leaflet")) {
              return "map-vendor";
            }

            // Carousels are also route-specific
            if (id.includes("swiper") || id.includes("embla-carousel")) {
              return "carousel-vendor";
            }

            // Everything else into a generic vendor chunk
            return "vendor";
          }
        },
      },
    },
  },
});
