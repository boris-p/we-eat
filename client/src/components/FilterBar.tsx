import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import "./RcSlider.custom.css";
import { connect } from "react-redux";

import { filterRestaurantsByRange } from "../actions/restaurantActions";
import { AppState } from "../reducers";
import { getRestaurants } from "../selectors/RestaurantSelectors";
import {
  DELIVERY_TIME_FILTER,
  REVIEWS_FILTER,
  STARS_FILTER,
} from "../reducers/restaurants";
import { genMarks } from "../lib/filterMarksHelper";
import { RestaurantObj } from "../models/Restaurant";

import styles from "./FilterBar.module.css";

interface StateFromProps {
  restaurants: RestaurantObj[];
}
const mapStateToProps = (state: AppState): StateFromProps => {
  return { restaurants: getRestaurants(state) };
};

const mapDispatchToProps = {
  filterRestaurantsByRange,
};

const FilterBar: React.FC<StateFromProps & typeof mapDispatchToProps> = ({
  restaurants,
  filterRestaurantsByRange,
}) => {
  const maxNumOfReviews = restaurants.reduce(
    (max, restaurant) =>
      max > restaurant.numOfReviews ? max : restaurant.numOfReviews,
    0
  );
  if (restaurants.length === 0) {
    return <div>Loading Restaurants...</div>;
  }
  return (
    <Row>
      <Col className={styles.filterBar}>
        <div className="d-flex flex-row flex-wrap">
          <div className={styles.slider}>
            <label>Delivery Time(Min)</label>
            <Slider
              onChange={(value: number) =>
                filterRestaurantsByRange(DELIVERY_TIME_FILTER, 0, value)
              }
              min={0}
              max={120}
              marks={genMarks(0, 120, 15)}
              defaultValue={60}
            />
          </div>
          <div className={styles.slider}>
            <label>stars</label>
            <Range
              min={0}
              max={10}
              marks={genMarks()}
              defaultValue={[0, 10]}
              onChange={(values: number[]) =>
                filterRestaurantsByRange(STARS_FILTER, values[0], values[1])
              }
            />
          </div>
          <div className={styles.slider}>
            <label>Reviews</label>
            <Range
              min={0}
              max={maxNumOfReviews}
              defaultValue={[0, maxNumOfReviews]}
              marks={genMarks(0, maxNumOfReviews, maxNumOfReviews)}
              onChange={(values: number[]) =>
                filterRestaurantsByRange(REVIEWS_FILTER, values[0], values[1])
              }
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
