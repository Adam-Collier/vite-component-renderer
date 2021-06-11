import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/global";
import KlarnaHaulidayLogo from "./svgs/hermes.svg?component";
import { Button, Image, Flex, Stack, Text } from "vite-storybook";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

// let renderer = (content, key) => {
//   if (componentMap[content.component] !== undefined) {
//     return React.createElement(
//       componentMap[content.component],
//       { ...content.props, key },
//       content.children &&
//         (typeof content.children === 'string'
//           ? content.children
//           : content.children.map((child, index) => renderer(child, index)))
//     );
//   }
// };

const HeroTwoCol = styled(Flex)`
  > section:first-of-type {
    padding: 2rem;
  }
`;

const Container = styled(Stack)`
  @media (min-width: 1281px) {
    margin-top: 3rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* the container className is important for the static lazyloading script */}
      <Container gap={3} className="container">
        <HeroTwoCol itemFlex="1 1 450px" align="center" maxWidth="xl">
          <Flex align="center" justify="center">
            <Flex gap={1} direction="column" customMaxWidth={400}>
              <div style={{ width: "160px" }}>
                <KlarnaHaulidayLogo />
              </div>
              <Text size="2xl" titling>
                Hermes Play with Missguided
              </Text>
              <Text size="lg">
                Dress for the weather you want and score 25% off your next order
                using code HERMES25*
              </Text>
              <Button text="shop now" link="/new-in" />
            </Flex>
          </Flex>
          <Image
            alt="hero image"
            height={640}
            sizes="(max-width: 600px) 100vw, (min-width: 1280px) 632px, 50vw"
            src="https://media.missguided.com/i/missguided/hermes_hero"
            width={640}
            quality={90}
          />
        </HeroTwoCol>
        <Stack gap={1.45} maxWidth="lg" padding>
          <Text size="xs" align="center" color="grey-3" weight={400}>
            *25% off Everything Code: HERMES25. This offer for a valid from the
            14th June 2021 to 21st June 2021 and entitles customers to 25%
            discount on their order. Offer applies to items purchased from the
            www.missguided.co.uk website and Missguided UK App, and excludes
            sale, Restyld, homeware outlet and beauty. This offer cannot be used
            in conjunction with any other code, discount, offer or promotion. To
            redeem enter code HERMES25 at the checkout. This promotion is
            administered by Missguided Limited (company number 3235904) of
            Wharfside, 75 Trafford Wharf Road, Salford, Manchester, M17 1ES.
          </Text>
        </Stack>
      </Container>
    </>
    // {/* {data.content.map((block, index) => renderer(block, index))} */}
  );
}

export default App;
