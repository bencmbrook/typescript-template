// @ts-check

/** @type import('prettier').Config */
const prettierConfig = {
  plugins: [require.resolve('@ianvs/prettier-plugin-sort-imports')],
  singleQuote: true,
};

module.exports = prettierConfig;
