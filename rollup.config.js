// @ts-check
import { builtinModules } from 'node:module';
import packageJson from './package.json' assert { type: "json" };
import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'src/main.ts',
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
  external: [
    ...builtinModules,
    ...(Object.keys(packageJson.devDependencies)),
    // ...(Object.keys(packageJson.peerDependencies)),
    // ...(Object.keys(packageJson.dependencies)),
  ],
};
export default config;