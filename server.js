const bs = require('browser-sync').create();

bs.init({
  server: {
    index: 'index.html',
    baseDir: 'systemjs',
    routes: {
      "/node_modules": "node_modules"
    }
  }
});
