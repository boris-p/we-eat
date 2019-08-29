import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import {
  addRestaurant,
  filterRestaurantsByText,
} from "../actions/restaurantActions";
import { AppState } from "../reducers";
import { getTextFilterValue } from "../selectors/RestaurantSelectors";
import { TEXT_FILTER } from "../reducers/restaurants";

import styles from "./Header.module.css";

interface StateFromProps {
  filteredText: string;
}

const mapDispatchToProps = {
  addRestaurant,
  filterRestaurantsByText,
};

const mapStateToProps = (state: AppState): StateFromProps => {
  return { filteredText: getTextFilterValue(state, TEXT_FILTER) };
};

type AllProps = StateFromProps & typeof mapDispatchToProps;

const Header: React.FC<AllProps> = props => (
  <Row className={styles.appHeader}>
    <Col className="site-title-container text-center align-self-center">
      <button
        type="button"
        className={`${styles.addRestaurant} float-right`}
        onClick={props.addRestaurant}
      >
        +
      </button>

      <h1 className={styles.mainTitle}>WE EAT</h1>
      <h1 style={{ color: "white", height: "0", opacity: 0.1 }}>
        Your heart out
      </h1>
      <p className={styles.titleTag}>
        Bringing food to hungry people. *
        <br /> You choose, you order, you pay, you eat. It's that simple
        <br />
        <br />
        <small>
          <strong>
            like, lunch hungry, not hungry hungry... still a good purpose though
          </strong>
        </small>
      </p>
      <div>
        <div>find a place to eat</div>
        <input
          type="text"
          onChange={event => {
            props.filterRestaurantsByText(TEXT_FILTER, event.target.value);
          }}
        />
      </div>
    </Col>
  </Row>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
