# typescript-template

Starter template for TypeScript projects. Using tsx, Node 22, ESLint, Prettier.

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

#### Remove zod

```sh
pnpm remove zod
pnpm del src/validation.ts
```
