import React from "react";
import styled from "styled-components";
import { Button, Stack, Text } from "vite-storybook";

import BabezineLogo from "./babezine_logo.svg?component";

const Card = styled(Stack)`
  max-width: calc(100vw - 2rem);
  padding: 0 1rem;

  @media (min-width: 768px) {
    max-width: 360px;
    padding: 1rem 0rem 1rem 1.5rem;
  }
`;

export const BabezineCard = () => {
  return (
    <Card spacing={1}>
      <Text size="md">from the</Text>
      <BabezineLogo />
      <Text>
        Tests, swatches and honest reviews, the only place to read about beauty.
        Discover how to recreate trending makeup looks, skincare tips and more.
      </Text>
      <Button
        text="read it now"
        link="https://www.missguided.co.uk/babezine/beauty"
        variant="fill"
      />
    </Card>
  );
};
