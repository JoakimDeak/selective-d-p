const target = document.body;
const config = { attributes: false, childList: true, subtree: true };

const observer = new MutationObserver(changeColor);
observer.observe(target, config);

function changeColor() {
  const elementMatches = document.querySelectorAll(
    '[title="Status: Open"], [class*="color-bg-open-emphasis"]'
  );
  elementMatches.forEach((match) =>
    match.setAttribute("style", "background-color:rgb(35, 134, 53) !important")
  );

  const iconMatches = document.querySelectorAll(
    '[class*="color-fg-open"], [aria-label="Open pull request"], [class*="octicon-issue-opened"]'
  );
  iconMatches.forEach((match) =>
    match.setAttribute("style", "color:rgb(63, 185, 80) !important")
  );
}
