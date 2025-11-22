
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
    'index.csr.html': {size: 980, hash: 'c37149128cfbf8d6e7f1f5f55999261a549d2ab05d92913514a87cf506961bb3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1387, hash: '1d27279012866301c7ddec975a381ba24b684ce2dea84cf70a4e767a2ef70418', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24259, hash: '4043ed7bc8be18c7c3005f7ae8721072ccea45b876e1de051a0bf58fdf0691bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TEC6ZZIG.css': {size: 142, hash: 'oc2kvQHchC4', text: () => import('./assets-chunks/styles-TEC6ZZIG_css.mjs').then(m => m.default)}
  },
};
