import React from "react";
import styled from "styled-components";
import { Image } from "../Image";

const Wrapper = styled.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }

  p {
    font-size: 1rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    background: #000;
    color: #fff;
    margin-bottom: 0;

    font-family: "HelveticaNeue-CondensedBold", "HelveticaNeueBoldCondensed",
      "HelveticaNeue-Bold-Condensed", "Helvetica Neue Bold Condensed",
      "HelveticaNeueBold", "HelveticaNeue-Bold", "Helvetica Neue Bold",
      "Helvetica Neue", "Oswald", Arial, sans-serif;
    font-weight: 400;
    font-stretch: condensed;
    text-transform: uppercase;
    letter-spacing: 0.02em;

    @media (max-width: 767px) {
      bottom: 0.75rem;
      left: 0.75rem;
    }
  }
`;

export const ShoppableImage = (props) => {
  const { text, link } = props;

  return (
    <Wrapper>
      <a href={link}>
        <Image {...props} />
        {text && <p>{text}</p>}
      </a>
    </Wrapper>
  );
};

ShoppableImage.defaultProps = {
  link: "/new-in",
  width: 240,
  height: 240,
  alt: "grid item alt",
  src: "https://media.missguided.com/i/missguided/playboy_storybook_default",
  sizes: "(max-width: 767px) 207px, 298px",
};
