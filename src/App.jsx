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
      <Stack space="6rem">
        <Carousel>
          <HeroBanner link="/clothes" />
          <HeroBanner
            link="/new-in"
            logo="https://media.missguided.com/i/missguided/bondi_sands_logo"
            src="https://media.missguided.com/i/missguided/bondi_sands_hero"
            subcopy="Introducing the latest innovation in self tanning, pure self tanning range by BONDI SANDS. Clean, simple, transparent, the iconic Australian tan."
            noContentBackground
          />
          <HeroBanner
            link="/beauty-love-peace"
            logo="https://media.missguided.com/i/missguided/love_beauty_planet_logo"
            src="https://media.missguided.com/i/missguided/love_beauty_planet_hero"
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
        <Row maxWidth={1240}>
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
        <Blogposts
          postIds={[79905, 78697, 79178, 79335]}
          isCarousel
          perPage={3}
        />
      </Stack>

      {/* {data.content.map((block, index) => renderer(block, index))} */}
    </>
  );
}

export default App;
