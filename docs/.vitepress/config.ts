import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "mfdebby",
  description: "mfdebby's site containing notes on anything related to tech.",

  // head: [["link", { rel: "icon", href: "/logo.png" }]],

  themeConfig: {
    // logo: "/logo.png",
    nav: [
      // { text: "Home", link: "/" },
      { text: "Notes", link: "/notes/index.md" },
    ],
    sidebar: {
      '/notes/': [
        {
          text: "Notes",
          items: [
            { text: 'Prevent Suspend On Lid Close', link: '/notes/prevent_suspend_on_lid_close.md' },
            { text: 'Setting Up SSH', link: '/notes/setting_up_ssh.md' },
            { text: 'Creating A New Sudo User', link: '/notes/creating_a_new_sudo_user.md' },
            { text: 'Setting Up Unattended Upgrades', link: '/notes/setting_up_unattended_upgrades.md' },
            { text: 'Setting Up Docker', link: '/notes/setting_up_docker.md' },
            { text: 'Setting Up UFW', link: '/notes/setting_up_ufw.md' },
          ]
        }
      ]
    },
    socialLinks: [{ icon: "github", link: "https://github.com/mfdebby" }],
    aside: false,
  },
});
