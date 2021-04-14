import React from "react";
import styled from "styled-components";

const ButtonBase = styled.a`
  display: inline-block;
  border-radius: 3px;
  overflow: hidden;
  width: fit-content;

  button {
    border: 1px solid var(--primary-black);
    padding: 0.5rem 1rem;
    background: inherit;
    border-radius: inherit;
    color: inherit;
    font-size: 1rem;
    cursor: pointer;
    font-family: "HelveticaNeue-CondensedBold", "HelveticaNeueBoldCondensed",
      "HelveticaNeue-Bold-Condensed", "Helvetica Neue Bold Condensed",
      "HelveticaNeueBold", "HelveticaNeue-Bold", "Helvetica Neue Bold",
      "Helvetica Neue", "Oswald", Arial, sans-serif;
    font-weight: 400;
    font-stretch: condensed;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1.7;
  }
`;

const FillButton = styled(ButtonBase)`
  background: var(--primary-black);
  color: var(--primary-white);

  &:hover {
    background: var(--primary-white);
    color: var(--primary-black);
  }
`;

const OutlineButton = styled(ButtonBase)`
  background: none;
  color: var(--primary-black);

  &:hover {
    background: var(--primary-black);
    color: var(--primary-white);
  }
`;

export const Button = ({ text, link, variant }) => {
  let Component;

  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component href={link}>
      <button>{text}</button>
    </Component>
  );
};
