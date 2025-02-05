// @ts-check
import eslint from '@eslint/js';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

/**
 * @type {import('@typescript-eslint/utils/ts-eslint').Linter.ConfigType}
 */
const eslintConfig = tseslint.config(
  eslint.configs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  {
    // CJS compatibility for src directory
    files: ['src/**/*'],
    // The bin directory is always ESM
    ignores: ['src/bin/**/*'],
    rules: {
      // Ban top-level await
      'unicorn/prefer-top-level-await': 'off',
      'no-restricted-syntax': [
        'error',
        {
          // Matches await expressions at the top level (direct child of Program)
          selector: 'Program > ExpressionStatement > AwaitExpression',
          message: 'Top-level await is not allowed in CJS-compatible files.',
        },
      ],
      // Ban default exports
      'no-restricted-exports': [
        'error',
        {
          restrictDefaultExports: {
            direct: true,
            named: true,
            defaultFrom: true,
            namedFrom: true,
            namespaceFrom: true,
          },
        },
      ],
    },
  },
  {
    ignores: ['dist', '.tshy-build'],
  },
);

export default eslintConfig;
