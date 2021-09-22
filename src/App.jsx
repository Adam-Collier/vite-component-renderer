import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/global";
import { BabezineCard } from "./components/BabezineCard";
import {
  Blogposts,
  Button,
  Carousel,
  Flex,
  Grid,
  HeroBanner,
  ShoppableImage,
  Stack,
  Text,
} from "vite-storybook";

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
      <Stack gap={6} className="container">
        <Carousel>
          <HeroBanner
            link="/beauty/beauty-brands/here-we-flo"
            logo="https://media.missguided.com/i/missguided/Hero We Flow"
            src={[
              "https://media.missguided.com/i/missguided/the_flo_hero_banner_desktop",
              {
                media: "(max-width: 767px)",
                width: 414,
                height: 600,
                src: "https://media.missguided.com/i/missguided/the_flo_hero_banner_mobile",
              },
            ]}
            subcopy="Here We Flo makes shamelessly natural care for life's messiest moments - from period care to sexual wellness and everything in between! "
            alt="The Flo x Sex Education"
            noContentBackground
            contentColor="#fff"
          />
          <HeroBanner
            link="/beauty/beauty-brands/toni-and-guy"
            logo="https://media.missguided.com/i/missguided/toni_and_guy_logo"
            src={[
              "https://media.missguided.com/i/missguided/toni_and_guy_hero_banner_desktop",
              {
                media: "(max-width: 767px)",
                width: 414,
                height: 600,
                src: "https://media.missguided.com/i/missguided/toni_and_guy_hero_banner_mobile",
              },
            ]}
            subcopy="Transform your tresses with best-selling haircare brand Toni & Guy who have expertly crafted a range of premium shampoos, conditioners and styling products to suit every hair need."
            buttonType="primary"
            buttonVariant="fill"
            alt="Toni & Guy hero"
          />

          <HeroBanner
            link="/beauty/beauty-brands/quick-flick"
            logo="https://media.missguided.com/i/missguided/Quick Flick"
            src={[
              "https://media.missguided.com/i/missguided/quick_flick_hero_banner_desktop?a",
              {
                media: "(max-width: 767px)",
                width: 414,
                height: 600,
                src: "https://media.missguided.com/i/missguided/quick_flick_hero_banner_mobile?b",
              },
            ]}
            subcopy="The Quick Flick: beauty innovators, focused on challenging traditional cosmetic applications through time-saving and multi-functional products. "
            noContentBackground
            alt="Quick Flick Hero"
          />
        </Carousel>
        <Stack
          maxWidth="sm"
          gap={1.5}
          direction="column"
          align="center"
          padding
        >
          <Text element="p" size="base" align="center">
            We don’t just do clothes. Make Missguided your number 1 spot for all
            things beauty. Level up your cosmetics collection with makeup,
            haircare and beauty tools from hundreds of your favourite brands.
            From Simple skincare to Cloud Nine straighteners, we’ve got every
            step of your getting ready routine covered.
          </Text>
          <Button
            link="/beauty"
            text="shop all beauty"
            variant="fill"
            size="md"
          />
        </Stack>
        <Flex maxWidth="xl" itemFlex="1 1 180px" gap={1} padding>
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/new_in_21_04_21"
            width={300}
            height={375}
            link="/new-in/beauty"
            text="shop new in"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="new in"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/foreo_brand_slot?a"
            width={300}
            height={375}
            link="/beauty/beauty-brands/foreo"
            text="shop foreo"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="Foreo brand"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/seoulista_brand_slot"
            width={300}
            height={375}
            link="/beauty/beauty-brands/seoulista-beauty"
            text="shop Seoulista"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="Seoulista brand"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/playboy_brand_slot"
            width={300}
            height={375}
            link="/beauty/beauty-brands/playboy"
            text="shop playboy"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="Playboy brand"
          />
        </Flex>
        <Flex gap={1.45} itemFlex={["1 0 320px", "20 0 320px"]}>
          <BabezineCard />
          <Blogposts
            postIds={[83283, 83604, 83953, 83754]}
            isCarousel
            slidesPerView={3}
            slidesPerViewMob={1.5}
            spacing={16}
            offsetStart={1}
            arrowsPosition={["top", "right"]}
          />
        </Flex>
        <Stack maxWidth="sm" gap={1.45} align="center" padding>
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
        </Stack>
        <Flex maxWidth="xl" itemFlex="1 1 180px" padding>
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/category_face"
            width={298}
            height={298}
            text="shop skincare"
            link="/beauty/skincare"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="face category"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/category_eye"
            width={298}
            height={298}
            text="shop makeup"
            link="/beauty/make-up"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="eye category"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/category_lips"
            width={298}
            height={298}
            text="shop lips"
            link="/beauty/make-up/lipstick-and-lipgloss"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="lips category"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/category_fragrance"
            width={298}
            height={298}
            text="shop fragrance"
            link="/beauty/perfume"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="fragrance category"
          />
        </Flex>
        <Stack maxWidth="md" gap={1.45} padding>
          <Text element="h3" size="2xl" align="center" heading>
            SHOP BY BRAND
          </Text>
          <Grid wrapWidth={200} gap={1}>
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/missguided_beauty_logo?a"
              width={260}
              height={160}
              link="/beauty/beauty-brands/missguided-beauty"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="missguided beauty logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/iconic_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/iconic"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="iconic logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/oh_my_lash_logo_1"
              width={260}
              height={160}
              link="/beauty/beauty-brands/oh-my-lash"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="oh my lash logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/babyliss_logo_1"
              width={260}
              height={160}
              link="/beauty/beauty-brands/babyliss"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="babyliss logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/inglot_logo_1"
              width={260}
              height={160}
              link="/beauty/beauty-brands/inglot"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="inglot logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/simple_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/simple"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="simple logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/rimmel_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/rimmel"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="rimmel logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/logo_grid_garnier"
              width={260}
              height={160}
              link="/beauty/beauty-brands/garnier"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="garnier logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/logo_grid_hawaiian_tropic"
              width={260}
              height={160}
              link="/beauty/beauty-brands/hawaiian-tropic"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="hawaiian tropic logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/logo_grid_illamasqua"
              width={260}
              height={160}
              link="/beauty/beauty-brands/illamasqua"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="illamasqua logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/cloud_nine_hair_styled_grid_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/cloud-nine"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="cloud nine logo"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/bondi_sands_grid_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/bondi-sands"
              sizes="(max-width: 767px) 207px, 260px"
              imageTypes={["webp", "png"]}
              alt="bondi sands logo"
            />
          </Grid>
        </Stack>
      </Stack>
    </>
    // {/* {data.content.map((block, index) => renderer(block, index))} */}
  );
}
export default App;
