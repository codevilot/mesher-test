export function toFix(n: number) {
  return Math.floor(n * 10000000000) / 10000000000;
}
