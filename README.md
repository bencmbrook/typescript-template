# typescript-template

Starter template for TypeScript projects. Using tsx, Node 22, ESLint, Prettier.

Publishable Node modules (from `src/index.ts`) and a CLI (from `src/bin/cli.mts`) which is runnable via npx.

The only dependency is `zod` (you can [remove it](#remove-zod)) and `consola` (for the CLI). Check out [extra boilerplate](#extra-boilerplate) for other common modifications.

## Usage

### TypeScript

```ts
import { sayHello } from 'bencmbrook-typescript-template';

sayHello({
  message: 'world!',
});
```

### CLI

```console
$ npx bencmbrook-typescript-template --message=world

Hello world!
```

Replace `bencmbrook-typescript-template` in the package.json `"name"`.

## Developers

```sh
pnpm install
```

```sh
pnpm start
```

### Publishing

```sh
pnpm publish
```

This runs lint, test, and build before publishing.

### Extra boilerplate

#### Remove zod

```sh
pnpm remove zod
rm src/helpers/validation.ts
```

#### Remove CLI

```sh
pnpm remove consola
rm -rf src/bin
```

Edit `package.json`:

```diff
-  "bin": "./dist/esm/bin/cli.mjs",
```

```diff
   "files": [
     "dist",
     "src",
-    "bin"
   ],
```

```diff
   "scripts": {
     "dev": "tsx --watch src/index.ts",
-    "cli": "tsx src/bin/cli.mts",
-    "build": "tshy && echo '#!/usr/bin/env node\n'\"$(cat ./dist/esm/bin/cli.mjs)\" > ./dist/esm/bin/cli.mjs",
+    "build": "tshy",
```
