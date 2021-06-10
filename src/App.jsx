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
  background-color: #a8e9ff;

  > section:first-of-type {
    padding: 2rem;
  }
`;

const Container = styled(Stack)`
  @media (min-width: 1280px) {
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
                using code “xxxx”*
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
          <Text size="md" align="center">
            We’re dropping the best deals of the season for{" "}
            <strong>2 days only</strong>. March 1-2. It’s bigger than a
            sale—it’s a Hauliday™. Save an extra 20% off* and pay in 4,
            interest-free payments, with Klarna. Just in time for your
            spring/summer wardrobe refresh (18+, US Only, T&C's apply).
          </Text>
          <Text size="xs" align="center" color="grey-3" weight={400}>
            *T&C’s This offer for a limited time only and entitles customers an
            extra 20% discount on their order. Offer applies to items purchased
            on www.missguidedus.com website & US App and excludes sale, beauty,
            Playboy Lifestyle Collection and brands. This offer cannot be used
            in conjunction with any other code, discount, offer or promotion. To
            redeem enter code (HAULIDAY) at the checkout. This promotion is
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
