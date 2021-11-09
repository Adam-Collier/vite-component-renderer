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
            <strong>Prize</strong> – One (1) winner will be randomly selected
            (Prize Winner”) and the prize winner will receive the following
            (“Prize”): * A £650 Hotels.com voucher * £350 as bank transfer to
            cover your travel and food expenses
          </Text>
          <Text size="xs" align="center" color="grey-3" weight={400}>
            <strong>Winner Selection</strong> – The Prize Winner will need to
            share details for a bank transfer and an email address to be able to
            claim the prize. The Prize, or any portion of the Prize, is not
            transferable or exchangeable and cannot be redeemed for cash. No
            compensation will be offered if the Prize Winner is unable to accept
            the Prize. The Prize Winner is responsible for any tax
            considerations related to accepting the Prize and should seek
            independent financial advice prior to acceptance of the Prize.
            Additional costs resulting from acceptance of the Prize are the
            responsibility of the Prize Winner. The Promoter reserves the right
            to substitute any portion of the Prize for an alternative of equal
            or greater value.
          </Text>
          <Text size="xs" align="center" color="grey-3" weight={400}>
            <strong>
              With whom does the Promoter share your personal data?
            </strong>{" "}
            - The Promoter may share your personal data with suppliers or
            subcontractors it uses in order to provide the Promotion to you.
            Suppliers and subcontractors are companies who are only entitled to
            process the personal data they receive from the Promoter based on
            the instructions of the Promoter. Categories of such suppliers and
            subcontractors are software and data storage providers and business
            consultants. Your personal data may also be shared with third
            parties including Hotels.com so that the Prize can be provided to
            the Prize Winner. The basis for sharing the information with these
            third parties is to fulfill the Promoter’s contractual obligations
            under these Terms and Conditions in order to provide the Prize to
            the Prize Winner.
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
