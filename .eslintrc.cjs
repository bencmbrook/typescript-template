// @ts-check

/**
 * @type {import('eslint').Linter.Config}
 */
const eslintConfig = {
  root: true,
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    es6: true,
    node: true,
  },
};

module.exports = eslintConfig;
