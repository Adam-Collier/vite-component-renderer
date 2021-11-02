import React, { useState } from "react";
import styled from "styled-components";
import { globalStyles } from "../../styles/global";
import { Button } from "vite-storybook";
import { Copy, Loader, Check } from "react-feather";

import { lazyLoading } from "../../template-scripts/lazyloading";
import { keenSlider } from "../../template-scripts/keen-slider";
import { form } from "../../template-scripts/form";

import prettier from "https://unpkg.com/prettier@2.2.1/esm/standalone.mjs";
import parserHTML from "https://unpkg.com/prettier@2.2.1/esm/parser-html.mjs";
import parserCSS from "https://unpkg.com/prettier@2.2.1/esm/parser-postcss.mjs";
import parserBabel from "https://unpkg.com/prettier@2.2.1/esm/parser-babel.mjs";

import { copyToClipboard } from "../../utils/copy-to-clipboard";
import { decodeHtmlEntities } from "../../utils/decode-html-entities";
import { delay } from "../../utils/async-delay";

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

const StyledButton = styled(Button)``;

export const Code = () => {
  const [icon, setIcon] = useState(Copy);
  const [copied, setCopied] = useState(false);

  let createHTML = async () => /*html*/ `
      <style>
        ${globalStyles}
      </style>
      ${document.querySelector("[data-styled]").outerHTML}
      ${decodeHtmlEntities(document.querySelector(".container").outerHTML)}
      ${lazyLoading()}
      ${keenSlider()}
      ${form()}
      `;

  let addToHighlighter = async () => {
    setIcon(Loader);

    let createdHTML = await createHTML();
    let formattedHTML = await prettier.format(createdHTML, {
      parser: "html",
      plugins: [parserHTML, parserCSS, parserBabel],
    });

    copyToClipboard(formattedHTML);
    setIcon(Check);
    setCopied(true);
    await delay(2000);
    setIcon(Copy);
    setCopied(false);
  };

  return (
    <Wrapper>
      <StyledButton
        icon={icon}
        text={copied ? "Copied!" : "Copy to Clipboard"}
        variant="fill"
        onClick={addToHighlighter}
      />
    </Wrapper>
  );
};
