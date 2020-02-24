import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-intl-redux";

import { Hello } from "./components/Hello";

/**
 * Redux store setup
 */
import reducers, { RootState } from "./reducers";
import { langSwitchAction } from "./actions";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function configureStore(initialState?: RootState) {
  // compose enhancers
  const enhancer = composeEnhancers();
  // create store
  return createStore(reducers, initialState!, enhancer);
}

const store = configureStore();

store.dispatch(langSwitchAction("ja"));

ReactDOM.render(
  <Provider store={store}>
    <Hello compiler="TypeScript" framework="React" />
  </Provider>,
  document.getElementById("root")
);
