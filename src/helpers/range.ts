export function* range(start: number, stop: number, step: number = 1) {
  for (let i = start; i <= stop; i += step) {
    yield i;
  }
}
