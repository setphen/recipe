import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/recipe.js',
    format: 'cjs',
  },
  external: [
    'emotion',
    'emotion-theming',
    'polished',
    'prop-types',
    'react',
    'react-dom',
    'react-emotion',
  ],
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['emotion', ['@babel/plugin-proposal-class-properties', {loose: false}]],
    }),
    resolve(),
    commonjs(),
    uglify(),
  ],
};
