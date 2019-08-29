import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import "./RcSlider.custom.css";
import styles from "./FilterBar.module.css";

const handleAfterChange = (v: number) => {
  console.log("v is", v);
};
const FilterBar = () => (
  <Row>
    <Col className={styles.filterBar}>
      {/* <div className={styles.slider}> */}
      {/*  <input */}
      {/*    type="text" */}
      {/*    defaultValue="search me" */}
      {/*    value="do some hook stuff here to save a local state" */}
      {/*  /> */}
      {/* </div> */}
      <div className="d-flex flex-row flex-wrap">
        <div className={styles.slider}>
          <label>Delivery Time(Min)</label>
          <Slider
            onChange={handleAfterChange}
            min={0}
            max={120}
            marks={{ 0: "0", 60: "60", 120: "120" }}
            step={null}
          />
        </div>
        <div className={styles.slider}>
          <label>stars</label>
          <Range
            min={0}
            max={10}
            marks={{ 0: "0", 1: "1", 2: "2" }}
            step={null}
          />
        </div>
        <div className={styles.slider}>
          <label>Reviews</label>
          <Range />
        </div>
      </div>
    </Col>
  </Row>
);

export default FilterBar;
