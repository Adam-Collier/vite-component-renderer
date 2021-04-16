import React from "react";
import "./App.css";
import styled, { css, createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/global";
import { Carousel } from "./components/Carousel";
import { Stack } from "./components/Stack";
import { HeroBanner } from "./components/HeroBanner";
import { Flex } from "./components/Flex";
import { ShoppableImage } from "./components/ShoppableImage";
import { Blogposts } from "./components/Blogposts";
import { BabezineCard } from "./components/BabezineCard";

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
            link="/clothes"
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
            link="/new-in"
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
            link="/beauty-love-peace"
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
          />
        </Carousel>
        <Row maxWidth={640}>
          <p>
            We don’t just do clothes. Make Missguided your number 1 spot for all
            things beauty. Level up your cosmetics collection with makeup,
            haircare and beauty tools from hundreds of your favourite brands.
            From Simple skincare to Cloud Nine straighteners, we’ve got every
            step of your getting ready routine covered.
          </p>
        </Row>
        <Row maxWidth={1240} noPadding>
          <Flex>
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/nails_inc"
              height={300}
              text="shop Nails inc"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/nails_inc"
              height={300}
              text="shop cloud nine"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/cloud_nine"
              height={300}
              text="shop cloud nine"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/nails_inc"
              height={300}
              text="shop cloud nine"
            />
          </Flex>
        </Row>
        <Row noPadding>
          <Flex rowGap="2rem">
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
          <h3>SHOP BY CATEGORY</h3>
          <p>
            Invest in yourself (and your makeup bag). Shop beauty products from
            Missguided online now. Browse Face products and shop foundations and
            concealers from hundreds of different brands. Create bold statement
            eyes, with Rimmel liquid eyeliner, Iconic cream shadows and
            lengthening mascara. Add the finishing touch to any look, with bold
            lipsticks from Inglot, plumping glosses and matching liners.
          </p>
        </Row>
        <Row maxWidth={1240} noPadding>
          <Flex>
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/face_category"
              width={300}
              height={300}
              link="/face"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/eye_category"
              width={300}
              height={300}
              link="/eye"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/lips_category"
              width={300}
              height={300}
              link="/lips"
            />
            <ShoppableImage
              src="https://media.missguided.com/i/missguided/fragrance_category"
              width={300}
              height={300}
              link="/fragrance"
            />
          </Flex>
        </Row>
      </Stack>
    </>
    // {/* {data.content.map((block, index) => renderer(block, index))} */}
  );
}
export default App;
