import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'mfdebby',
  description: "mfdebby's site containing notes on anything related to tech.",
  head: [['link', { rel: 'icon', href: '/butus.ico' }]],
  themeConfig: {
    logo: '/butus_logo.png',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Notes', link: '/notes/prevent_suspend_on_lid_close' },
      { text: 'Homelab', link: '/homelab/create_proxmox_vm_template.md' },
      { text: 'Networking', link: '/networking/subnetting_ipv4.md' },
    ],
    sidebar: {
      '/notes/': [
        {
          text: 'Notes',
          items: [
            {
              text: 'Prevent Suspend On Lid Close',
              link: '/notes/prevent_suspend_on_lid_close.md',
            },
            { text: 'Setting Up SSH', link: '/notes/setting_up_ssh.md' },
            {
              text: 'Creating A New Sudo User',
              link: '/notes/creating_a_new_sudo_user.md',
            },
            {
              text: 'Setting Up Unattended Upgrades',
              link: '/notes/setting_up_unattended_upgrades.md',
            },
            { text: 'Setting Up Docker', link: '/notes/setting_up_docker.md' },
            { text: 'Setting Up UFW', link: '/notes/setting_up_ufw.md' },
            {
              text: 'Setting Up SSH Identity',
              link: '/notes/setting_up_ssh_identity.md',
            },
            {
              text: 'Setting Up Docker Context',
              link: '/notes/setting_up_docker_context.md',
            },
            {
              text: 'Setting Up SSL with Cloudflare and Certbot',
              link: '/notes/setting_up_ssl_with_cloudflare_and_certbot.md',
            },
            {
              text: 'Setting Up Dozzle',
              link: '/notes/setting_up_dozzle.md',
            },
            {
              text: 'SSH To GCloud VM Using IAP Tunnel',
              link: '/notes/ssh_to_gcloud_vm_using_iap_tunnel.md',
            },
            {
              text: 'GitHub Workflow: Deploy Docker Stack to GCP VM',
              link: '/notes/ghwf_docker_stack_gcloud.md',
            },
            {
              text: 'Basic K8s Setup With Ingress',
              link: '/notes/basic_k8s_setup_with_ingress.md',
            },
            {
              text: 'Fix Unresponsive Docker',
              link: '/notes/fix_unresponsive_docker.md',
            },
          ],
        },
      ],
      '/homelab/': [
        {
          text: 'Homelab',
          items: [
            {
              text: 'Create Proxmox VM Template',
              link: '/homelab/create_proxmox_vm_template.md',
            },
            {
              text: 'Create Private Network With VM Bridge',
              link: '/homelab/create_private_network_with_vm_bridge.md',
            },
          ],
        },
      ],
      '/networking/': [
        {
          text: 'Networking',
          items: [
            {
              text: 'Subnetting IPv4',
              link: '/networking/subnetting_ipv4.md',
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/mfdebby' }],
    aside: false,
  },
})
