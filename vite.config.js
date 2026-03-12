// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import { fileURLToPath } from "url";
// // import { sitemapMiddleware } from "./generate-sitemap.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react(),
//     // {
//     //   name: "sitemap-middleware",
//     //   configureServer(server) {
//     //     server.middlewares.use(sitemapMiddleware());
//     //   },
//     // },
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
// });
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sitemapMiddleware, sitemapBuildPlugin } from "./vite-sitemap.js";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // ✅ Runs during `vite build` → writes dist/sitemap.xml
    sitemapBuildPlugin(),

    // ✅ Runs during `vite dev` → serves /sitemap.xml on localhost
    {
      name: "sitemap-dev-middleware",
      configureServer(server) {
        server.middlewares.use(sitemapMiddleware());
      },
    },
  ],
});
