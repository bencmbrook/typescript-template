// @ts-check
import eslint from '@eslint/js';
// @ts-expect-error eslint-plugin-unicorn is not typed
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

const eslintConfig = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        project: true,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);

export default eslintConfig;
