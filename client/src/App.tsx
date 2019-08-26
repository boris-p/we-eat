import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterBar from "./components/FilterBar";
import RestaurantsMain from "./components/restaurants/RestaurantsMain";
import { AppState } from "./reducers";
import { addRestaurant } from "./actions/restaurantActions";

import "./App.css";

interface StateFromProps {
  text: string;
}
interface DispatchToProps {
  addRestaurant: typeof addRestaurant;
}

const mapDispatchToProps = {
  addRestaurant,
};
const mapStateToProps = (state: AppState): StateFromProps => {
  return { text: state.restaurants.text };
};
type AllProps = StateFromProps & DispatchToProps;

const App: React.FC<AllProps> = props => {
  return (
    <div className="main-layout">
      <div className="container-fluid">
        <Header addRestaurant={props.addRestaurant} />
        <FilterBar />
        <RestaurantsMain />
        <Footer />
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
