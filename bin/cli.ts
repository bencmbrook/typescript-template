import { parseArgs } from 'node:util';
import { sayHello } from '../src/index.js';
import { Input } from '../src/types.js';

async function main() {
  const {
    values: { message },
  } = parseArgs({
    options: {
      message: {
        type: 'string',
        short: 'm',
      },
    },
  });

  const input: Input = {
    message: message ?? 'world!',
  };

  sayHello(input);
  await Promise.resolve();
}

await main();
