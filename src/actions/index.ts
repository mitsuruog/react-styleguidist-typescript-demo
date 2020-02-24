import { createAction } from "typesafe-actions";
import { updateIntl, IntlState } from "react-intl-redux";

import { LANG_SWITCH } from "../constants";

import Message from "../shared/services/message";

export const langSwitchAction = createAction(LANG_SWITCH, action => {
  return (locale: string) =>
    updateIntl({ locale, messages: Message.getMessage(locale) });
});
