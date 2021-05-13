import styled from "styled-components";

export const Row = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "none")};

  @media (max-width: 767px) {
    padding: ${(props) => !props.noPadding && `0 1rem`};
  }
`;
