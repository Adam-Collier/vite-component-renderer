import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Siema from "siema";
import { ArrowLeft, ArrowRight } from "react-feather";
import { Wrapper as BlogpostsWrapper } from "../Blogposts";

// this config will also be used for the
export const siemaConfig = {
  loop: true,
  duration: 300,
};

const Wrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
`;

const Navigation = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;

  /* if the carousel exists within the Blogposts component move the navigation */
  ${BlogpostsWrapper} & {
    bottom: auto;
    top: 2rem;
    right: 2rem;
  }
`;

const Button = styled.button`
  background: var(--primary-black);
  border: none;
  color: var(--primary-white);
  border-radius: var(--border-radius);
  line-height: 0px;
  padding: 0.75rem;

  &:hover {
    cursor: pointer;
    background: hsl(0, 0%, 20%);
  }

  &:last-of-type {
    margin-left: 0.5rem;
  }
`;

export const Carousel = ({ children, perPage = 1 }) => {
  let siema = useRef(null);
  let carousel = useRef(null);

  useEffect(() => {
    if (siema.current === null) {
      siema.current = new Siema({
        ...siemaConfig,
        selector: carousel.current,
        perPage,
      });
    }
  });

  let prev = () => {
    siema.current.prev();
  };

  let next = () => {
    siema.current.next();
  };

  return (
    <Wrapper>
      <div className="siema" ref={carousel}>
        {children.length > 1 ? children.map((child) => child) : children}
        {/* {children.map((child) => child)} */}
      </div>
      <Navigation>
        <Button onClick={() => prev()}>
          <ArrowLeft size={18} />
        </Button>
        <Button onClick={() => next()}>
          <ArrowRight size={18} />
        </Button>
      </Navigation>
    </Wrapper>
  );
};
