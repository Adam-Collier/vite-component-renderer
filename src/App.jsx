import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/global";
import { BabezineCard } from "./components/BabezineCard";
import { EmailSubscribe } from "./components/EmailSubscribe";
import { Flex, Stack, Text, Image } from "vite-storybook";
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
        <Stack customMaxWidth={450}>
          <Image
            src="https://media.missguided.com/i/missguided/Email"
            width={500}
            height={500}
          />
        </Stack>

        <Stack
          maxWidth="md"
          gap={1.5}
          direction="column"
          align="center"
          padding
        >
          <Text element="h1" size="3xl" align="center" titling>
            Meet the new generation of cool kids.​
          </Text>
          <Text element="p" size="md" align="center">
            Available in sizes 3-months to 7 years, MG Kids is designed with
            both comfort and durability in mind. Discover stretchy, soft
            clothing that will support your kids, no matter what playtime
            brings.
          </Text>
          <Text element="p" size="md" align="center">
            Sign up to Missguided emails to be the first in line for MG Kids
            news, latest collabs and exclusive email offers. If you already
            receive our emails, keep an eye on your inbox for the latest launch
            updates.​
          </Text>
          <EmailSubscribe siteArea="Kids_Signup" />
        </Stack>
      </Container>
    </>
    // {/* {data.content.map((block, index) => renderer(block, index))} */}
  );
}
export default App;
