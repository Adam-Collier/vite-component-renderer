import React from "react";
import styled from "styled-components";
import { Blogpost } from "../Blogpost";
import { Carousel } from "../Carousel";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

export const Wrapper = styled.div`
  width: 100%;
`;

const ConditionalWrapper = (props) => {
  let {
    isCarousel,
    children,
    slidesPerView,
    slidesPerViewMob,
    spacing,
  } = props;
  return isCarousel ? (
    <Carousel
      slidesPerView={slidesPerView}
      spacing={spacing}
      slidesPerViewMob={slidesPerViewMob}
      offsetStart="1rem"
    >
      {children}
    </Carousel>
  ) : (
    children
  );
};

export const Blogposts = (props) => {
  const { postIds } = props;

  let stringifiedIds = postIds.join(",");

  const { data, error } = useSWR(
    `https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${stringifiedIds}&_fields=link,title,excerpt,_links,_embedded&_embed`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Wrapper>
      <ConditionalWrapper {...props}>
        {data.map((post, index) => (
          <Blogpost key={index} data={post} />
        ))}
      </ConditionalWrapper>
    </Wrapper>
  );
};
