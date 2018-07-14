module.exports = (dato, root, i18n) => {
  i18n.availableLocales.forEach(locale => {
    root.directory(`src/homepage`, languageDir => {
      i18n.withLocale(locale, () => {
        languageDir.createPost(
          `../index.md`, "yaml", {
            frontmatter: { 
              homepage: dato.homePage.toMap()
            },
          }
        );
        //languageDir.createDataFile('homePage.md', 'yaml', itemToJson(dato.homePage));
        //languageDir.createDataFile('synths.md', 'yaml', itemsToJson(dato.synths));
      })
    })
    root.directory(`src/synths`, synthDir => {
      // ...iterate over the "synth" records...
      dato.synths.forEach((synth) => {
        // ...and create a markdown file for each synth!
        synthDir.createPost(
          `${synth.name}.md`, "yaml", {
            frontmatter: { 
              synth: synth.toMap(),
              name: synth.name
            }
          }
        );
      });
    });
  });
};

function itemsToJson (items) {
  return items.map(itemToJson)
}

function itemToJson (item) {
  const itemJson = item.toMap();
  return itemJson
}