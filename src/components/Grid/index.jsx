import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${(props) => props.gridGap};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${(props) => props.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${(props) => props.gridGapMob};
  }
`;

export const Grid = (props) => {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
};

Grid.defaultProps = {
  gridGap: "1rem",
  wrapWidth: 340,
};
