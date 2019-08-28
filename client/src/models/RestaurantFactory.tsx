import * as faker from "faker";

import { Cuisine } from "./Cuisine";
import { RestaurantObj } from "./Restaurant";

const AVAILIBLE_CUISINES = [
  { id: 1, name: "asian" },
  { id: 2, name: "american" },
  { id: 3, name: "greek" },
  { id: 13, name: "vegan" },
  { id: 15, name: "puerto-russian" },
  { id: 16, name: "anglo-indian" },
];

function _generateCuisines(): Cuisine[] {
  const cuisinesObj: { [s: string]: Cuisine } = {};
  const numOfCuisinesToGet = Math.floor(
    Math.random() * AVAILIBLE_CUISINES.length
  );
  for (let i = 0; i < numOfCuisinesToGet; i++) {
    const cuisine =
      AVAILIBLE_CUISINES[Math.floor(Math.random() * AVAILIBLE_CUISINES.length)];
    cuisinesObj[cuisine.id] = cuisine;
  }
  return Object.values(cuisinesObj);
}
function _restaurantFactory() {
  return {
    id: faker.random.uuid(),
    tenbisId: faker.random.uuid(),
    name: faker.random.words(2),
    url: faker.internet.url(),
    rating: faker.random.number({ min: 0, max: 10 }),
    numOfReviews: faker.random.number(200),
    address: `${faker.address.streetName()} ${faker.address.streetAddress()}, ${faker.address.city()}`,
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    deliveryTime: faker.random.number({ min: 5, max: 120 }),
    phone: faker.phone.phoneNumber(),
    logoUrl: faker.image.food(60, 60),
    imgUrl: faker.image.food(600, 600),
    cuisines: _generateCuisines(),
  };
}

export function generateRestaurants(count = 1): RestaurantObj[] {
  const restaurants = [];
  for (let i = 0; i < count; i++) {
    restaurants.push(_restaurantFactory());
  }
  return restaurants;
}
export function generateRestaurant(): RestaurantObj {
  return generateRestaurants()[0];
}
