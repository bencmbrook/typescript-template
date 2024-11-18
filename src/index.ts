import { Input } from './validation.js';

export function sayHello(input: Input): void {
  const { message } = Input.parse(input);
  console.log('Hello', message);
}
