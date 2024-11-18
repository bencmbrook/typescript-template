import { sayHello } from '../src/index.js';
import { Input } from '../src/types.js';

async function main() {
  const input: Input = {
    message: 'world!',
  };

  sayHello(input);
  await Promise.resolve();
}

await main();
