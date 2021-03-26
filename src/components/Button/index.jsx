import React from "react"
import styled from "styled-components"

const ButtonStyles = styled.a`
  display: inline-block;
  margin: 0 0.5rem;

  button {
    border: 1px solid black;
    color: #000;
    padding: 0.5rem 1rem;
    background: none;
    border-radius: 3px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background: #000;
        color: #fff;
    }

    font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
      'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
      'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
      'Helvetica Neue', 'Oswald', Arial, sans-serif;
    font-weight: 400;
    font-stretch: condensed;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1.7;
  }
`;

export const Button = ({text, link}) => (
    <ButtonStyles href={link}>
      <button>{text}</button>
    </ButtonStyles>
)