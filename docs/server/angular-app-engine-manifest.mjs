
export default {
  basePath: 'https://ghislain1.github.io/tetris',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
