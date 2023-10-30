import { Button } from "../common/Button";
import { Input } from "../common/Input";
import userIcon from "../../assets/icons/user-regular.svg";
import lockIcon from "../../assets/icons/lock-solid.svg";

export function SignIn() {
  return (
    <section className="sign-in">
      <h1>Sign In</h1>
      <p>Welcome back</p>
      <form>
        <Input
          name="username"
          labelText="User name"
          placeholder="Enter name"
          inputType="text"
          icon={userIcon}
        />
        <Input
          name="password"
          labelText="Password"
          placeholder="Enter password"
          inputType="password"
          icon={lockIcon}
        />
        <Button btnText="Sign In" onClick={undefined} className="primary-btn" />
      </form>
      <h3>OR</h3>
      <p>
        Don't have an account? <a href=".">Sign up!</a>
      </p>
    </section>
  );
}
