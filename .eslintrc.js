module.exports = {
  extends: [require.resolve('@ezcater/ez-scripts/eslint')],
  rules: {
    'no-nested-ternary': 'off',
    'prefer-destructuring': 'off',
    'import/no-namespace': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/prefer-interface': 'off',
  },
};