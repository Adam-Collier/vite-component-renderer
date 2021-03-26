import React from "react"
import styled, {css} from "styled-components"

export const ImageRow = ({children, contrast, overlap, sidebyside, reverse, padded}) => {
    const LayoutStyles = styled.div`
      display: flex;
      margin: 0 auto;
      max-width: 1440px;
      width: 100%;
      align-items: center;
      flex-direction: ${reverse ? 'row-reverse' : 'row'};
      flex-wrap: wrap;

      > div {
        width: 100%;
      }

      @media (min-width: 768px) {
        > div {
          width: 50%;
        }

        ${contrast &&
        css`
          > div {
            width: 50%;
          }

          > div:first-of-type {
            padding: 0 10%;
          }
        `};

        ${overlap &&
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

        ${overlap &&
        reverse &&
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

        ${sidebyside &&
        css`
          padding: 0 5%;

          > div:first-of-type {
            padding-right: 2.5%;
          }

          > div:last-of-type {
            padding-left: 2.5%;
          }
        `};

        ${padded &&
        css`
          > div {
            width: 100%;
          }
          padding: 0 8%;
        `};
      }

      @media (max-width: 767px) {
        ${contrast &&
        css`
          padding: 0 2rem;

          > div:first-of-type {
            padding: 0 10% 0 20%;
            margin-bottom: -2rem;
            z-index: 3;
          }
        `};

        ${overlap &&
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

        ${overlap &&
        reverse &&
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

        ${sidebyside &&
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

    return (
      <LayoutStyles>
          {children}
      </LayoutStyles>
    );
}