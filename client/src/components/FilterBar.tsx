import React from "react";
import { Row, Col } from "react-bootstrap";

import styles from "./FilterBar.module.css";

const FilterBar = () => (
  <Row>
    <Col className={styles.filterBar}>One day this will be a filter</Col>
  </Row>
);

export default FilterBar;
