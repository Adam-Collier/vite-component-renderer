import React from 'react';
import './App.css';
import styled, { css, createGlobalStyle } from 'styled-components';
import { Image } from './components/Image';
import { Button } from './components/Button';
import { ImageRow } from './components/ImageRow';
import { ShoppableImage } from './components/ShoppableImage';

const Row = styled.section`
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
    `}

  margin: 0 auto 8rem;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : 'none')};

  @media (max-width: 767px) {
    margin: 0 auto 3rem;
  }
`;

const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  .breadcrumbs {
    display: none;
  }

  @media (min-width: 768px){
    .main-container {
      max-width: none;
      margin-left: auto;
      margin-right: auto;
      padding-left: 0;
      padding-right: 0;
    }
  }

  p {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 2;
    font-size: 1rem;
    font-weight: 400;
    padding: 0 1rem;
  }

  body {
    margin: 0;
  }
`;

const Container = styled.div`
  width: auto;
`;

const IntroText = styled.p`
  color: #000;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.75rem;
  }
`;

function App() {
  return (
    <Container className="container">
      <GlobalStyle />
      <Row>
        <Image
          alt="grid item alt"
          height={600}
          quality={80}
          sizes="100vw"
          src={[
            'https://media.missguided.com/i/missguided/restyld-lp-desktop-v2',
            {
              media: '(max-width: 767px)',
              width: 414,
              height: 414,
              src:
                'https://media.missguided.com/i/missguided/restyld-lp-mobile-v2',
            },
          ]}
          width={1440}
        />
      </Row>
      <Row maxWidth="720">
        <IntroText>
          Introducing RE_STYLD by Missguided. Putting the planet first with
          elevated and curated styles, made from recycled fibres. Discover
          classic fits and key staples, designed to stand the test of time.
        </IntroText>
        <Row maxWidth="640" flex>
          <Button text="shop now" link="/collaborations/restyld" />
          <Button
            text="find out more"
            link="https://www.missguided.co.uk/babezine/our-world/introducing-restyld-by-missguided"
          />
        </Row>
      </Row>
      {/* <Row>
        <ImageRow contrast>
          <ShoppableImage
            alt="restyld jeans"
            height={432}
            sizes="(max-width: 600px) 100vw, 30vw"
            src="https://media.missguided.com/i/missguided/restyled_jeans_25_03_21"
            width={432}
            link="/collaborations/restyld/restyld-jeans"
            text="shop jeans"
          />
          <ShoppableImage
            alt="restyld dresses"
            height={800}
            quality={80}
            sizes="(max-width: 600px) 100vw, 50vw"
            src="https://media.missguided.com/i/missguided/restyld_dresses_25_03_21"
            width={720}
            link="/collaborations/restyld/restyld-dresses"
            text="shop dresses"
          />
        </ImageRow>
      </Row> */}
      <Row>
        <ImageRow overlap>
          <ShoppableImage
            alt="restyld sweats"
            height={850}
            sizes="(max-width: 600px) 50vw, 40vw"
            src="https://media.missguided.com/i/missguided/restyld_sweats_25_03_21"
            width={680}
            link="/collaborations/restyld/restyld-hoodies-sweats"
            text="shop sweats"
          />
          <ShoppableImage
            alt="restyld shorts"
            height={850}
            quality={80}
            sizes="(max-width: 600px) 50vw, 40vw"
            src="https://media.missguided.com/i/missguided/restyld_shorts_25_03_21"
            width={680}
            link="/collaborations/restyld/restyld-shorts"
            text="shop shorts"
          />
        </ImageRow>
      </Row>

      <Row>
        <ImageRow sidebyside>
          <ShoppableImage
            alt="restyld tops"
            height={800}
            sizes="(max-width: 600px) 50vw, 40vw"
            src="https://media.missguided.com/i/missguided/restyld_tops_25_03_21"
            width={680}
            link="/collaborations/restyld/restyld-tops"
            text="shop tops"
          />
          <ShoppableImage
            alt="restyld trousers"
            height={800}
            quality={80}
            sizes="(max-width: 600px) 50vw, 40vw"
            src="https://media.missguided.com/i/missguided/restyld_trousers_25_03_21"
            width={680}
            link="/collaborations/restyld/restyld-trousers"
            text="shop trousers"
          />
        </ImageRow>
      </Row>

      {/* <Row>
        <ImageRow padded>
          <ShoppableImage
            alt="restyld tops"
            height={800}
            sizes="(max-width: 600px) 100vw, 80vw"
            src={[
              'https://media.missguided.com/i/missguided/restyld_denim_25_03_21_2',
              {
                media: '(max-width: 768px)',
                width: 650,
                height: 800,
                src:
                  'https://media.missguided.com/i/missguided/restyld_denim_mobile_25_03_21',
              },
            ]}
            width={1300}
            link="/collaborations/restyld/restyld-denim"
            text="shop denim"
          />
        </ImageRow>
      </Row> */}
    </Container>
  );
}

export default App;
