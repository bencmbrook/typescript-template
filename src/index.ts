import type { Input } from './types.js';

export function sayHello(input: Input): void {
  console.log('Hello', input.message);
}
