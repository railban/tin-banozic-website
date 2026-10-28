import html from "./index.html";
import notFoundHtml from "./404.html";
import robots from "./robots.txt";
import sitemap from "./sitemap.xml";
import avatar from "./img/avatar.webp";
import favicon from "./img/favicon.png";
import appleTouchIcon from "./img/apple-touch-icon.jpg";

const files = {
  "/img/avatar.webp": [avatar, "image/webp"],
  "/favicon.png": [favicon, "image/png"],
  "/apple-touch-icon.png": [appleTouchIcon, "image/jpeg"],
  "/robots.txt": [robots, "text/plain; charset=utf-8"],
  "/sitemap.xml": [sitemap, "application/xml; charset=utf-8"],
};

// www.tin-banozic.from.hr -> tin-banozic.from.hr is handled by a Cloudflare Redirect Rule on the zone.
export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);

    const file = files[pathname];
    if (file) {
      return new Response(file[0], {
        headers: {
          "content-type": file[1],
          "cache-control": "public, max-age=86400",
        },
      });
    }

    if (pathname === "/") {
      return new Response(html, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=300",
        },
      });
    }

    return new Response(notFoundHtml, {
      status: 404,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
      },
    });
  },
};
