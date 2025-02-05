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
    ignores: ['dist'],
  },
);

export default eslintConfig;
