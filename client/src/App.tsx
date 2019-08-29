import React, { useEffect } from "react";
import { connect } from "react-redux";

import styles from "./App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterBar from "./components/FilterBar";
import RestaurantsMain from "./components/restaurants/RestaurantsMain";
import { AppState } from "./reducers";
import { loadRestaurants } from "./actions/restaurantActions";
import { getRestaurantsText } from "./selectors/RestaurantSelectors";

interface StateFromProps {
  text: string;
}

const mapDispatchToProps = {
  loadRestaurants,
};
const mapStateToProps = (state: AppState): StateFromProps => {
  return { text: getRestaurantsText(state) };
};
type AllProps = StateFromProps & typeof mapDispatchToProps;

const App: React.FC<AllProps> = ({ loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <div className={styles.mainLayout}>
      <div className="container-fluid">
        <Header />
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
