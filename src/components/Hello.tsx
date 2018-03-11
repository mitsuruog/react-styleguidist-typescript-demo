import * as React from "react";
import { FormattedMessage } from "react-intl";

import Badge from "../shared/components/badge/Badge";
import LangSwitch from "../shared/components/langSwitch/LangSwitch.connect";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <LangSwitch />
        <p><FormattedMessage id={"greeting"} /></p>
        <h2>Badge</h2>
        <Badge>Normal</Badge>
        <Badge color={"red"}>Red</Badge>
        <Badge color={"green"}>Green</Badge>
        <Badge color={"blue"}>Blue</Badge>
      </div>
    );
  }
}
