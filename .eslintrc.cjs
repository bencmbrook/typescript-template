// @ts-check

/**
 * @type {import('@typescript-eslint/eslint-plugin').configs}')}
 */
const eslintConfig = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
};

module.exports = eslintConfig;
