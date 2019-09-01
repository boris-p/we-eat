export interface Cuisine {
  id: number;
  name: string;
}
export function cuisineAdaptor(rawCuisine: Cuisine): Cuisine {
  return {
    id: rawCuisine.id,
    name: rawCuisine.name,
  };
}
