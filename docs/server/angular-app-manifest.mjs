
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
    'index.html': {size: 24247, hash: '710d8d7e1d4f849c41a47b0ffd59773959a8a0347396bb232bd568e4905e224e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TEC6ZZIG.css': {size: 142, hash: 'oc2kvQHchC4', text: () => import('./assets-chunks/styles-TEC6ZZIG_css.mjs').then(m => m.default)}
  },
};
