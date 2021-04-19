import React from "react";
import styled from "styled-components";

const ButtonBase = styled.a`
  display: flex;
  align-items: center;
  border-radius: 3px;
  overflow: hidden;
  width: fit-content;
  border: 1px solid var(--primary-black);
  padding: ${(props) => (props.text ? `0.75rem 1rem` : `1rem`)};
  background: inherit;
  border-radius: var(--border-radius);
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
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  svg {
    display: block;
    margin-right: ${(props) => props.text && props.icon && "0.35rem"};
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

export const Button = ({ text, link, variant, className, onClick, icon }) => {
  let Component;
  let Icon = icon;

  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component
      href={link}
      as={link ? "a" : "button"}
      className={className}
      onClick={onClick}
      icon
      text
    >
      {icon && <Icon size={16} />}
      {text && text}
    </Component>
  );
};
