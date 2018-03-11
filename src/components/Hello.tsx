import * as React from "react";

import { Badge } from "../shared/components/badge/Badge";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h2>Badge</h2>
        <Badge>Normal</Badge>
        <Badge color={"red"}>Red</Badge>
        <Badge color={"green"}>Green</Badge>
        <Badge color={"blue"}>Blue</Badge>
      </div>
    );
  }
}
