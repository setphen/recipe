/* eslint-disable */
const {basename, relative, dirname} = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const extract = require('linaria/lib/babel/extract');
const {addSideEffect} = require('@babel/helper-module-imports');
const stylis = require('stylis');

module.exports = function linaria(context, options) {
  const {visitor} = extract(context, {
    displayName: false,
    evaluate: true,
    ignore: /node_modules/,
    ...options,
  });

  return {
    name: 'linaria-extract',
    visitor: {
      Program: {
        enter(path, state) {
          visitor.Program.enter(path, state);
          //
        },
        exit(path, state) {
          // if no styles were create for this file, no more work to do
          if (!Object.keys(state.rules).length) return;

          const {filename} = state.file.opts;

          const outputFilename = relative(
            process.cwd(),
            filename.replace(/\.[^.]+$/, '.linaria.css')
          );

          let cssText = '';

          Object.keys(state.rules).forEach(selector => {
            cssText += `${stylis(selector, state.rules[selector].cssText)}\n`;
          });

          if (!cssText) return;

          mkdirp.sync(dirname(outputFilename));

          fs.writeFileSync(outputFilename, cssText);

          addSideEffect(path, './' + basename(outputFilename));
        },
      },
    },
  };
};
/* eslint-enable */
