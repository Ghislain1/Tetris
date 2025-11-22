
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ghislain1.github.io/tetris/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/tetris"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 980, hash: '969926a4721933a29a2d62f31422d87c76ce0e76d3fca5a9c0c175974e0a2077', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1387, hash: '6a8bead4771743822f2dad9f4210fa34622702b9bdae48e55ab54a96a43cccab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24247, hash: 'c15b8f033a1998055bb91dd6c5f194c87e0b5e71aff70d8eb833890f1c57cc34', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TEC6ZZIG.css': {size: 142, hash: 'oc2kvQHchC4', text: () => import('./assets-chunks/styles-TEC6ZZIG_css.mjs').then(m => m.default)}
  },
};
