import { combineReducers } from "redux";
import { intlReducer } from "react-intl-redux";

interface IntlState {
  locale: string;
  messages: {};
}

export type RootState = {
  intl: IntlState,
};

const reducers = combineReducers({
  intl: intlReducer,
});

export default reducers;
