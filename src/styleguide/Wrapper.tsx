import * as React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-intl-redux";
import { addLocaleData } from "react-intl";
import * as jaLocale from "react-intl/locale-data/ja";

// add japanese localisation data
addLocaleData([...jaLocale]);

import { langSwitchAction } from "../actions";
import reducers, { RootState } from "../reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = (
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

function configureStore(initialState?: RootState) {
  // compose enhancers
  const enhancer = composeEnhancers();
  // create store
  return createStore(
    reducers,
    initialState!,
    enhancer
  );
}

const store = configureStore();

store.dispatch(langSwitchAction("ja"));

export default class Wrapper extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}
