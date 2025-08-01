import { parseArgs } from 'node:util';
import { createConsola } from 'consola';
import { Input } from '../helpers/validation.js';
import { sayHello } from '../index.js';

async function main() {
  const {
    values: {
      /** Standard CLI arguments */
      debug = process.env['DEBUG'] === '1',
      /** Script-specific CLI arguments */
      ...values
    },
  } = parseArgs({
    options: {
      message: {
        type: 'string',
        short: 'm',
      },
      // Standard CLI arguments
      debug: {
        type: 'boolean',
      },
    },
  });

  const consola = createConsola({
    level: debug ? 5 : 3,
  });
  consola.debug('Debug mode enabled:', debug);

  // Validate CLI arguments
  const result = await Input.safeParseAsync(values);
  if (!result.success) {
    for (const issue of result.error.issues) {
      consola.error(
        `\nInvalid input:\n - For argument "--${issue.path.join('.')}". Reason: ${issue.message}.`,
      );
    }
    return;
  }

  // Call main function
  sayHello(result.data);

  consola.success('Done!');
}

await main();
