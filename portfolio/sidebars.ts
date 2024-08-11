import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'about',
        'education',
        'connect'
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
        'eyes',
      ],
      collapsed: false,
    },
  ],
};

export default sidebars;
