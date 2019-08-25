import * as faker from "faker";

function _restaurantFactory() {
  return {
    id: faker.random.uuid(),
    tenbisId: faker.random.uuid(),
    name: faker.company.catchPhrase(),
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
  };
}

export function generateRestaurants(count = 1) {
  const restaurants = [];
  for (let i = 0; i < count; i++) {
    restaurants.push(_restaurantFactory());
  }
  return restaurants;
}
