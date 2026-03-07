import fs from "fs";
import axios from "axios";

const BASE_URL = "https://aia.in.net";

async function generateSitemap() {
  try {
    const response = await axios.get(
      "https://aia.in.net/webapi/public/api/getSitemap"
    );

    const pages = response.data.data;

    console.log("Total pages from API:", pages.length); // 👈 add this

    let urls = "";

    pages.forEach((page) => {
      urls += `
  <url>
    <loc>${BASE_URL}/${page.page_two_url}</loc>
    <priority>${page.page_two_priority}</priority>
  </url>`;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
  <loc>${BASE_URL}</loc>
  <priority>1.0</priority>
</url>

${urls}

</urlset>`;

    fs.writeFileSync("./public/sitemap.xml", sitemap);

    console.log("✅ sitemap.xml generated successfully");
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
  }
}

generateSitemap();
