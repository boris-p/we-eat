import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "react-bootstrap";

import { AppState } from "../../reducers";
import { selectRestaurant } from "../../actions/restaurantActions";
import { RestaurantObj } from "../../models/Restaurant";
import { getRestaurants } from "../../selectors/RestaurantSelectors";

import Map from "./Map";
import Restaurants from "./Restaurants";

interface StateFromProps {
  restaurants: RestaurantObj[];
}
const mapStateToProps = (state: AppState): StateFromProps => {
  return { restaurants: getRestaurants(state) };
};
const mapDispatchToProps = {
  selectRestaurant,
};
type AllProps = StateFromProps & typeof mapDispatchToProps;

const RestaurantsMain: React.FC<AllProps> = ({
  restaurants,
  selectRestaurant,
}) => (
  <Row>
    <Col md={6} lg={4}>
      <Restaurants
        restaurantClick={selectRestaurant}
        restaurantList={restaurants}
      />
    </Col>
    <Col md={6} lg={8}>
      <Map />
    </Col>
  </Row>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsMain);
