import { useNavigate } from "react-router-dom";
import img from "../../assets/images/learn-logo.png";

export function Logo() {
  const navigate = useNavigate();

  return (
    <img
      src={img}
      alt="Learn logo"
      className="logo-blend"
      onClick={() => navigate("/")}
    />
  );
}
