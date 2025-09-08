import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "mfdebby",
  description: "mfdebby's site containing notes on anything related to tech.",

  head: [["link", { rel: "icon", href: "/favicon.png" }]],

  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/mfdebby" }],
    aside: false,
  },
});
