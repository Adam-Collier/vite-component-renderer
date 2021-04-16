import React from "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;

  /* use this to emulate the gap property */
  /* only works horizontally */
  margin: calc(-1 * var(--column-gap)) 0 0 calc(-1 * var(--column-gap));
  width: calc(100% + var(--column-gap));

  > * {
    flex: 1 1 ${(props) => props.wrapWidth}px;
    /* use this to emulate the gap property */
    /* only works horizontally */
    margin: var(--column-gap) 0 0 var(--column-gap);
  }

  @media (max-width: 767px) {
    margin: 0;
    width: 100%;

    > * {
      margin: 0;
    }

    > * + * {
      margin-top: var(--row-gap);
    }
  }
`;

export const Flex = (props) => {
  const { children } = props;
  return (
    <FlexWrapper
      {...props}
      style={{ "--column-gap": props.columnGap, "--row-gap": props.rowGap }}
    >
      {children}
    </FlexWrapper>
  );
};

Flex.defaultProps = {
  columnGap: "1rem",
  rowGap: "0",
  wrapWidth: 200,
};
