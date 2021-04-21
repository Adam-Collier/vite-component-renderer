import React from "react";
import "./App.css";
import styled, { css, createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/global";
import { Carousel } from "./components/Carousel";
import { Stack } from "./components/Stack";
import { HeroBanner } from "./components/HeroBanner";
import { Flex } from "./components/Flex";
import { Grid } from "./components/Grid";
import { ShoppableImage } from "./components/ShoppableImage";
import { Blogposts } from "./components/Blogposts";
import { BabezineCard } from "./components/BabezineCard";
import { Text } from "./components/Text";
import { Button } from "./components/Button";

const Row = styled.section`
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
    `}
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "none")};

  @media (max-width: 767px) {
    padding: ${(props) => !props.noPadding && `0 1rem`};
  }
`;

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

function App() {
  return (
    <>
      <GlobalStyle />
      {/* the container className is important for the static lazyloading script */}
      <Stack space="6rem" className="container">
        <Carousel>
          <HeroBanner
            link="/beauty"
            src={[
              "https://media.missguided.com/i/missguided/missguided_beauty_hero",
              {
                media: "(max-width: 767px)",
                width: 414,
                height: 600,
                src:
                  "https://media.missguided.com/i/missguided/missguided_beauty_mobile",
              },
            ]}
          />
          <HeroBanner
            link="/beauty/beauty-brands/bondi-sands"
            logo="https://media.missguided.com/i/missguided/bondi_sands_logo"
            src={[
              "https://media.missguided.com/i/missguided/bondi_sands_hero",
              {
                media: "(max-width: 767px)",
                width: 414,
                height: 600,
                src:
                  "https://media.missguided.com/i/missguided/bondi_sands_mobile",
              },
            ]}
            subcopy="Introducing the latest innovation in self tanning, pure self tanning range by BONDI SANDS. Clean, simple, transparent, the iconic Australian tan."
            noContentBackground
          />
          <HeroBanner
            link="/beauty/beauty-brands/love-beauty-and-planet"
            logo="https://media.missguided.com/i/missguided/love_beauty_planet_logo"
            src={[
              "https://media.missguided.com/i/missguided/love_beauty_planet_hero",
              {
                media: "(max-width: 767px)",
                width: 414,
                height: 600,
                src:
                  "https://media.missguided.com/i/missguided/love_beauty_planet_mobile",
              },
            ]}
            subcopy="Introducing the latest innovation in self tanning, pure self tanning range by BONDI SANDS. Clean, simple, transparent, the iconic Australian tan."
            noLogoBackground
            contentBackground="#f4afc2"
            contentColor="var(--primary-black)"
          />
        </Carousel>
        <Row maxWidth={640}>
          <Flex gap="1.5rem" direction="column" alignItems="center">
            <Text element="p" size="base" align="center">
              We don’t just do clothes. Make Missguided your number 1 spot for
              all things beauty. Level up your cosmetics collection with makeup,
              haircare and beauty tools from hundreds of your favourite brands.
              From Simple skincare to Cloud Nine straighteners, we’ve got every
              step of your getting ready routine covered.
            </Text>
            <Button link="/beauty" text="shop all beauty" variant="fill" />
          </Flex>
        </Row>
        <Row maxWidth={1240}>
          <Flex wrapWidth={180}>
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/new_in_21_04_21"
              height={300}
              link="/new-in"
              text="shop new in"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/nails_inc"
              height={300}
              link="/beauty/beauty-brands/nails-inc"
              text="shop Nails inc"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/cloud_nine"
              height={300}
              link="/beauty/beauty-brands/cloud-nine"
              text="shop cloud nine"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/rimmel_21_04_21"
              height={300}
              link="/beauty/beauty-brands/rimmel"
              text="shop rimmel"
            />
          </Flex>
        </Row>
        <Row noPadding>
          <Flex gap="2rem" wrapWidth={200}>
            <BabezineCard />
            <Blogposts
              postIds={[79905, 78697, 79178, 79335, 80981]}
              isCarousel
              slidesPerView={3.5}
              slidesPerViewMob={1.5}
              spacing={16}
            />
          </Flex>
        </Row>
        <Row maxWidth={640}>
          <Text element="h3" size="2xl" align="center" heading>
            SHOP BY CATEGORY
          </Text>
          <Text align="center">
            Invest in yourself (and your makeup bag). Shop beauty products from
            Missguided online now. Browse Face products and shop foundations and
            concealers from hundreds of different brands. Create bold statement
            eyes, with Rimmel liquid eyeliner, Iconic cream shadows and
            lengthening mascara. Add the finishing touch to any look, with bold
            lipsticks from Inglot, plumping glosses and matching liners.
          </Text>
        </Row>
        <Row maxWidth={1240}>
          <Flex wrapWidth={180}>
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/category_face"
              width={298}
              height={298}
              text="shop skincare"
              link="/beauty/skincare"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/category_eye"
              width={298}
              height={298}
              text="shop makeup"
              link="/beauty/make-up"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/category_lips"
              width={298}
              height={298}
              text="shop lips"
              link="/beauty/make-up/lipstick-and-lipgloss"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/category_fragrance"
              width={298}
              height={298}
              text="shop fragrance"
              link="/beauty/perfume"
            />
          </Flex>
        </Row>
        <Row maxWidth={840}>
          <Text element="h3" size="2xl" align="center" heading>
            SHOP BY BRAND
          </Text>
          <Grid wrapWidth={200} gap="1rem">
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/iconic_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/iconic"
              sizes="(max-width: 767px) 207px, 260px"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/oh_my_lash_logo_1"
              width={260}
              height={160}
              link="/beauty/beauty-brands/oh-my-lash"
              sizes="(max-width: 767px) 207px, 260px"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/babyliss_logo_1"
              width={260}
              height={160}
              link="/beauty/beauty-brands/babyliss"
              sizes="(max-width: 767px) 207px, 260px"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/inglot_logo_1"
              width={260}
              height={160}
              link="/beauty/beauty-brands/inglot"
              sizes="(max-width: 767px) 207px, 260px"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/simple_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/simple"
              sizes="(max-width: 767px) 207px, 260px"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/rimmel_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/rimmel"
              sizes="(max-width: 767px) 207px, 260px"
            />
          </Grid>
        </Row>
      </Stack>
    </>
    // {/* {data.content.map((block, index) => renderer(block, index))} */}
  );
}
export default App;
