import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/global";
import { BabezineCard } from "./components/BabezineCard";
import { EmailSubscribe } from "./components/EmailSubscribe";
import { Flex, Stack, Text, Image } from "vite-storybook";
import styled from "styled-components";
// import QR from "./qr-code-uk.svg?component";
import QR from "./qr-code-us.svg?component";

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

const Container = styled(Stack)`
  @media (min-width: 450px) {
    padding-top: 3rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* the container className is important for the static lazyloading script */}
      <Container gap={2} className="container">
        {/* <Stack customMaxWidth={450}>
          <Image
            src="https://media.missguided.com/i/missguided/Email"
            width={500}
            height={500}
          />
        </Stack> */}

        <Stack
          maxWidth="md"
          gap={1.5}
          direction="column"
          align="center"
          padding
        >
          <Text element="h1" size="3xl" align="center" titling>
            Black Friday 2021 is <br />
            nearly here​
          </Text>
          <Text element="p" size="md" align="center">
            Set your reminders, big things are coming. Black Friday 2021 is
            about to hit Missguided. From party outfits to winter coats, it's
            gonna be a big one. This year you actually have plans and we have
            outfits to suit them all. Discover new deals dropping from 26th
            November all the way to Cyber Monday 2021. Run, don't walk and
            discover discounts on all your fave pieces including dresses, heels,
            beauty, accessories and more. Sign up for early reminders and secure
            the bag before anyone else.
          </Text>
          <Text element="p" size="md" align="center">
            If you're not on the list already, sign up to Missguided emails
            below and be the first to hear about Black Friday and exclusive
            Cyber discounts.
          </Text>
          <EmailSubscribe siteArea="BLACK_FRIDAY_LANDING_PAGE" territory="US" />
          <Text element="h2" size="xl" align="center" heading>
            Download the Missguided App
          </Text>
          <Text align="center">
            Prefer to shop on the move? Download our app for on the go discounts
            and enable those push notifications and be the first to know when
            our offers go live.
          </Text>
          <Stack customMaxWidth={200}>
            <QR />
          </Stack>
        </Stack>
      </Container>
    </>
    // {/* {data.content.map((block, index) => renderer(block, index))} */}
  );
}
export default App;
