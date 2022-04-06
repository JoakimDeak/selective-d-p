const target = document.body;
const config = { attributes: false, childList: true, subtree: true };

const observer = new MutationObserver(changeColor);
observer.observe(target, config);

function changeColor() {
  const openMatches = document.querySelectorAll('[title="Status: Open"]');
  if (openMatches.length > 0) {
    const prOpen = openMatches[0];
    prOpen.setAttribute(
      "style",
      "background-color:rgb(35, 134, 54) !important"
    );
  }

  const iconMatches = document.querySelectorAll(
    '[class*="octicon-git-pull-request open"]'
  );
  if (iconMatches.length > 0) {
    for (match of iconMatches) {
      match.setAttribute("style", "color:rgb(63, 185, 80) !important");
    }
  }
}
