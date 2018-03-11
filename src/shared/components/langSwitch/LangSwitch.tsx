import * as React from "react";

import "./LangSwitch.css";

export interface LangSwitchProps {
  switchLang: Function;
}

const LangSwitch: React.SFC<LangSwitchProps> = ({ switchLang }) => {

  function onChange(e: React.FormEvent<HTMLSelectElement>) {
    switchLang((e.target as HTMLSelectElement).value);
  }

  return (
    <select onChange={onChange}>
      <option value="ja">Japanese</option>
      <option value="en">English</option>
    </select>
  )
};

export default LangSwitch;
