import React from "react";
import { Row, Col } from "react-bootstrap";

import { RestaurantObj } from "../../models/Restaurant";

import styles from "./Restaurant.module.css";

interface RestaurantProps {
  restaurantObj: RestaurantObj;
  onClick: () => void;
}

const Restaurant: React.FC<RestaurantProps> = props => {
  const restaurant = props.restaurantObj;
  return (
    <div className={styles.restaurantItem} onClick={props.onClick}>
      <Row>
        <Col sm={8}>
          <h4>
            <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
              {restaurant.name}
            </a>{" "}
          </h4>
          <div className={styles.cuisines}>
            {restaurant.cuisines.map(cuisine => cuisine.name).join(", ")}
          </div>
        </Col>
        <Col sm={4}>
          <div className="reviews">
            <span className={styles.star}>★</span>
            <span className={styles.rating}>{restaurant.rating}</span>
            <span className={styles.ratingOutOf}>/10</span>
            <div
              className={styles.numOfReviews}
            >{`${restaurant.numOfReviews} reviews`}</div>
          </div>
        </Col>
      </Row>
      <div className={`${styles.address}mt-2`}>{restaurant.address}</div>
    </div>
  );
};

export default Restaurant;
