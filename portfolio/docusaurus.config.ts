import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Engineer',
  tagline: '',
  favicon: '/img/favicon.ico',

  url: 'https://harsh-patel.in',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'harsh-2711',
  projectName: 'portfolio2.0',
  trailingSlash: false, // https://github.com/slorber/trailing-slash-guide

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // you can use this field to set useful metadata like html lang
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs/',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // editUrl: 'https://github.com/Lyearn/mgod/tree/main/docs/',
          exclude: ['**/README.md'],
          breadcrumbs: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // https://www.swyx.io/tailwind-docusaurus-2022
    async function tailwindPlugin(context, options) {
      const tailwindCssNesting = await import('tailwindcss/nesting');
      const tailwindCss = await import('tailwindcss');
      const autoprefixer = await import('autoprefixer');

      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwindCssNesting);
          postcssOptions.plugins.push(tailwindCss);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    navbar: {
      title: 'Harsh Patel',
      logo: {
        alt: 'progress-logo',
        src: 'img/logo-with-text.svg',
      },
      items: [
        {
          'aria-label': 'GitHub',
          className: 'navbar-github-link',
          href: 'https://github.com/harsh-2711',
          position: 'right',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
