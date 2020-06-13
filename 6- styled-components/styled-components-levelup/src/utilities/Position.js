import { css } from "styled-components";

export const fixed = ({
  x = 0,
  y = 0,
  xProp = "left",
  yProp = "top",
} = {}) => css`
  position: fixed;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;

export const absoulte = ({
  x = 0,
  y = 0,
  xProp = "left",
  yProp = "top",
} = {}) => css`
  position: absoulte;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;
