import React from 'react';
// import logo from './logo.svg';
import {connect} from 'react-redux'
import {AppState} from "./reducers";
import {Dispatch} from "redux";
import {testAction} from "./actions/restaurantActions";

interface IStateFromProps {
    text: string,

}

type AllProps = IStateFromProps & { dispatch: Dispatch<any> }

const mapStateToProps = (state: AppState): IStateFromProps => {
    return {text: state.restaurants.text}
};

const App: React.FC<AllProps> = (props) => {
    props.dispatch(testAction('hello world'))
    return (
        <div className="container-fluid">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <div>
                    hello we eat
                    <div>
                        text from reducer is {props.text}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default connect<IStateFromProps, {}, {}, AppState>(mapStateToProps)(App);
