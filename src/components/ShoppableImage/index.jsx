import React from "react";
import styled from "styled-components";
import { Image } from "../Image";
import { Text } from "../Text";

const Wrapper = styled.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`;

const StyledText = styled(Text)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 0.5rem 0.75rem;
  background: var(--primary-black);
  color: var(--primary-white);

  @media (max-width: 767px) {
    bottom: 0.75rem;
    left: 0.75rem;
  }
`;

export const ShoppableImage = (props) => {
  const { text, link } = props;

  return (
    <Wrapper>
      <a href={link}>
        <Image {...props} />
        {text && <StyledText heading>{text}</StyledText>}
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
  sizes: "(max-width: 767px) 50vw, 298px",
};
