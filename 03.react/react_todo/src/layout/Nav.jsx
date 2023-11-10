export default function Nav() {
  const arrowBack = () => {
    if (window.location.href.includes("info")) {
      window.location.href = "/";
    } else {
      window.history.back();
    }
  };

  return (
    <nav>
      <i className="fa-solid fa-arrow-left" onClick={() => arrowBack}></i>
    </nav>
  );
}
