import html from "./index.html";
import avatar from "./img/avatar.webp";
import favicon from "./img/favicon.png";
import appleTouchIcon from "./img/apple-touch-icon.jpg";

const files = {
  "/img/avatar.webp": [avatar, "image/webp"],
  "/favicon.png": [favicon, "image/png"],
  "/apple-touch-icon.png": [appleTouchIcon, "image/jpeg"],
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

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
      },
    });
  },
};
