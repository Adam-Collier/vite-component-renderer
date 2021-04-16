import React, { useState } from "react";
import styled from "styled-components";
import { globalStyles } from "../../styles/global";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import prismMarkup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import { Button } from "../Button";
import theme from "./theme";

import { lazyLoading } from "../../template-scripts/lazyloading";
import { keenSlider } from "../../template-scripts/keen-slider";
import { keenSliderCSS } from "../../template-scripts/keen-slider-css";

import prettier from "https://unpkg.com/prettier@2.2.1/esm/standalone.mjs";
import parserHTML from "https://unpkg.com/prettier@2.2.1/esm/parser-html.mjs";
import parserCSS from "https://unpkg.com/prettier@2.2.1/esm/parser-postcss.mjs";
import parserBabel from "https://unpkg.com/prettier@2.2.1/esm/parser-babel.mjs";

import { decodeHtmlEntities } from "../../utils/decode-html-entities";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
`;

const Highlighter = styled(SyntaxHighlighter)`
  width: 100%;
  height: 100%;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

export const Code = () => {
  const [html, setHtml] = useState("");

  let createHTML = () => /*html*/ `
      <style>
        ${keenSliderCSS()}
      </style>
      <style>
        ${globalStyles}
      </style>
      ${document.querySelector("[data-styled]").outerHTML} 
      ${decodeHtmlEntities(document.querySelector(".container").outerHTML)}
      ${lazyLoading()}
      ${keenSlider()}
      `;

  let addToHighlighter = () => {
    let createdHTML = createHTML();

    let formattedHTML = prettier.format(createdHTML, {
      parser: "html",
      plugins: [parserHTML, parserCSS, parserBabel],
    });

    setHtml(formattedHTML);
  };

  SyntaxHighlighter.registerLanguage("html", prismMarkup);

  return (
    <Wrapper>
      <Highlighter language="html" style={theme}>
        {html}
      </Highlighter>
      <StyledButton
        text="Create HTML"
        variant="fill"
        onClick={addToHighlighter}
      />
    </Wrapper>
  );
};
