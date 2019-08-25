import React from "react";

import Map from "./Map";
import Restaurants from "./Restaurants";
import { RestaurantObj } from "./Restaurant";
import { generateRestaurants } from "./test/RestaurantFactory";

const restaurantList = generateRestaurants(20);

const clickHandler = (rest: RestaurantObj) => {
  console.log(`clicked on ${rest.name}`);
};
const RestaurantsMain = () => (
  <div className="row">
    <div className="col-md-4">
      <Restaurants
        restaurantClick={clickHandler}
        restaurantList={restaurantList}
      />
    </div>
    <div className="col-md-8">
      <Map />
    </div>
  </div>
);

export default RestaurantsMain;
