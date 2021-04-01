import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../../App';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from './theme';

import prettier from 'https://unpkg.com/prettier@2.2.1/esm/standalone.mjs';
import parserHTML from 'https://unpkg.com/prettier@2.2.1/esm/parser-html.mjs';

export const Code = () => {
  const sheet = new ServerStyleSheet();

  const markup = renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

  const outputHTML = `
    <style>
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

        @media (max-width: 767px){
          .main-container .main > :not(.toolbar-container){
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
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
    </style>
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
};
