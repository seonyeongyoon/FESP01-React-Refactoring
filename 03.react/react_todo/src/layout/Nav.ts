const Nav = function (): HTMLElement {
  const navNode = document.createElement("nav");
  const arrowBack = document.createElement("i");
  arrowBack.className = "fa-solid fa-arrow-left";
  arrowBack?.addEventListener("click", () => {
    if (window.location.href.includes("info")) {
      window.location.href = '/';
    } else {
      window.history.back();
    }
  });

  navNode.appendChild(arrowBack);
  return navNode;
};
export default Nav;
