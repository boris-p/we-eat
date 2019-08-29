export enum FILTER_TYPE {
  TEXT,
  RANGE
}
export interface Filter {
  filterType: FILTER_TYPE;
  active: boolean;
}
export interface TextFilter<T> extends Filter {
  value: string;
  filterFn: (t: T, filter: TextFilter<T>) => boolean;
}
export interface RangeFilter extends Filter {
  minValue: number;
  maxValue: number;
  field: string;
}
export type FilterMap = { [s: string]: Filter };

export function textFilter<T>(
  value: string,
  filterFn: (t: T, filter: TextFilter<T>) => boolean,
  active = false
): TextFilter<T> {
  return {
    filterType: FILTER_TYPE.TEXT,
    value,
    filterFn,
    active,
  };
}
export function rangeFilter(
  minValue: number,
  maxValue: number,
  field: string,
  active = false
): RangeFilter {
  return {
    filterType: FILTER_TYPE.RANGE,
    field,
    minValue,
    maxValue,
    active,
  };
}
