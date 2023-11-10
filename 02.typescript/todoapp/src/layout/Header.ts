const Header = function (title: string): HTMLHeadElement {
  const headerNode = document.createElement("header");
  const h1 = document.createElement("h1");
  const headerTitle = document.createTextNode(title);

  h1.appendChild(headerTitle);
  headerNode.appendChild(h1);
  return headerNode;
};

export default Header;
