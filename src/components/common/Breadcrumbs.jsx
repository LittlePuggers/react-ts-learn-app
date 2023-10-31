import { Link } from "react-router-dom";

export function Breadcrumbs() {
  return (
    <nav>
      <Link to="">GreatParent</Link>
      <span> &gt </span>
      <Link to="">Parent</Link>
      <span> &gt </span>
      <p>Current page</p>
    </nav>
  );
}
