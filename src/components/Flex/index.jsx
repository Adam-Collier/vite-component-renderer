import React from "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: wrap;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  /* use this to emulate the gap property */
  /* only works horizontally */
  margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
  width: calc(100% + var(--gap));

  > * {
    flex: ${(props) => props.wrapWidth && `1 1 ${props.wrapWidth}px`};
    /* use this to emulate the gap property */
    /* only works horizontally */
    margin: var(--gap) 0 0 var(--gap);
  }
`;

export const Flex = (props) => {
  const {
    children,
    gap,
    direction = "row",
    alignItems,
    justifyContent,
    wrapWidth,
  } = props;
  return (
    <FlexWrapper
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      direction={direction}
      wrapWidth={wrapWidth}
      style={{ "--gap": props.gap }}
    >
      {children}
    </FlexWrapper>
  );
};

Flex.defaultProps = {
  gap: "1rem",
};
