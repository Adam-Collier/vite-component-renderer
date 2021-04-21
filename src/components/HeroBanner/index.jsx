import React from "react";
import styled from "styled-components";
import { Image } from "../Image";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Text } from "../Text";

const Subcopy = styled(Text)`
  border-radius: var(--border-radius);
  background: var(--background);
  color: var(--color);
  padding: var(--padding);
  max-width: 400px;

  @media (max-width: 767px) {
    max-width: calc(100vw - 2rem);
  }
`;

const Wrapper = styled.a`
  --padding: 1rem;
  --spacing: 0.5rem;
  position: relative;
  display: block;

  @media (max-width: 767px) {
    --padding: 0.75rem;
  }
`;

const Content = styled(Stack)`
  position: absolute;
  bottom: 3rem;
  left: 3rem;

  @media (max-width: 767px) {
    bottom: 0.75rem;
    left: 0.75rem;
  }
`;

const Logo = styled.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: 380px;
  max-height: 140px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;

  @media (max-width: 767px) {
    width: 70%;
    max-width: 380px;
    max-height: 100px;
  }
`;

export const HeroBanner = (props) => {
  const {
    className,
    buttonText,
    link,
    logo,
    subcopy,
    noContentBackground,
    noLogoBackground,
    contentBackground,
    contentColor,
  } = props;

  let noBackgroundStyles = {
    "--padding": "0",
    "--background": "none",
    "--spacing": "1.5rem",
    "--color": "var(--primary-black)",
  };

  let noLogoStyles = {
    "--background": "none",
    "--padding": "none",
  };

  let defaultStyles = {
    "--background": contentBackground || "var(--primary-black)",
    "--color": contentColor || "var(--primary-white)",
  };

  return (
    <Wrapper
      href={link}
      style={
        noContentBackground ? { ...noBackgroundStyles } : { ...defaultStyles }
      }
      className={className}
      contentColor={contentColor}
      contentBackground={contentBackground}
    >
      <Image {...props} />
      <Content space="var(--spacing)">
        <Logo
          src={logo}
          alt="logo"
          style={noLogoBackground && { ...noLogoStyles }}
        />
        <Subcopy>{subcopy}</Subcopy>
        <Button text={buttonText} variant="fill" />
      </Content>
    </Wrapper>
  );
};

HeroBanner.defaultProps = {
  src: "https://media.missguided.com/i/missguided/missguided_beauty_hero",
  width: 1440,
  height: 640,
  alt: "hero banner",
  sizes: "100vw",
  subcopy:
    "Missguided Beauty is now live. Make room in your makeup bag for affordable, vegan and cruelty-free makeup that will leave you with a flawless finish.",
  buttonText: "shop now",
  logo: "https://media.missguided.com/i/missguided/missguided_beauty_1",
};
