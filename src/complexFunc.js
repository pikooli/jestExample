import { sum, div, multi, sub } from "./simpleFunctions";

export function complexFunc(a, b) {
  return multi(div(sum(a, b), 2), 2);
}
