const withTM = require('next-transpile-modules')([
  '@ezcater/recipe',
  '@react-stately/collections',
  '@react-stately/list',
  '@react-stately/selection',
  '@react-stately/utils',
  'playroom',
  'mdx-bundler/client',
]);

module.exports = withTM({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
});
