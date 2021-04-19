import React from "react";
import styled, { css } from "styled-components";

const LayoutStyles = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  flex-wrap: wrap;

  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    > div {
      width: 50%;
    }

    ${(props) =>
      props.layout === "contrast" &&
      css`
        > div {
          width: 50%;
        }

        > div:first-of-type {
          padding: 0 10%;
        }
      `};

    ${(props) =>
      props.layout === "overlap" &&
      css`
        padding: 0 10%;
        align-items: flex-start;

        > div {
          width: calc(50% + 2rem);
        }

        > div:first-of-type {
          margin-right: -2rem;
        }

        > div:last-of-type {
          margin-left: -2rem;
          margin-top: 20%;
        }
      `};

    ${(props) =>
      props.layout === "overlap" &&
      props.reverse &&
      css`
        > div:first-of-type {
          margin-left: -2rem;
          margin-right: 0;
          z-index: 3;
        }

        > div:last-of-type {
          margin-right: -2rem;
          margin-left: 0;
        }
      `};

    ${(props) =>
      props.layout === "sidebyside" &&
      css`
        padding: 0 5%;

        > div:first-of-type {
          padding-right: 2.5%;
        }

        > div:last-of-type {
          padding-left: 2.5%;
        }
      `};

    ${(props) =>
      props.layout === "padded" &&
      css`
        > div {
          width: 100%;
        }
        padding: 0 8%;
      `};
  }

  @media (max-width: 767px) {
    ${(props) =>
      props.layout === "contrast" &&
      css`
        padding: 0 2rem;

        > div:first-of-type {
          padding: 0 10% 0 20%;
          margin-bottom: -2rem;
          z-index: 3;
        }
      `};

    ${(props) =>
      props.layout === "overlap" &&
      css`
        align-items: flex-start;

        > div {
          width: calc(50% + 1rem);
        }

        > div:first-of-type {
          margin-right: -1rem;
        }

        > div:last-of-type {
          margin-left: -1rem;
          margin-top: 30%;
        }
      `};

    ${(props) =>
      props.layout === "overlap" &&
      props.reverse &&
      css`
        > div:last-of-type {
          margin-right: -1rem;
          margin-left: 0;
        }

        > div:first-of-type {
          margin-left: -1rem;
          margin-right: 0;
          z-index: 3;
        }
      `};

    ${(props) =>
      props.layout === "sidebyside" &&
      css`
        > div:first-of-type {
          width: 90%;
        }
        > div:last-of-type {
          width: 65%;
          margin-top: -1.5rem;
          margin-left: auto;
        }
      `};
  }
`;

export const ImageRow = ({ children, layout, reverse }) => {
  return (
    <LayoutStyles layout={layout} reverse={reverse}>
      {children}
    </LayoutStyles>
  );
};
