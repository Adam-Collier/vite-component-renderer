import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/global";
import IDmeLogo from "./svgs/id-me.svg?component";
import { Image, Flex, Stack, Text, Button } from "vite-storybook";
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
              <Stack gap={1.5} customMaxWidth={400}>
                <div style={{ width: "90px" }}>
                  <IDmeLogo />
                </div>
                <Text size="3xl" titling>
                  You deserve some new
                </Text>
              </Stack>
              <Text size="md">
                After all your hard work, you deserve some new outfits. As a way
                of saying thank you to all of our verified medical
                professionals, first responders, nurses, military members and
                teachers, we are giving you 15% off your next order.
              </Text>
              <Stack gap={2} customMaxWidth={400}>
                <Text size="md">
                  Verify your status with ID.me to claim your discount here…
                </Text>
                <Button
                  text="verify now"
                  link="https://hosted-pages.id.me/offers/missguided"
                />
              </Stack>
            </Flex>
          </Flex>
          <Image
            alt="hero image"
            height={640}
            sizes="(max-width: 600px) 100vw, (min-width: 1280px) 632px, 50vw"
            src="https://media.missguided.com/i/missguided/ID-Me-1920x1686"
            width={640}
            quality={90}
          />
        </HeroTwoCol>
      </Container>
    </>
    // {/* {data.content.map((block, index) => renderer(block, index))} */}
  );
}

export default App;
