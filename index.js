var Metalsmith  = require('metalsmith');
var collections = require('metalsmith-collections');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var assets      = require('metalsmith-assets');

Metalsmith(__dirname)
  .metadata({
    title: "Roland Boutique",
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(collections({
    synths: {
      pattern: 'synths/*.md',
    },
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars',
    default: 'layout.hbs'
  }))
  .use(assets({
    source: './src/assets',
    destination: './assets'
  }))
  .build(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Site built!');
  }
});
