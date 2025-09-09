import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "mfdebby",
  description: "mfdebby's site containing notes on anything related to tech.",

  head: [["link", { rel: "icon", href: "/logo.png" }]],

  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Homelab", link: "/homelab/index.md" },
      { text: "Notes", link: "/notes/index.md" },
    ],
    sidebar: {
      '/homelab/': [
        {
          text: "Homelab",
          items: [
            { text: 'Prevent Suspend on Lid Close', link: '/homelab/prevent_suspend_on_lid_close.md' },
            { text: 'Setting Up SSH', link: '/homelab/setting_up_ssh.md' },
          ]
        }
      ]
    },
    socialLinks: [{ icon: "github", link: "https://github.com/mfdebby" }],
    // aside: false,
  },
});
