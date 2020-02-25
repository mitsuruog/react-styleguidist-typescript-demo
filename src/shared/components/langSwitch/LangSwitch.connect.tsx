import { connect } from "react-redux";

import LangSwitch, { LangSwitchProps } from "./LangSwitch";

import { langSwitchAction } from "../../../actions";

interface OwnProps {}

const mapStateToProps = (state: {}) => ({});

const mapDispatchToProps = (dispatch: Function, props: OwnProps) => ({
  switchLang: (locale: string) => dispatch(langSwitchAction(locale))
});

/**
 * @visibleName LangSwitch
 */
export default connect(mapStateToProps, mapDispatchToProps)(LangSwitch);
