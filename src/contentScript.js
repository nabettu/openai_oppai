"use strict";
const SRC_TEXT = "OpenAI";
const REPLACE_TEXT = "Oppai";

const observer = new MutationObserver(records => {
  contains("span", SRC_TEXT).map(
    s => (s.innerHTML = s.innerHTML.replace(SRC_TEXT, REPLACE_TEXT))
  );
});
const target = document.getElementById("react-root");

observer.observe(target, { childList: true, subtree: true });

function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function (element) {
    return RegExp(text).test(element.textContent);
  });
}
