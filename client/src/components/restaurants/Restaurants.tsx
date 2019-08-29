import React from "react";

import { RestaurantObj } from "../../models/Restaurant";

import Restaurant from "./Restaurant";
import styles from "./Restaurants.module.css";

interface RestaurantsProps {
  restaurantClick: (rest: RestaurantObj) => void;
  restaurantList: RestaurantObj[];
}
const Restaurants = (props: RestaurantsProps) => (
  <div>
    <div className={styles.infoLine}>
      Showing {props.restaurantList.length} restaurants
    </div>
    {props.restaurantList.map(restaurant => (
      <Restaurant
        key={restaurant.id}
        restaurantObj={restaurant}
        onClick={() => props.restaurantClick(restaurant)}
      />
    ))}
  </div>
);

export default Restaurants;
