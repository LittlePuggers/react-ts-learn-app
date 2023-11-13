import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import userIcon from "../../assets/icons/user-regular.svg";
import lockIcon from "../../assets/icons/lock-solid.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login, setToken } from "../../services/auth.service";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";

export function Login() {
  const navigate = useNavigate();
  const errorInitialState = {
    email: false,
    password: false,
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(errorInitialState);
  const { setEmailContext } = useUser();
  const { setLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(errorInitialState);
    if (email.length < 1) {
      setError((prev) => {
        return { ...prev, email: true };
      });
      return;
    }
    if (password.length < 1) {
      setError((prev) => {
        return { ...prev, password: true };
      });
      return;
    }
    const data = { email, password };
    const result = await login(data);
    setToken(result.data.token);
    setLoggedIn(true);
    setEmailContext(email);
    navigate("/");
  };

  return (
    <section className="sign-in">
      <h1>Sign In</h1>
      <p>Welcome back</p>
      <form>
        <Input
          name="email"
          labelText="Email"
          placeholder="Enter email"
          inputType="text"
          icon={userIcon}
          error={error.email}
          onChange={setEmail}
        />
        <Input
          name="password"
          labelText="Password"
          placeholder="Enter password"
          inputType="password"
          icon={lockIcon}
          error={error.password}
          onChange={setPassword}
        />
        <Button
          btnText="Sign In"
          onClick={handleSubmit}
          className="primary-btn"
        />
      </form>
      <h3>OR</h3>
      <p>
        Don't have an account?{" "}
        <span onClick={() => navigate("/join-us")}>Sign up!</span>
      </p>
    </section>
  );
}
