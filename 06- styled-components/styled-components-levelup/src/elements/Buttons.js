import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { lighten } from "polished";
import { teal, elevation } from "../utilities";

const BUTTON_MODIFIERS = {
  small: () => `
  font-size : 1rem;
  padding : 3px 10px;
  `,

  cancel: ({theme}) => `
  background : ${theme.colors.secondary};
  `,
};

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 2rem;
  transition: 0.3s ease box-shadow background;
  background: ${teal};
  ${elevation[1]};

  &:hover {
    cursor: pointer;
    background: ${lighten(0.2, teal)};
    ${elevation[2]};
  }

  ${({ size }) => {
    if (size === "small") {
      return `
        font-size : 1rem;
        padding : 3px 10px;
      `;
    }
  }}

  ${({ type }) => {
    if (type === "cancel") {
      return `
      background: tomato;
      &:hover {
        background: ${lighten(0.2, "tomato")};
      }
      `;
    }
  }}


  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

// extending and styling additional components
export const CancelButton = styled(Button)`
  background: tomato;
`;
