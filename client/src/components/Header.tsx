import React from "react";

import "./Header.css";

interface HeaderProps {
  addRestaurant: () => void;
}
const Header: React.FC<HeaderProps> = props => (
  <>
    <header className="App-header row">
      <div className="site-title-container col text-center align-self-center">
        <button
          type="button"
          className="add-restaurant float-right"
          onClick={props.addRestaurant}
        >
          +
        </button>

        <h1 className="main-title">WE EAT</h1>
        <h1 style={{ color: "white", height: "0", opacity: 0.1 }}>
          Your heart out
        </h1>
        <p className="title-tag">
          Bringing food to hungry people. *
          <br /> You choose, you order, you pay, you eat. It's that simple
          <br />
          <br />
          <small>
            <strong>
              like, lunch hungry, not hungry hungry... still a good purpose
              though
            </strong>
          </small>
        </p>
      </div>
    </header>
  </>
);

export default Header;
