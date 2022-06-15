const target = document.body;
const config = { attributes: false, childList: true, subtree: true };

const observer = new MutationObserver(changeColor);
observer.observe(target, config);

function changeColor() {
  const matches = document.querySelectorAll('[title="Status: Open"]');
  for (const el of matches) {
    el.setAttribute('style', 'background-color:rgb(35, 134, 54) !important');
  }

  const iconMatches = document.querySelectorAll('[class*="octicon-git-pull-request open"]');
  const recentActivityMatches = document.querySelectorAll('[aria-label="Open pull request"]');
  for (match of [...iconMatches, ...recentActivityMatches]) {
    match.setAttribute('style', 'color:rgb(63, 185, 80) !important');
  }
}
