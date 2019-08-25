import React from "react";

import "./Header.css";

const Header = () => (
  <>
    <header className="App-header row">
      <div className="site-title-container col text-center align-self-center">
        <h1>WE EAT</h1>
        <h1 style={{ color: "white", height: "0", opacity: 0.1 }}>
          Your heart out
        </h1>
        <p>
          Bringing food to hungry people.
          <br /> You choose, you order, you pay, you eat. It's that simple
        </p>
      </div>
    </header>
  </>
);

export default Header;
