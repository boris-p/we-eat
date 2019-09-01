export function rangeFilterDefaultFn(
  objectVal: any,
  minValue: number,
  maxValue: number
): boolean {
  if (typeof objectVal !== "number") return false;
  return objectVal >= minValue && objectVal <= maxValue;
}
