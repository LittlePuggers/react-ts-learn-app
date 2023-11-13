import { Typography, Link, Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function Breadcrumbs() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const pathname = location.pathname;
  const breadcrumbs = pathname.split("/").slice(1);
  const breadcrumbFormat = (pathArr) => {
    const filterBlanks = pathArr.filter((str) => str.length > 0);
    const formatStr = filterBlanks.map((str) => {
      const words = str.replace("-", " ").split(" ");
      const upperCase = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      return upperCase.join(" ");
    });
    return formatStr;
  };
  const prevPaths = breadcrumbFormat(breadcrumbs).slice(0, -1);
  const currentPath = breadcrumbFormat(breadcrumbs).slice(-1);
  // console.log("breadcrumbs:", breadcrumbs);
  // console.log("prevPaths:", prevPaths);
  // console.log(isLoggedIn);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator=">">
      {prevPaths.map((path, index) => {
        return (
          <Link key={index} href={`/${breadcrumbs[index]}`}>
            {path}
          </Link>
        );
      })}
      <Typography>{currentPath}</Typography>
    </MUIBreadcrumbs>
  );
}
