import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from './src/App';
import fs from "fs-extra"

// const sheet = new ServerStyleSheet();
// try {
//   const html = renderToString(sheet.collectStyles(<App />));
//   const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
//   console.log(html, 'this is the html');
//   console.log(styleTags, 'these are the style tags');

//   fs.outputFile("./dist/index.html", `
//     ${styleTags}
//     ${html}
//     `);
// } catch (error) {
//   // handle error
//   console.error(error);
// } finally {
//   sheet.seal();
// }


const sheet = new ServerStyleSheet();
try {
  const markup = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <App />
    </StyleSheetManager>
  );
  const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

  fs.outputFile(
    './dist/index.html',
    `
    ${styleTags}
    ${markup}
    `
  );
} catch (error) {
  // handle error
  console.error(error);
} finally {
  sheet.seal();
}




