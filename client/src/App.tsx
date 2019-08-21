import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "./reducers";
import { testAction } from "./actions/restaurantActions";

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
    <div className="container-fluid">
      <header className="App-header">
        <div>
          hello we eat
          <div>text from reducer is {props.text}</div>
        </div>
      </header>
    </div>
  );
};

export default connect<StateFromProps, {}, {}, AppState>(mapStateToProps)(App);
