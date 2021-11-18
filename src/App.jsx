import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/global";
import KlarnaLogo from "./svgs/klarna.svg?component";
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
  background: #fdafc7;

  > section:first-of-type {
    padding: 2rem;
  }

  @media (min-width: 1281px) {
    border-radius: 5px;
    overflow: hidden;

    > section:first-of-type {
      padding: 4rem;
    }
  }
`;

const HeroImage = styled(Image)`
  align-self: stretch;
`;

const Link = styled.a`
  color: var(--primary-black);
  text-decoration: underline;
`;

const OrderedList = styled.ol`
  list-style-type: revert;
  padding-left: revert;
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
        <HeroTwoCol itemFlex="1 1 450px" align="center" maxWidth="xl" gap={0}>
          <Flex align="center" justify="center">
            <Flex gap={1} direction="column" customMaxWidth={400}>
              <div style={{ width: "120px" }}>
                <KlarnaLogo />
              </div>
              <Text size="xl" titling>
                Win a weekend break for you and a friend with Klarna
              </Text>
              <Text size="md">
                The prize includes a £650 Hotels.com voucher as well as a £350
                as bank transfer to cover your travel and food expenses.
              </Text>
              <Text>To enter all you have to do is…</Text>
              <OrderedList>
                <Text element="li">
                  Follow the official{" "}
                  <Link
                    href="https://www.instagram.com/klarna.uk/"
                    target="_blank"
                    rel="noopener"
                  >
                    @klarna.uk
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.instagram.com/missguided/"
                    target="_blank"
                    rel="noopener"
                  >
                    @Missguided
                  </Link>{" "}
                  Instagram profiles
                </Text>
                <Text element="li">
                  <Text>Like + Save the mural post</Text>
                </Text>
                <Text element="li">
                  <Text>Tag the friend you’d take with you</Text>
                </Text>
              </OrderedList>
              <Text size="md">
                Look for the image post of the <strong>mural</strong> on our
                <strong> feed</strong>. The Winner will be contacted via direct
                message. Best of luck!
              </Text>
            </Flex>
          </Flex>
          <HeroImage
            alt="hero image"
            height={640}
            sizes="(max-width: 600px) 100vw, (min-width: 1280px) 632px, 50vw"
            src="https://media.missguided.com/i/missguided/klarna_mural_hero"
            width={640}
            quality={90}
          />
        </HeroTwoCol>
        <Stack gap={1.45} maxWidth="lg" padding>
          <Text size="xs" align="center" color="grey-3" weight={400}>
            Missguided will select the Winner from a random prize draw.
            Missguided will then share the details of the Winner with Klarna for
            the purposes of administering the Prize. For further details, please
            visit our privacy notice:{" "}
            <Link href="https://www.missguided.co.uk/privacy-notices">
              https://www.missguided.co.uk/privacy-notices
            </Link>
            . Your personal data may also be shared with third parties so that
            the Prize can be provided to the Winner. The basis for sharing the
            information with these third parties is to fulfill the contractual
            obligations under these Terms and Conditions to provide the Prize to
            the Winner.
          </Text>
          <Text size="xs" align="center" color="grey-3" weight={400}>
            Missguided is not a lender and acts only as an introducer. Please
            spend responsibly. Borrowing beyond your means could seriously
            affect your financial status. Klarna’s Pay in 3 instalments and Pay
            in 30 days credit agreement[s] are not regulated by the FCA. 18+, UK
            residents only. No interest, no fees. Credit subject to status. T&Cs
            apply.{" "}
            <Link href="https://klarna.com/uk/terms-and-conditions">
              klarna.com/uk/terms-and-conditions.
            </Link>
          </Text>
        </Stack>
      </Container>
    </>
    // {/* {data.content.map((block, index) => renderer(block, index))} */}
  );
}

export default App;
