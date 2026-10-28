import html from "./index.html";

// www.tin-banozic.from.hr -> tin-banozic.from.hr is handled by a Cloudflare Redirect Rule on the zone.
export default {
  async fetch() {
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
      },
    });
  },
};
