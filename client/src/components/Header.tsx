import React from "react";
import { Row, Col } from "react-bootstrap";

import styles from "./Header.module.css";

interface HeaderProps {
  addRestaurant: () => void;
}
const Header: React.FC<HeaderProps> = props => (
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
    </Col>
  </Row>
);

export default Header;
