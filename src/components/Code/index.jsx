import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import App from '../../App';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from './theme';

import prettier from 'https://unpkg.com/prettier@2.2.1/esm/standalone.mjs';
import parserHTML from 'https://unpkg.com/prettier@2.2.1/esm/parser-html.mjs';

export const Code = () => {
  // const sheet = new ServerStyleSheet();

  // const markup = renderToString(sheet.collectStyles(<App />));
  // const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
  // console.log(styleTags);

  const sheet = new ServerStyleSheet();

  try {
    const markup = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <App />
      </StyleSheetManager>
    );
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    const outputHTML = `
    ${styleTags}
    ${markup}
    <script>
        document.addEventListener('DOMContentLoaded', function () {
        let lazyImages = Array.from(document.querySelectorAll('.container picture'));

        let callback = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              let imgEl = entry.target;
              let sources = Array.from(imgEl.parentNode.querySelectorAll('source'));
              sources.forEach((source) => {
                source.srcset = source.dataset.srcset;
              });

              lazyImageObserver.unobserve(imgEl);
            }
          });
        }

        const options = {
          threshold: 0,
          root: null,
        };

        let lazyImageObserver = new IntersectionObserver(callback, options);

        lazyImages.forEach(function (lazyImage) {
          lazyImageObserver.observe(lazyImage.querySelector("img"));
        });
      });
    </script>
  `;

      return (
        <SyntaxHighlighter language="html" style={theme}>
          {prettier.format(outputHTML, {
            parser: 'html',
            plugins: [parserHTML],
          })}
        </SyntaxHighlighter>
      );
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    sheet.seal();
  }


};
