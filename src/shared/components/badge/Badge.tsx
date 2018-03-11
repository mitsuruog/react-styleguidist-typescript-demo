import * as React from "react";

import "./Badge.css";

export interface BadgeProps {
  color?: string;
  children?: React.ReactNode;
}

export const Badge: React.SFC<BadgeProps> = ({ color, children }) => {
  return (
    <span className={`badge badge-${color}`}>{children}</span>
  )
};
