import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/global";
import { Blogposts, Flex, ShoppableImage, Text, Stack } from "vite-storybook";

import { BabezineCard } from "./components/BabezineCard";

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
      <Stack
        className="container"
        gap={6}
        maxWidth="xl"
        style={{ paddingTop: "5rem" }}
        as="section"
      >
        <Stack
          maxWidth="sm"
          gap={1.5}
          direction="column"
          align="center"
          padding
        >
          <Text element="h1" size="2xl" align="center" titling>
            Student Discount at Missguided
          </Text>
          <Text element="p" size="base" align="center">
            Introducing the Missguided Student hub, the ultimate destination for
            your on-campus needs. Make Missguided your number 1 spot for all
            things fashion, beauty and homeware. Keep scrolling to discover
            student perks including styling guides, outfit ideas and more. Make
            your loan go further with exclusive discounts all year round. From
            freshers ‘fits to candles and skincare, we have every element of
            student life covered. The struggle doesn’t have to be real.
          </Text>
        </Stack>
        <Stack maxWidth="lg" gap={0}>
          <div
            data-stb-iframe="https://connect.studentbeans.com/v2/missguided/uk"
            data-stb-load="connect"
          ></div>
        </Stack>
        <Flex maxWidth="xl" itemFlex="1 1 180px" gap={1} padding>
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/student_lower_1"
            width={300}
            height={375}
            link="/clothing"
            text="shop clothing"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="clothing"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/student_lower_2"
            width={300}
            height={375}
            link="/beauty"
            text="shop beauty"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="beauty brand"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/student_lower_3"
            width={300}
            height={375}
            link="/homeware"
            text="shop homeware"
            sizes="(max-width: 767px) 50vw, 300px"
            alt="homeware"
          />
        </Flex>
        {/* <Flex maxWidth="lg" itemFlex="1 1 180px" gap={1} padding>
          <Blogposts postIds={[84299, 75819, 84165]} />
        </Flex> */}
        <Flex
          customMaxWidth={1244}
          gap={1.45}
          itemFlex={["1 0 320px", "20 0 320px"]}
        >
          <BabezineCard />
          <Blogposts
            postIds={[84299, 75819, 84165, 75221]}
            isCarousel
            slidesPerView={2.5}
            slidesPerViewMob={1.5}
            spacing={16}
            offsetStart={1}
            arrowsPosition={["top", "right"]}
          />
        </Flex>
      </Stack>
    </>
    // {/* {data.content.map((block, index) => renderer(block, index))} */}
  );
}
export default App;
