import * as faker from "faker";

type Cuisines = { [s: string]: string };
const AVAILIBLE_CUISINES = [
  "asian",
  "american",
  "vegan",
  "greek",
  "turkish",
  "puerto-russian",
  "anglo-indian",
];
function _generateCuisines(): Cuisines {
  const cuisines: Cuisines = {};
  const numOfCuisinesToGet = Math.floor(
    Math.random() * AVAILIBLE_CUISINES.length
  );

  for (let i = 0; i < numOfCuisinesToGet; i++) {
    const cuisine =
      AVAILIBLE_CUISINES[Math.floor(Math.random() * AVAILIBLE_CUISINES.length)];
    cuisines[cuisine] = cuisine;
  }
  return cuisines;
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

export function generateRestaurants(count = 1) {
  const restaurants = [];
  for (let i = 0; i < count; i++) {
    restaurants.push(_restaurantFactory());
  }
  return restaurants;
}
