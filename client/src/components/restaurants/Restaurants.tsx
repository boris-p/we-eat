import React from "react";

import Restaurant, { RestaurantObj } from "./Restaurant";
import "./Restaurants.css";

interface RestaurantsProps {
  restaurantClick: (rest: RestaurantObj) => void;
  restaurantList: RestaurantObj[];
}
const Restaurants = (props: RestaurantsProps) => (
  <div className="restaurant-list">
    <div className="info-line">
      Showing {props.restaurantList.length} restaurants
    </div>
    {props.restaurantList.map(restaurant => (
      <Restaurant
        key={restaurant.id}
        restaurantObj={restaurant}
        onClick={props.restaurantClick}
      />
    ))}
  </div>
);

export default Restaurants;
