import { AnyAction } from "redux";

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
  filterFn: (t: T, value: string) => boolean;
}
export interface RangeFilter<T> extends Filter {
  minValue: number;
  maxValue: number;
  field: keyof T;
  filterFn: (fieldValue: any, minValue: number, maxValue: number) => boolean;
}
export type FilterMap = { [s: string]: Filter };

export function textFilter<T>(
  value: string,
  filterFn: (t: T, value: string) => boolean,
  active = false
): TextFilter<T> {
  return {
    filterType: FILTER_TYPE.TEXT,
    value,
    filterFn,
    active,
  };
}
export function rangeFilter<T>(
  field: keyof T,
  filterFn: (fieldValue: any, minValue: number, maxValue: number) => boolean,
  minValue = -Infinity,
  maxValue = Infinity,
  active = false
): RangeFilter<T> {
  return {
    filterType: FILTER_TYPE.RANGE,
    field,
    minValue,
    maxValue,
    filterFn,
    active,
  };
}

export function updateFilterState<T>(filter: Filter, action: AnyAction) {
  if (filter.filterType === FILTER_TYPE.TEXT) {
    const updatedFilter = { ...filter } as TextFilter<T>;
    updatedFilter.active = true;
    updatedFilter.value = action.payload.value;
    return updatedFilter;
  } else if (filter.filterType === FILTER_TYPE.RANGE) {
    const updatedFilter = { ...filter } as RangeFilter<T>;
    updatedFilter.active = true;
    updatedFilter.minValue = action.payload.minValue;
    updatedFilter.maxValue = action.payload.maxValue;
    return updatedFilter;
  }
}
// go over all of the filters and apply the filter to the list of objects
export function applyFilters<T>(objects: T[], filters: FilterMap): T[] {
  let filteredObjects: T[] = objects;

  Object.values(filters).forEach(filter => {
    if (filter.active) {
      if (filter.filterType === FILTER_TYPE.TEXT) {
        const fltr = filter as TextFilter<T>;
        filteredObjects = filteredObjects.filter(restaurant =>
          fltr.filterFn(restaurant, fltr.value)
        );
      } else if (filter.filterType === FILTER_TYPE.RANGE) {
        const fltr = filter as RangeFilter<T>;
        filteredObjects = filteredObjects.filter(restaurant =>
          fltr.filterFn(restaurant[fltr.field], fltr.minValue, fltr.maxValue)
        );
      }
    }
  });
  return filteredObjects;
}
