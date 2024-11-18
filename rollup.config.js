// @ts-check
import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' with { type: 'json' };

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.exports.import.default,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: packageJson.exports.require.default,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
  {
    input: 'bin/cli.ts',
    output: [
      {
        banner: '#!/usr/bin/env node --input-type=module',
        file: packageJson.bin,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
];
export default config;
