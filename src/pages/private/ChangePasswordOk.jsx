import checkmark from "../../assets/icons/circle-check-regular.svg";
import { Button } from "../../components/UI/Button";
import { useAuth } from "../../context/AuthContext";

export function ChangePasswordOk() {
  const { logout } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <section>
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
