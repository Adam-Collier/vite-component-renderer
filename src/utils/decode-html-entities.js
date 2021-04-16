export const decodeHtmlEntities = (html) => {
  var textArea = document.createElement("textarea");
  textArea.innerHTML = html;
  let decodedHTML = textArea.value;
  textArea.remove();
  return decodedHTML;
};
