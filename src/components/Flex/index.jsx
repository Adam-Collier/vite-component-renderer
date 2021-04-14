import React from "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;

  /* use this to emulate the gap property */
  margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
  width: calc(100% + var(--gap));

  > * {
    flex: 1 1 ${(props) => props.wrapWidth}px;
    /* use this to emulate the gap property */
    margin: var(--gap) 0 0 var(--gap);
  }

  @media (max-width: 767px) {
    margin: 0;
    width: 100%;

    > * {
      margin: 0;
    }
  }
`;

export const Flex = (props) => {
  const { children } = props;
  return (
    <FlexWrapper {...props} style={{ "--gap": props.gap }}>
      {children}
    </FlexWrapper>
  );
};

Flex.defaultProps = {
  gap: "1rem",
  wrapWidth: 200,
};
