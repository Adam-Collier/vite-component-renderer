import React from "react";
import styled, { css } from "styled-components";

const TextElement = styled.p`
  --text-5xl: 64px;
  --text-4xl: 48px;
  --text-3xl: 36px;
  --text-2xl: 30px;
  --text-xl: 24px;
  --text-lg: 20px;
  --text-md: 18px;
  --text-base: 16px;
  --text-sm: 14px;
  --text-xs: 12px;
  --text-xxs: 10px;

  line-height: ${(props) => (props.heading ? 1.3 : 1.75)};
  font-weight: ${(props) => (props.heading ? 600 : 400)};
  font-family: ${(props) =>
    !props.heading && `"Helvetica Neue", Arial, sans-serif`};
  margin: 0;

  ${(props) =>
    props.heading &&
    css`
      font-family: "HelveticaNeue-CondensedBold", "HelveticaNeueBoldCondensed",
        "HelveticaNeue-Bold-Condensed", "Helvetica Neue Bold Condensed",
        "HelveticaNeueBold", "HelveticaNeue-Bold", "Helvetica Neue Bold",
        "Helvetica Neue", "Oswald", Arial, sans-serif;
      font-weight: 600;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  & + * {
    margin-top: 1.45rem;
  }

  @media (max-width: 767px) {
    --text-5xl: 48px;
    --text-4xl: 36px;
    --text-3xl: 30px;
    --text-2xl: 24px;
    --text-xl: 20px;
    --text-lg: 18px;
    --text-md: 16px;
    --text-base: 14px;
    --text-sm: 12px;
    --text-xs: 10px;
    --text-xxs: 8px;
  }
`;

export const Text = (props) => {
  const { element, children, size, align, heading } = props;
  return (
    <TextElement
      as={element}
      style={{ fontSize: `var(--text-${size})`, textAlign: align }}
      heading={heading}
    >
      {children}
    </TextElement>
  );
};

Text.defaultProps = {
  element: "p",
  type: "header",
  fontSize: "1rem",
  size: "base",
  align: "left",
};
