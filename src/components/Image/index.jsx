import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: none;
  }

  div {
    position: relative;
    overflow: hidden;
    height: 0;
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    padding-top: ${(props) => `${(props.height / props.width) * 100}%`};

    ${(props) =>
      props.isArtDirected &&
      props.artDirectedImages
        .map(({ media, height, width }) => {
          return `
        @media ${media} {
          padding-top: ${(height / width) * 100}%;
        }
      `;
        })
        .join("")}
  }
`;

export const Image = (props) => {
  const { width, alt, src, quality, sizes } = props;

  const pictureEl = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let sources = Array.from(
            pictureEl.current.querySelectorAll("source")
          );
          sources.forEach((source) => {
            source.srcset = source.dataset.srcset;
          });
        }
      });
    };

    const options = {
      threshold: 0,
      root: null,
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(pictureEl.current.querySelector("img"));

    return () => observer.disconnect();
  }, [pictureEl]);

  let imageSizes = [0.25, 0.5, 1, 1.5, 2, 3];
  let imageTypes = ["webp", "jpeg"];

  let createSrcSet = ({ type, width, src }) => {
    return imageSizes
      .map((size) => {
        let imageWidth = width * size;
        return `${src}.${type}?w=${imageWidth}&qlt=${quality} ${imageWidth}w`;
      })
      .join(",");
  };

  const isArtDirected = Array.isArray(src);

  let defaultImage = isArtDirected ? src[0] : src;
  let artDirectedImages;

  if (isArtDirected) {
    [, ...artDirectedImages] = src;
  }

  return (
    <ImageWrapper {...props}>
      <div></div>
      <picture ref={pictureEl}>
        {isArtDirected &&
          artDirectedImages.map((image) => {
            return imageTypes.map((type, index) => (
              <source
                key={index}
                type={`image/${type}`}
                data-srcset={createSrcSet({ type, ...image })}
                sizes={sizes}
                media={image.media}
              />
            ));
          })}
        {imageTypes.map((type, index) => (
          <source
            key={index}
            type={`image/${type}`}
            data-srcset={createSrcSet({ type, width, src: defaultImage })}
            sizes={sizes}
          />
        ))}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          alt={alt}
          loading="lazy"
        />
      </picture>
    </ImageWrapper>
  );
};

Image.defaultProps = {
  width: 480,
  height: 480,
  alt: "image alt",
  quality: 80,
  backgroundColor: "#ECECF2",
  sizes: "(max-width: 600px) 100vw, 20vw",
};
