import { useNavigate } from "react-router-dom";
import checkmark from "../../assets/icons/circle-check-regular.svg";
import { Button } from "../../components/UI/Button";
import { useAuth } from "../../context/AuthContext";
import { logout, removeToken } from "../../services/auth.service";

export function ChangePasswordOk() {
  const { setLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logout();
    removeToken();
    setLoggedIn(false);
    navigate("/login");
  };
  return (
    <section className="change-pass-ok">
      <h1>Password changed</h1>
      <img src={checkmark} alt="Check mark"></img>
      <p>Please, proceed sign in with new password</p>
      <Button
        btnText="Sign in"
        className="primary-btn"
        onClick={handleSubmit}
      />
    </section>
  );
}
