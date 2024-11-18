# typescript-template

Starter template for TypeScript projects. Using tsx, Node 20, ESLint, Prettier.

Publishable Node modules (from `src/index.ts`) and a CLI (from `bin/cli.ts`) which is usable by npx.

The only dependency is `zod` (you can [remove it](#remove-zod)) and `consola` (for the CLI). Check out [extra boilerplate](#extra-boilerplate) for other common modifications.

## Usage

### TypeScript

```ts
import { sayHello } from 'todo';

sayHello({
  message: 'world!',
});
```

### CLI

```console
$ npx todo

Hello world!
```

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

#### Add dotenv with `scripts/` folder support

```sh
pnpm add -D dotenv-cli
pnpm add dotenv
touch .env.local
mkdir -p scripts
```

Add to [package.json](package.json):

```diff
  "scripts": {
+   "script": "dotenv -e .env.local -- tsx"
  }
```

Then call `pnpm script ./scripts/my-script.ts`.

#### Remove zod

```sh
pnpm remove zod
pnpm del src/validation.ts
```
