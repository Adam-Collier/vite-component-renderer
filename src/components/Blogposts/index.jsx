import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Blogpost } from "../Blogpost";
import { Carousel } from "../Carousel";

export const Wrapper = styled.div`
  width: 100%;
`;

const ConditionalWrapper = (props) => {
  let { isCarousel, children, perPage } = props;
  return isCarousel ? (
    <Carousel perPage={perPage}>{children}</Carousel>
  ) : (
    children
  );
};

export const Blogposts = (props) => {
  const { postIds } = props;
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let stringifiedIds = postIds.join(",");

  useEffect(() => {
    const getWpData = async () => {
      const result = await axios(
        `https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${stringifiedIds}&_fields=link,title,excerpt,_links,_embedded&_embed`
      );

      setData(result.data);
      setIsLoading(false);
    };

    getWpData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

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
