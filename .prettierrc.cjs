// @ts-check

/**
 * @type {import('prettier').Options}
 */
const prettierConfig = {
  plugins: [
    require.resolve(`@trivago/prettier-plugin-sort-imports`),
    require.resolve(`prettier-plugin-style-order`),
  ],
  singleQuote: true,
  // @ts-ignore option for @trivago/prettier-plugin-sort-imports
  importOrderSeparation: true,
  // @ts-ignore option for @trivago/prettier-plugin-sort-imports
  importOrder: [
    // React and React DOM
    '^react(-dom)?$',
    // Next and its submodules
    'next(/\\w+)?',
    // Other third party node modules
    '^(?!react|next)[@\\w-/]+$',
    // Path imports
    '^(\\.{1,2}\\/)*?[\\w-\\{\\}/]+(\\.stories)?$',
    // File imports (module)
    '^\\w+\\.\\w{3,4}$',
    // File imports (path)
    '^\\.{1,2}\\/.*?\\.\\w{3,4}$',
  ],
};

module.exports = prettierConfig;
