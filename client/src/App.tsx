import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import RestaurantsMain from "./components/restaurants/RestaurantsMain";
import { AppState } from "./reducers";
import { testAction } from "./actions/restaurantActions";

import "./App.css";

interface StateFromProps {
  text: string;
}

type AllProps = StateFromProps & { dispatch: Dispatch<any> };

const mapStateToProps = (state: AppState): StateFromProps => {
  return { text: state.restaurants.text };
};

const App: React.FC<AllProps> = props => {
  props.dispatch(testAction("hello world"));
  return (
    <div className="main-layout">
      <div className="container-fluid">
        <Header />
        <FilterBar />
        <RestaurantsMain />
      </div>
    </div>
  );
};

export default connect<StateFromProps, {}, {}, AppState>(mapStateToProps)(App);
