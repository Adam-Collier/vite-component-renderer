import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  > * + * {
    margin-top: var(--space);

    @media (max-width: 767px) {
      margin-top: calc(var(--space) * 0.75);
    }
  }
`;

export const Stack = ({ children, space = "1.5rem", className }) => (
  <Wrapper className={className} style={{ "--space": space }}>
    {children}
  </Wrapper>
);
