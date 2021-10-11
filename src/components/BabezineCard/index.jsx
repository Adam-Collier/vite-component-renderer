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
        The editorial guide to student living. Take 5 mins out of your day to
        scroll recipes, outfit ideas, exclusive interviews and advice about life
        at uni.
      </Text>
      <Button
        text="read it now"
        link="https://www.missguided.co.uk/babezine/student"
        variant="fill"
      />
    </Card>
  );
};
