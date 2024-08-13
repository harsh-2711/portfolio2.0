import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'about',
        'education',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Work Experience',
      items: [
        'superr',
        'lyearn',
        'headout',
        'open_source'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Projects',
      items: [
        'pied_piper_lite',
        'magic_qr',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Connect',
      items: [
        {
          type: 'html',
          value: '<a href="https://github.com/harsh-2711" target=”_blank” class="menu__link menuExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-DocSidebarItem-Link-styles-module"> GitHub <img src="/icon/arrow-top-right.svg" alt="link" width="12" style="margin-left: 5px;"/> </a>'
        },
        {
          type: 'html',
          value: '<a href="https://x.com/harsh_2711" target=”_blank” class="menu__link menuExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-DocSidebarItem-Link-styles-module"> Twitter <img src="/icon/arrow-top-right.svg" alt="link" width="12" style="margin-left: 5px;"/> </a>'
        },
        {
          type: 'html',
          value: '<a href="https://linkedin.com/in/harsh-t-patel" target=”_blank” class="menu__link menuExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-DocSidebarItem-Link-styles-module"> LinkedIn <img src="/icon/arrow-top-right.svg" alt="link" width="12" style="margin-left: 5px;"/> </a>'
        },
      ],
      collapsed: false,
    },
  ],
};

export default sidebars;
