import { Button } from "../common/Button";

export function RegisterValidation({ user }) {
  return (
    <section className="register-val">
      <h1>Registration</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
      </svg>
      <p className="congrats">
        Congratulations, you have successfully registered with Learn Platform!
        Here are your credentials that you can change in your account
      </p>
      <p>User name</p>
      <p>{user.userName}</p>
      <p>Password</p>
      <p>qwerty12345</p>
      <Button
        className="primary-btn"
        btnText="My account"
        onClick={undefined}
      />
    </section>
  );
}
