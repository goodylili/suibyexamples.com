import {defineConfig} from "vocs";
import sidebar from "./sidebar";
import topNav from "./topNav.ts";

// @ts-ignore
export default defineConfig({


  theme: {
    accentColor: {
      dark: '#ffc500',
      light: '#000000',
    },
    variables: {
      color: {
        background: {
          light: '#f9f9f9', // Main background color
          dark: '#0e0d0f', // Optional: Dark mode background
        },
      }
    }

  },

  sponsors: [
    {
      name: 'Collaborator',
      height: 120,
      items: [
        [
          {
            name: 'Sui Foundation',
            link: 'https://sui.io/about',
            image:
                'https://raw.githubusercontent.com/sui-foundation/awesome-sui/main/media/logo.svg',
          },
        ],
      ],
    },
    {
      name: 'Large Enterprise',
      height: 60,
      items: [
        [
          {
            name: 'WalletConnect',
            link: 'https://walletconnect.com',
            image:
                'https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/walletconnect-light.svg',
          },
          {
            name: 'Stripe',
            link: 'https://www.stripe.com',
            image:
                'https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/stripe-light.svg',
          },
        ],
      ],
    },
  ],


  logoUrl: {light: "/dark.svg", dark: "/yellow.svg"},


  sidebar,
  // TODO: change the base URL and edit link before deploying to production
  editLink: {
    pattern: 'https://github.com/goodylili/movement-docs/tree/main/docs/pages/:path',
    text: 'Edit this Page',
  },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/movementlabsxyz',
    },
    {
      icon: 'x',
      link: 'https://x.com/movementlabsxyz',
    },
    {
      icon: 'discord',
      link: 'https://discord.gg/movementlabsxyz'
    },
    {
      icon: 'telegram',
      link: 'https://t.me/movementlabsxyz'
    },
  ],
  title: "Movement By Example",
  description: "The First MoveVM ZK Layer Two on Ethereum",
  // banner: {
  //     content: "Movement is Live on Mainnet. Read the Announcement [here](https://movementnetwork.xyz)",
  //     dismissable: true,
  // },
  topNav,
});