import React from "react";
import { parseEntities } from "parse-entities";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  font-family: "Helvetica Neue", Arial, sans-serif;
  margin: 0 0 0.5rem;
  line-height: 1.3;
`;

const Subcopy = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 100%;
  margin-bottom: 0.625rem;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

let stripAndParse = (str) => {
  let stripped = str.replace(/(<([^>]+)>)/gi, "");
  let parsed = parseEntities(stripped);

  return parsed;
};

export const Blogpost = ({ data }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img
          src={data && data["_embedded"]["wp:featuredmedia"][0]["source_url"]}
          alt="blogpost"
        />
      </ImageWrapper>
      <Title>{data && data.title.rendered}</Title>
      <Subcopy>{data && stripAndParse(data.excerpt.rendered)}</Subcopy>
    </Wrapper>
  );
};
